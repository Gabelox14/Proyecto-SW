import "../styles/button.css";
// import React, { useState } from "react";


interface Item {
    title: string;
    price: number;
    img: string;
}




const Cards = ({ item, handleClick }: { item: Item, handleClick: (item: Item) => void }) => {
    const { title, price, img } = item;
    
    
    async function get() {
        try{
            const endpoint = '/data-api/rest/dishservicios/';
            const response = await fetch(endpoint);
            const result = await response.json();

            console.table(result.value);

        } catch{
        
        }
    }

    
    

   

    return (
        <>
            <section className="flex flex-row px-6 py-4 lg:w-1/3 text-white w-full bg-bgColor">
                <div className="p-1 md:w-1/3 w-1/2 lg:w-full mb-4">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-auto">
                        <img className="lg:h-72 md:h-36 h-48 w-full object-cover object-center" src={img} alt="item" />
                        <div className="px-3 py-2">
                            <h1 className="text-xl font-bold mb-3">{title}</h1>
                            <div className="flex flex-wrap justify-between mb-2">
                                <p className="leading-relaxed mt-4 text-lg">Price:  ₡{price}</p>
                                <button onClick={() => handleClick(item)} className="animated-btn">Add to Cart</button>
                                <button onClick={(get)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cards;