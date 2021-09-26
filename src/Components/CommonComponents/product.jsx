import React, { useState, useEffect, useContext } from "react";
import {
  ArrowRight,
  MinusCircle,
  PlusCircle,
  ShoppingCartOutline,
} from "heroicons-react";
import { Context } from "../../Context API/GlobalContext";

function Product({ product }) {
  const [hidden, sethidden] = useState(true);
  const { products, countTotal, setcountTotal, selectedProducts } =
    useContext(Context);
  const [count, setcount] = useState(product.count);

  const handleIncrease = () => {
    sethidden(false);
    const index = products.findIndex((item) => item.id === product.id);
    products[index].count += 1;
    setcount(products[index].count);
    let tempCount = countTotal + 1;
    setcountTotal(tempCount);
    handleSelectedProducts(count + 1);
    //console.log(products);
  };
  const handleDecrease = () => {
    if (product.count === 1) {
      sethidden(true);
    }
    const index = products.findIndex((item) => item.id === product.id);
    products[index].count -= 1;
    setcount(products[index].count);
    console.log(count, "from");
    let tempCount = countTotal - 1;
    setcountTotal(tempCount);
    handleSelectedProducts(count - 1);
    //console.log(products);
  };
  const handleSelectedProducts = (count) => {
    const index = selectedProducts.findIndex((item) => item.id === product.id);
    console.log(index);
    if (index !== -1) {
      console.log("here");
      if (count === 0) {
        const selectedTemp = selectedProducts.filter(
          (p) => p.id !== product.id
        );
      }
    } else {
      console.log("there", count);
      if (count > 0) {
        selectedProducts.push(product);
      }
    }
  };
  // const handleChange = (e) => {
  //   const inputValue = e.target.value;
  //   console.log(e.target);
  //   //product.count = inputValue;
  //   // const index = products.findIndex((item) => item.id === product.id);
  //   // products[index].count = inputValue;
  // };
  return (
    <div className="shadow-xl p-3">
      <div className="group relative">
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
            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
        </div>
      </div>
      <div className="justify-between xl:flex flex-row ">
        {hidden && (
          <a
            onClick={handleIncrease}
            href="#"
            className="justify-center bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 text-gray-50 flex flex-row hover:from-pink-600 hover:to-pink-600 object-bottom"
          >
            <ShoppingCartOutline />
            <h1>Add to cart</h1>
          </a>
        )}

        {!hidden && (
          <a
            href="#"
            className="justify-center bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-6 text-gray-50 flex flex-row hover:from-pink-600 hover:to-pink-600 object-bottom"
          >
            <MinusCircle onClick={handleDecrease} />
            <h1 className="text-gray-50 mx-3">{count}</h1>
            <PlusCircle onClick={handleIncrease} />
          </a>
        )}
        <a
          href="#"
          className="justify-center bg-purple-600 rounded-full py-2 px-4 text-gray-50 my-2 xl:my-0 flex flex-row hover:bg-purple-800 object-bottom"
        >
          <ArrowRight />
          <h1>View Details</h1>
        </a>
      </div>
    </div>
  );
}

export default Product;
