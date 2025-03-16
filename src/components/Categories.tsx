"use client";

const Categories: React.FC = () => {

    const categories = [
        'Category 1',
        'Category 2',
        'Category 3',
        'Category 4',
        'Category 5',
        'Category 6',
        'Category 7',
    ];

    return (
        <div className="flex gap-10 font-open-sans w-screen justify-center p-8">
            <div className="flex flex-col gap-8 w-[82rem]">
                <h1 className="text-3xl font-bold text-primary">Explore Products</h1>
                <div className="flex gap-4">
                    {categories.map((category, index) => (
                        <div key={index} className="flex justify-center items-center p-4 w-40 h-40 bg-secondary rounded-full text-text font-medium">
                            {category}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;