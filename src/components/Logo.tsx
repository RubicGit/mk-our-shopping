import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
    isDarkMode: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDarkMode }) => {
    return (
        <Link href="/">
            <Image src={isDarkMode ? "/mk-dark.svg" : "/mk.svg"} alt="Logo" width={48} height={48} />
        </Link>
    );
};

export default Logo;