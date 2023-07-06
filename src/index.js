import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React</h1>;
}
//react version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    // during development it will run twice to make sure theres no bugs.
    <App />
  </React.StrictMode>
);

//React <18 :
//React.render(<App/>);
