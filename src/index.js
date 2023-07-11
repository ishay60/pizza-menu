import React from "react";
import ReactDOM from "react-dom/client";

import './index.css';
import pizzaData, { pizzas } from './data'

function App() {
  return (
    <div className="container ">
      <Header />
      <Menu/>
      <Footer />
    </div>
  );
}


//function Pizza(props){
//  console.log(props);
//}
function Pizza({ pizzaData }) {
  const { name, ingredients, price, photoName, soldOut ,photo} = pizzaData;
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

function Header() {
  const style ={color:"red",fontSize:'32px',textTransform:"uppercase"}
  return (<header className="header footer">
    <h1 style={style}>Fast React Pizza Co.</h1>
  </header>
 )}



function Menu() {
  return (
    <main className="menu">

      <h2>Our Menu</h2>
      {/* <Pizza  name= "Focaccia"
              ingredients= "Bread with italian olive oil and rosemary"
              price={6}
              photoName= "pizzas/focaccia.jpg"  />
      <Pizza /> */}

      {pizzas?.map((pizza, index) => {
        if (!pizza) {
          return null
        }
        return <Pizza key={`pizza_item_${pizza.name}`} pizzaData={pizza} />
      })}
    </main>)
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour)
  // const openHour =8
  // const closeHour = 22
  //const isOpen = hour >= openHour && hour <= closeHour;
  //(hour>=openHour&&hour<=closeHour) ? alert("We're Currently Open!"):alert("Sorry, We're Closed")

  return <footer className="footer">{new Date().toLocaleTimeString() }. Were Currently open!</footer>
  
  //return React.createElement('footer', null, "were currently open!")
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
