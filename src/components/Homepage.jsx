import React from 'react';
import Navbarcomp from './Navbarcomp';
import Card from './Card';
import Glasscards from './Glasscards'; // Import the Glasscards component
import './Homepage.css';

// Card data for dishes
const cardData = [
  { title: "03", subtitle: "Pizza", backgroundImage: "/assets/Rectangle 11.png", rating: 4 },
  { title: "04", subtitle: "Biryani", backgroundImage: "/assets/Rectangle 10.png", rating: 5 },
  { title: "05", subtitle: "Sushi", backgroundImage: "/assets/Rectangle 10.png", rating: 3 },
  { title: "06", subtitle: "Pasta", backgroundImage: "/assets/Rectangle 11.png", rating: 4 },
  { title: "07", subtitle: "Burger", backgroundImage: "/assets/Rectangle 12.png", rating: 4 },
  { title: "08", subtitle: "Salad", backgroundImage: "/assets/Rectangle 19.png", rating: 5 },
  { title: "09", subtitle: "Tacos", backgroundImage: "/assets/Rectangle 20.png", rating: 3 },
  { title: "10", subtitle: "Samosa", backgroundImage: "/assets/Rectangle 21.png", rating: 4 },
];
const chefData = [
  { name: "Irfan", specialty: "Italian Cuisine", image: "/assets/Ellipse 4.png" },
  { name: "Daamu", specialty: "Indian Cuisine", image: "/assets/Ellipse 9.png" },
  { name: "Bhatt", specialty: "Sushi Master", image: "/assets/Ellipse 12.png" },
];

function Homepage() {
  return (
    <div>
      <Navbarcomp showAuthButton={false} />
      <div >
        <Card
          title="01"
          subtitle="Indian Style"
          backgroundImage="/assets/Rectangle 6.png" 
        />
        <Card
          title="02"
          subtitle="Western Style"
          backgroundImage="/assets/Rectangle 7.png" 
        />
      </div>
      
      <div className='card-grid'>
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            backgroundImage={card.backgroundImage}
            rating={card.rating} // Pass the rating prop here
          />
        ))}
      </div>
      <h1 className='overlay-heading'>Meet our Star Chefs.</h1>
      <div className='glasscards-container'>
        <Glasscards chefs={chefData} />
      </div>
    </div>
  );
}

export default Homepage;
