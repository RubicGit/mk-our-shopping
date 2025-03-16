import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

interface BtnPrimaryProps {
    children: React.ReactNode;
    link: string;
    variant: 'primary' | 'secondary' | 'accent';
    className?: string;
}

const Button: React.FC<BtnPrimaryProps> = ({ children, link, variant, className }) => {
    const buttonClass = classNames('btn', className, {
        'rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-text text-bg gap-2 hover:bg-primary/50 dark:bg-text-dark dark:text-bg-dark font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5': variant === 'primary',
        'rounded-full border border-solid border-gray-300 dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-gray-200 dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5': variant === 'secondary',
        'rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-accent text-bg gap-2 hover:bg-accent/50 dark:bg-accent dark:text-bg font-bold text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5': variant === 'accent',
    });

    return (
        <Link href={link}>
            <button className={buttonClass}>
                {children}
            </button>
        </Link>
    );
};

export default Button;
