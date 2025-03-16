import { Star } from 'lucide-react';
import React from 'react';

const Featured: React.FC = () => {
    return (
        <div className="flex gap-10 font-open-sans w-screen justify-center p-8">
            <div className="flex flex-col gap-8">
                <h1 className="text-3xl font-bold text-primary">Explore Products</h1>
                <div className="grid grid-rows-2 gap-4 w-[50rem]">
                    <div className="flex w-full h-64 justify-center items-center bg-secondary rounded-2xl">Featured Listing</div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex w-full h-64 justify-center items-center bg-secondary rounded-2xl">Featured Listing</div>
                        <div className="flex w-full h-64 justify-center items-center bg-secondary rounded-2xl">Featured Listing</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-center w-[32rem] h-[32rem] items-center bg-secondary rounded-2xl">3D Featured Listing</div>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold text-primary">Product Name</h1>
                        <h1 className="text-2xl font-medium text-accent">Br 9,200</h1>
                    </div>
                    <div className="flex gap-2 items-center justify-center w-fit">
                        <Star className="text-accent" />
                        <h1 className="text-2xl font-medium text-accent">4.2/5</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;