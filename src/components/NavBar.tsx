"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from './ui/button';
import Logo from './Logo';
import { Search, ShoppingCart, CircleUser, Sun, Moon } from 'lucide-react';
import { useThemeContext } from './ThemeContext';

interface NavBarProps {
    loggedIn: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ loggedIn }) => {
    const { theme, darkToggle } = useThemeContext();
    const [showPopupNav, setShowPopupNav] = useState(false);

    const handleScroll = () => {
        const mainNav = document.getElementById('main-nav');
        if (mainNav) {
            const rect = mainNav.getBoundingClientRect();
            setShowPopupNav(rect.bottom <= 0);
        }
    };

    useEffect(() => {
        console.log(`Current theme: ${theme}`);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [theme]);

    return (
        <>
            <nav id="main-nav" className="flex justify-between items-center gap-10 p-6 w-full bg-bg dark:bg-bg-dark text-text dark:text-text-dark">
                <div className="flex gap-8 items-center">
                    <Logo isDarkMode={theme === 'dark'} />
                    <div className="flex gap-4 text-text dark:text-text-dark">
                        <label htmlFor="search" className="flex items-center gap-2 cursor-pointer">
                            <Search className='text-text dark:text-text-dark' />
                        </label>
                        <input id="search" type="text" placeholder='Search' className='box-border rounded-full focus:outline-none focus:border focus:border-solid focus:border-gray-300 dark:focus:border-white/[.145] transition-colors flex items-center justify-center hover:bg-gray-200 dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 ' />
                    </div>
                </div>

                <div className="flex gap-4 items-center">
                    {loggedIn ? (
                        <>
                            <Link key="cart" href="/"><ShoppingCart /></Link>
                            <Link key="user" href="/"><CircleUser /></Link>
                        </>
                    ) : (
                        <>
                            <Button key="login" link="" variant='secondary'>Login</Button>
                            <Button key="signup" link="" variant='primary'>Sign Up</Button>
                        </>
                    )}
                    <button key="theme-toggle" onClick={darkToggle} className="flex items-center justify-center p-4 rounded-full hover:bg-text dark:hover:bg-text cursor-pointer">
                        {theme === 'dark' ? <Sun /> : <Moon />}
                    </button>
                </div>
            </nav>

            {showPopupNav && (
                <nav className="fixed top-0 left-0 right-0 my-6 mx-auto flex justify-between items-center gap-10 p-6 w-[97%] bg-bg dark:bg-bg-dark text-text dark:text-text-darkext shadow-lg z-50 rounded-2xl">
                    <div className="flex gap-8 items-center">
                        <Logo isDarkMode={theme === 'dark'} />
                        <div className="flex gap-4 text-text dark:text-text-dark">
                            <label htmlFor="popup-search" className="flex items-center gap-2 cursor-pointer">
                                <Search className='text-text dark:text-text-dark' />
                            </label>
                            <input id="popup-search" type="text" placeholder='Search' className='box-border rounded-full focus:outline-none focus:border focus:border-solid focus:border-gray-300 dark:focus:border-white/[.145] transition-colors flex items-center justify-center hover:bg-gray-200 dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 ' />
                        </div>
                    </div>

                    <div className="flex gap-4 items-center">
                        {loggedIn ? (
                            <>
                                <Link key="popup-cart" href="/"><ShoppingCart /></Link>
                                <Link key="popup-user" href="/"><CircleUser /></Link>
                            </>
                        ) : (
                            <>
                                <Button key="popup-login" link="" variant='secondary'>Login</Button>
                                <Button key="popup-signup" link="" variant='primary'>Sign Up</Button>
                            </>
                        )}
                        <button key="popup-theme-toggle" onClick={darkToggle} className="flex items-center justify-center p-4 rounded-full transition-all duration-200 cursor-pointer">
                            {theme === 'dark' ? <Moon className='' /> : <Sun className='' />}
                        </button>
                    </div>
                </nav>
            )}
        </>
    );
};

export default NavBar;