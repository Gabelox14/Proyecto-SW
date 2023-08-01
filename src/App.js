import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiPizzaFill } from 'react-icons/ri';
import { FaIceCream } from 'react-icons/fa';

const foodItems = [
  {
    name: 'Hamburger',
    image: 'https://im4g3s.blob.core.windows.net/img-ws/Hamburger_(black_bg).jpg',
    price: 8.99,
    category: 'Burgers',
    icon: <GiHamburgerMenu />,
  },
  {
    name: 'Pizza',
    image: 'https://im4g3s.blob.core.windows.net/img-ws/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg',
    price: 12.99,
    category: 'Pizzas',
    icon: <RiPizzaLine />,
  },
  {
    name: 'Ice Cream',
    image: 'https://im4g3s.blob.core.windows.net/img-ws/helado-cono-1-1.jpg',
    price: 4.99,
    category: 'Desserts',
    icon: <FaIceCream />,
  },
];

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        {foodItems.map((food, index) => (
          <div key={index} className="col-md-4 mb-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={food.image} />
              <Card.Body>
                <Card.Title>{food.name}</Card.Title>
                <Card.Text>Price: ${food.price.toFixed(2)}</Card.Text>
                <Card.Text>Category: {food.category}</Card.Text>
                <Button variant="primary">{food.icon} Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
