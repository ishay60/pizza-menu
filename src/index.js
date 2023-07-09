import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";

function App() {
    return (
      <div>
        <h1>Hello React</h1>
          <Pizza />
          <Pizza />
          <Pizza />
        
      </div>
    );
}

function Pizza() {
    return (
      <div>
        <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
        <h2>Pizza Spinaci</h2>
        <p>Tomato,mozarella,spinach,and riccota cheese</p>
      </div>
    );
}

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
 