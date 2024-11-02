import React from 'react';
import Card from './Card';
import './Card.css';
import SearchBox from './SearchBox';


const App = () => {
  const cards = [
    {
      imageSrc: "images/self.jpg",
      title: "Rishikesh Gupta",
      position: "Position: Fullstack Developer",
      contact: "Email: rishikeshsurya786@gmail.com"
    },
    {
      imageSrc: "images/self.jpg",
      title: "Rishikesh Gupta",
      position: "Position: Fullstack Developer",
      contact: "Email: rishikeshsurya786@gmail.com"
    },
    {
      imageSrc: "images/self.jpg",
      title: "Rishikesh Gupta",
      position: "Position: Fullstack Developer",
      contact: "Email: rishikeshsurya786@gmail.com"
    },
    {
      imageSrc: "images/self.jpg",
      title: "Rishikesh Gupta",
      position: "Position: Fullstack Developer",
      contact: "Email: rishikeshsurya786@gmail.com"
    },
    {
      imageSrc: "images/self.jpg",
      title: "Rishikesh Gupta",
      position: "Position: Fullstack Developer",
      contact: "Email: rishikeshsurya786@gmail.com"
    },
    {
      imageSrc: "images/self.jpg",
      title: "Rishikesh Gupta",
      position: "Position: Fullstack Developer",
      contact: "Email: rishikeshsurya786@gmail.com"
    }
  ];

  return (   
      <div className="employ">
        <SearchBox/>
        <h1>Employees</h1>
        <div className='card-container'>
      {cards.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          position={card.position}
          contact={card.contact}
        />
      ))}
    </div>
    </div>
  );
};

export default App;

