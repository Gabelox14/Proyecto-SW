import React, { useState, useEffect} from 'react';
import Cards from './Cards';
import { FaSearch } from "react-icons/fa";


interface Dish {
  id: number;
  imgURL: string;
  title: string;
  price: number;
  kind: string; 
  // ... Agrega otras propiedades si es necesario
}

interface DetailsProps {
  handleClick: (dish: any) => void;
}

function Details({ handleClick }: DetailsProps) {
  const [query, setQuery] = useState("");
  const [dishData, setDishData] = useState<Dish[]>([]);
  // const [activeTab, setActiveTab] = useState('All');
  // const [category, setCategory] = useState<Dish[]>([]);

  useEffect(() => {
   fetchData();
  }, []);

  async function fetchData() {
   try {
     const endpointDish = '/data-api/rest/dishservicios/';
     const response = await fetch(endpointDish);
     const result = await response.json();
     setDishData(result.value);
     // setCategory(result.value); // Initialize category with all dishes
   } catch (error) {
     console.log("Error fetching data:", error);
   }
  }

  // const handleBtns = (word: string) => {
  //   if (word === 'All') {
  //     setCategory(dishData);
  //   } else {
  //     const filtered = dishData.filter(item => item.kind === word);
  //     setCategory(filtered);
  //   }

  //   setActiveTab(word);
  // };

  return (
    <>
      <section className="container pt-4 mx-auto w-full bg-bgColor">
        <section className="px-6 flex flex-row justify-between">
          <div className="relative w-80 h-11 mt-4">
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full h-full py-4 px-10 text-base text-black rounded-lg outline-none"
              placeholder="Search food..."
            />
            <i>
              <FaSearch className="absolute left-4 top-4 text-lg w-4 h-4 text-center text-black focus:outline-none" />
            </i>
          </div>

          {/* <div className="flex flex-wrap mt-4 lg:mb-4 mb-8"> */}
            {/* <button
              value="All"
              onClick={() => handleBtns('All')}
              className={`mr-2 text-brandColor border-brandColor border-2 py-1 px-6 md:w-24 h-10 rounded-lg text-lg ${activeTab === 'All' ? 'bg-brandColor outline-none text-white' : ''}`}
            >
              All
            </button>
            <button
              value="African"
              onClick={() => handleBtns('African')}
              className={`mr-2 text-brandColor border-brandColor border-2 py-1 px-6 md:w-24 h-10 rounded-lg text-lg ${activeTab === 'African' ? 'bg-brandColor outline-none text-white' : ''}`}
            >
              African
            </button>
            <button
              value="American"
              onClick={() => handleBtns('American')}
              className={`mr-2 text-brandColor border-brandColor border-2 py-1 md:w-24 h-10 rounded-lg text-lg ${activeTab === 'American' ? 'bg-brandColor outline-none text-white' : ''}`}
            >
              American
            </button>
            <button
              value="Chinese"
              onClick={() => handleBtns('Chinese')}
              className={`mr-2 text-brandColor border-brandColor border-2 py-1 md:w-24 h-10 rounded-lg text-lg ${activeTab === 'Chinese' ? 'bg-brandColor outline-none text-white' : ''}`}
            >
              Chinese
            </button>
          </div> */}
        </section>

        <section className="flex flex-row flex-wrap">
        {dishData
  .filter(title => query === '' || title.title.toLowerCase().includes(query.toLowerCase()))
  .map(dish => (
    <Cards key={dish.id} dish={dish} handleClick={handleClick} /> // Use 'dish' prop here
))}
        </section>
      </section>
    </>
  );
}

export default Details;
