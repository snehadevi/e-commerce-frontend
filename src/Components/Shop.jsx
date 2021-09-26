import Navigation from "./Navigation";
import React, { useState, useEffect, useContext } from "react";
import ShoppingCarts from "./ShoppingCarts";
import { ArrowRight, ShoppingCartOutline } from "heroicons-react";
import { PlusCircle } from "heroicons-react";
import axios from "axios";
import Product from "./CommonComponents/product";
import { Context } from "../Context API/GlobalContext";

export default function Shop() {
  const { products, setproducts } = useContext(Context);
  const [hidden, sethidden] = useState(true);
  let productList = localStorage.getItem("products");

  return (
    <div>
      <ShoppingCarts />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-screen-2xl lg:px-8">
          {/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Customers also purchased
          </h2> */}

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-14">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
}
