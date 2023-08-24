//import React, { useState } from "react";
import "../styles/button.css";

// Define an interface for the dish data
interface Dish {
    dish_id: number;
    imgURL: string;
    title: string; // Correct the typo here: 'title' instead of 'tittle'
    price: number;
    kind: string;
    // Add other properties as needed
}

const Cards = ({ handleClick, dish }: { handleClick: (dish: Dish) => void, dish: Dish }) => {
    //const [dishData] = useState<Dish[]>([]); // Initialize with Dish[] type

    //useEffect(() => {
    //    fetchData();
    //}, []);
//
    //async function fetchData() {
    //    try {
    //        const endpointDish = '/data-api/rest/dishservicios/';
    //        const response = await fetch(endpointDish);
    //        const result = await response.json();
    //        setDishData(result.value);
    //    } catch (error) {
    //        console.log("Error fetching data:", error);
    //    }
    //}

    return (
        <>
            
                <section
                    key={dish.dish_id}
                    className="flex flex-row px-6 py-4 lg:w-1/3 text-white w-full bg-bgColor"
                >
                    <div className="p-1 md:w-1/3 w-1/2 lg:w-full mb-4">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-auto">
                            <img
                                className="lg:h-72 md:h-36 h-48 w-full object-cover object-center"
                                src={dish.imgURL}
                                alt="item"
                            />
                            <div className="px-3 py-2">
                                <h1 className="text-xl font-bold mb-3">{dish.title}</h1>
                                <div className="flex flex-wrap justify-between mb-2">
                                    <p className="leading-relaxed mt-4 text-lg">
                                        Price: ₡{dish.price}
                                    </p>
                                    <button onClick={() => handleClick(dish)} className="animated-btn">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
        </>
    );
};

export default Cards;
