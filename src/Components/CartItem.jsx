import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context API/GlobalContext";

function CartItem({ product }) {
  const { products, countTotal, setcountTotal } = useContext(Context);
  const [count, setcount] = useState(product.count);
  const handleChange = (e) => {
    const inputValue = e.target.value;
    console.log(inputValue, "l");
    setcount(inputValue);
    const index = products.findIndex((item) => item.id === product.id);
    products[index].count = inputValue;
  };
  return (
    <li className="py-6 flex">
      <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-center object-cover"
        />
      </div>

      <div className="ml-4 flex-1 flex flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{product.title}</a>
            </h3>
            <p className="ml-4">{product.price}</p>
          </div>
          {/* <p className="mt-1 text-sm text-gray-500">
                                    {product.description}
                                  </p> */}
        </div>
        <div className="flex-1 flex items-end justify-between text-sm">
          <p className="text-gray-500">
            Qty{" "}
            <input
              autoFocus
              type="number"
              value={count}
              className="w-8 h-8"
              onChange={handleChange}
            />
          </p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
