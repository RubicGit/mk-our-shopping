"use client";

import { Star } from "lucide-react";

const ForYou: React.FC = () => {

    const testimonials = [
        { name: 'Alice Johnson', title: 'Satisfied Customer', statement: 'This site is my go-to for everything! The delivery is always fast, often arriving earlier than expected. Plus, their customer support is super helpful and quick to respond. I’m a loyal customer now!', rating: 4 },
        { name: 'Bob Smith', title: 'Happy Shopper', statement: 'Shopping here is such a breeze. The site is easy to use, and I always get my orders faster than I expect. Great packaging, and customer service is always there to help when needed.', rating: 5 },
        { name: 'Charlie Brown', title: 'Frequent Buyer', statement: "Ebakotn lemen wede'enda yemeshecha site yihen serichit asdenaki new. Yemirtotch mircha ejjig asdenaki new, be’ewnetu fitnet agelglotachew ejjig yewot.", rating: 4 },
        { name: 'Diana Prince', title: 'Product Enthusiast', statement: 'I love the variety of products available here. The quality is top-notch, and the prices are unbeatable. I always recommend this site to my friends and family.', rating: 5 },
    ];

    return (
        <div className="flex gap-10 font-open-sans w-screen justify-center p-8">
            <div className="flex flex-col gap-8 w-[82rem]">
                <h1 className="text-3xl font-bold text-primary">Curated For You</h1>
                <div className="grid grid-cols-4 gap-10 place-content-center">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex flex-col justify-between items-center gap-4 p-4 w-70 bg-secondary rounded-2xl text-text font-medium justify-self-center">
                            <div className="flex gap-1 p-2">
                                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                                    <Star key={starIndex} className="text-accent" fill="currentColor" />
                                ))}
                                {Array.from({ length: 5 - testimonial.rating }).map((_, starIndex) => (
                                    <Star key={5 - starIndex} className="text-gray-400 dark:text-white" />
                                ))}
                            </div>
                            <h1 className="text-md text-center">&ldquo;{testimonials[index].statement}&rdquo;</h1>
                            <div className="flex flex-col items-center text-2xl font-semibold p-2">
                                <div className="flex w-20 h-20 bg-gray-300 dark:bg-white rounded-full mb-4"></div>
                                <h1 className="text-2xl font-semibold">{testimonial.name}</h1>
                                <p className="text-sm font-medium">{testimonial.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ForYou;