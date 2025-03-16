"use client";

const ForYou: React.FC = () => {

    const products = [
        { productName: 'Wireless Mouse', price: '$15', rating: '4.3/5' },
        { productName: 'Bluetooth Headphones', price: '$45', rating: '4.6/5' },
        { productName: 'Smartphone Stand', price: '$12', rating: '4.1/5' },
        { productName: 'Portable Charger', price: '$25', rating: '4.7/5' },
        { productName: 'LED Desk Lamp', price: '$30', rating: '4.4/5' },
        { productName: 'Noise Cancelling Earbuds', price: '$55', rating: '4.8/5' },
        { productName: 'USB-C Hub', price: '$20', rating: '4.5/5' },
        { productName: 'Ergonomic Keyboard', price: '$60', rating: '4.6/5' },
    ];

    return (
        <div className="flex gap-10 font-open-sans w-screen justify-center p-8">
            <div className="flex flex-col gap-8 w-[82rem]">
                <h1 className="text-3xl font-bold text-primary">Curated For You</h1>
                <div className="grid grid-cols-4 gap-10 place-items-center">
                    {products.map((product, index) => (
                        <div key={index} className="flex justify-center items-center p-4 w-70 h-96 bg-secondary rounded-2xl text-text font-medium justify-self-center">
                            {product.productName}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ForYou;