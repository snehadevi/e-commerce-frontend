import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/tailwind.css";
import img1 from "../images/ss.png";
import Navigation from "./Navigation";

function Home() {
  const [products, setproducts] = useState([]);
  let productList = localStorage.getItem("products");
  //console.log(productList);

  useEffect(async () => {
    if (productList) {
      console.log("hi");
      setproducts(JSON.parse(productList));
    } else {
      console.log("bye");
      const { data } = await axios.get("https://fakestoreapi.com/products");
      //console.log(data);
      setproducts(data);
      localStorage.setItem("products", JSON.stringify(data));
    }
  }, []);

  return (
    <div>
      <div className="relative h-8 bg-white mx-auto p-5 w-200">
        {/*Nav Start*/}
        <Navigation />
        {/*Nav End*/}
        {/* Hero Section */}
        <div className="flex flex-row ">
          <div className="w-2/5 flex flex-col justify-center">
            <h1 className="font-serif text-5xl text-gray-600 mb-4">
              Title Here
            </h1>
            <p className="uppercase text-gray-600 tracking wide ">Tagline</p>
            <p className="uppercase text-gray-600 tracking wide mb-2">Slogan</p>
            <a
              href="#"
              className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-4 px-8 text-gray-50 uppercase text-xl mx-auto "
            >
              Shop Now
            </a>
          </div>
          <div className="w-3/5">
            <img src={img1} alt="logo" className="w-full h-screen" />
          </div>
        </div>
        {/* End of hero section */}
      </div>
      {/* <ul>
        {products.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default Home;
