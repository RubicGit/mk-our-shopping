import React from 'react';
import { ArrowRight, Copyright } from 'lucide-react';

const Footer = () => {

    return (
        <footer className="flex flex-col items-center gap-10 pt-12 px-12 w-full bg-bg dark:bg-bg">
            <div className="flex w-full justify-between">
                <div className="flex gap-10">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl font-bold text-primary">Privacy Policy</h1>
                        <ul className='flex gap-2 flex-col text-text'>
                            <li key="home">Home</li>
                            <li key="about-us">About Us</li>
                            <li key="product">Product</li>
                            <li key="pricing">Pricing</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl font-bold text-primary">Resources</h1>
                        <ul className='flex gap-2 flex-col text-text'>
                            <li key="forum">Forum</li>
                            <li key="support">Support</li>
                            <li key="partners">Partners</li>
                            <li key="events">Events</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl font-bold text-primary">Customer Service</h1>
                        <ul className='flex gap-2 flex-col text-text'>
                            <li key="my-orders">My Orders</li>
                            <li key="faqs">FAQs</li>
                            <li key="sales-conditions">Sales Conditions</li>
                            <li key="contacts">Contacts</li>
                            <li key="legal-mentions">Legal Mentions</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col justify-end items-end gap-4">
                    <h1 className="text-5xl font-bold text-right text-primary">Join the Newsletter</h1>
                    <p className="text-xl text-right text-text">Get access to Exclusive Deals, Events and more.</p>
                    <div className="flex gap-4 text-text items-center w-fit my-4">
                        <input id="email" type="email" placeholder='Enter your email' className='box-border rounded-full focus:outline-none border-1 border-white/[.145] focus:border focus:border-solid focus:border-black/[.08] dark:focus:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-4xl sm:text-base h-80 sm:h-12 px-4 sm:px-5 ' />
                        <label htmlFor="email" className="flex items-center gap-2 cursor-pointer p-2 bg-white rounded-full">
                            <ArrowRight className='text-black' />
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex w-full">
                <h1 className="text-9xl font-black text-center w-full p-8 text-primary">MK OUR SHOPPING</h1>
            </div>
            <div className="flex items-center w-full justify-between border-t-2 border-t-white">
                <div className="flex gap-2 p-4 text-white/50">
                    <Copyright />
                    <p>2025 MK Our Shopping. All Rights Reserved.</p>
                </div>
                <div className="flex gap-4 p-4 text-text">
                    <p>Privacy Policy</p>
                    <p>Products</p>
                    <p>Customer Service</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;