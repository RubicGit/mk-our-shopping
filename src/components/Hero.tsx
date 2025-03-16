import React from 'react';
import { CheckCircle } from 'lucide-react';
import Button from '../components/ui/button';

const Hero: React.FC = () => {
    return (
        <div className="flex gap-5 flex-col font-open-sans">
            <div className="flex flex-col items-center gap-15">
                <h1 className="text-7xl font-extrabold w-[50rem] text-center text-primary">From the Market to your Doorstep</h1>
                <Button variant="accent" link={''} className="font-black">Start Browsing</Button>
            </div>
            <div className="flex px-12 justify-between items-end">
                <div className="flex items-end gap-15">
                    <div className="flex flex-col justify-between p-4 w-70 h-96 bg-secondary rounded-4xl">
                        <CheckCircle size={48} className="text-accent" />
                        <div className="flex flex-col gap-2">
                            <h2 className='text-4xl font-bold text-primary'>100 +</h2>
                            <h3 className='text-3xl w-40 text-text'>Verified Sellers</h3>
                        </div>
                    </div>
                    <div className="flex w-70 h-70 bg-secondary rounded-4xl"></div>
                </div>
                <div className="flex w-72 h-72 bg-secondary rounded-4xl"></div>
            </div>
        </div>
    );
};

export default Hero;