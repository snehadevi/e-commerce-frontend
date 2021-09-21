import Navigation from "./Navigation";
import React, { useState, useEffect } from "react";
import ShoppingCarts from "./ShoppingCarts";
import { ArrowRight, ShoppingCartOutline } from "heroicons-react";
import { PlusCircle } from "heroicons-react";

export default function Shop() {
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
      <ShoppingCarts />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-screen-2xl lg:px-8">
          {/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Customers also purchased
          </h2> */}

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-14">
            {products.map((product) => (
              <div key={product.id} className="group relative shadow-xl p-3">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.image}
                    alt={product.category}
                    className="w-full h-full object-center object-container sm:h-80 sm:w-80 lg:w-full lg:h-full"
                  />
                </div>
                <div className="h-60 sm:h-32 mt-4 flex justify-between">
                  <div className="justify-between mr-5">
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.category}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
                <div className="justify-between xl:flex flex-row ">
                  <a
                    href="#"
                    className="justify-center bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 text-gray-50 flex flex-row hover:from-pink-600 hover:to-pink-600 object-bottom"
                  >
                    <ShoppingCartOutline />
                    <h1>Add to cart</h1>
                  </a>
                  <a
                    href="#"
                    className="justify-center bg-purple-600 rounded-full py-2 px-4 text-gray-50 my-2 xl:my-0 flex flex-row hover:bg-purple-600 object-bottom"
                  >
                    <ArrowRight />
                    <h1>View Details</h1>
                  </a>
                </div>
                {/* <div className="">
                  <PlusCircle className="mx-auto" />
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
}
