import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.svg";
import "./App.css";
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {color: 'red', fontSize: '32px', textTransform: 'uppercase'};
  const style = {};

  return (
    <header>
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>


      {/* Conditional Operator && */}
      {/* {numPizzas > 0 && (
        <ul className="pizzas">
        {pizzas.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
          </ul>
          )} */}

      {/* Ternerary Operator */}
      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine. Creative dishes to choose from, all from our stone oven and delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : <p>We are still working on our menu. Please come back later.</p> }

      {/* <Pizza
        name="Pizza Spinachi"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese and garlic"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza 
        name="Pizza Funghi" 
        ingredients='Tomato, mushrooms' 
        price={12}
        photoName='pizzas/funghi.jpg' 
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  
  console.log(pizzaObj)
  // Early return to check if the pizza is sold out, so it returns nothing.
  // if(pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'Sold Out' : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer(props) {
  const hour = new Date().getHours();
  // display an alert if the restaurant is open
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if(hour >= openHour && hour <= closeHour) alert('We are open!')
  // else alert('Sorry we are closed');

  // multiple returns, check with an if statement
  // if(!isOpen) return (
  //   <p>
  //     CLOSED
  //   </p>
  // );

  return ( 
    <footer className='footer'>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (<p>Happy to welcome you between {openHour}:00 and {closeHour}:00.</p>)}
    </footer>
    )

  }
  
  function Order({ closeHour, openHour}) {
    return (
      <div className='order'>
          <p>We're open until {closeHour}:00. Come visit us or order online. We open { openHour }</p>
          <button className='btn'>Order</button>
      </div>
    )
  }


export default App;
