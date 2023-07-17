import React from "react";
import ReactDOM from "react-dom/client";

import './index.css';
import { pizzas } from "./data";

function App() {
  return (
    <div className="container ">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = { color: "red", fontSize: "32px", textTransform: "uppercase" };
  return (
    <header className="header footer">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

//function Pizza(props){
//  console.log(props);
//}
function Pizza({ pizzaData }) {
  const { name, ingredients, price, photoName, soldOut, photo } = pizzaData;
  if (soldOut) return null;
  return (
    <div className="pizza">
      <img src={photo} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* <Pizza  name= "Focaccia"
              ingredients= "Bread with italian olive oil and rosemary"
              price={6}
              photoName= "pizzas/focaccia.jpg"  />
      <Pizza /> */}

      {pizzas.map((pizza) => {
        if (!pizza) {
          return (
            <p>We're still working on our menu . Please try Again later</p>
          );
        }

        return <Pizza key={`pizza_item_${pizza.name}`} pizzaData={pizza} />;
      })}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // hour >= openHour && hour <= closeHour
  //   ? alert("We're Currently Open!")
  //   : alert("Sorry, We're Closed");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );

  //return React.createElement('footer', null, "were currently open!")
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We're open until {props.closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order Online</button>
    </div>
  );
}

//const Test = () =>

//react version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* // during development it will run twice to make sure theres no bugs. */}
    <App />
  </React.StrictMode>
);

//React <18 :
//React.render(<App/>);
