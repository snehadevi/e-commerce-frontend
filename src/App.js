import React from "react";
import "./App.css";
import Home from "./Components/Home";
//import NavBar from "./Components/CommonComponents/NavBar";
import Shop from "./Components/Shop";
import ShoppingCarts from "./Components/ShoppingCarts";
import GlobalContext from "./Context API/GlobalContext";
import CheckOut from "../src/Pages/CheckOut";
import Routing from "./Routing";

function App() {
  return (
    <GlobalContext>
      <div className="App">
        <Routing />
      </div>
    </GlobalContext>
  );
}

export default App;
