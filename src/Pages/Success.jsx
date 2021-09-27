import React, { useContext } from "react";
import Navigation from "../Components/Navigation";
import { Context } from "../Context API/GlobalContext";
import { Link } from "react-router-dom";
function Success() {
  const { selectedProducts } = useContext(Context);
  let subTotal = 0;
  selectedProducts.map((p) => (subTotal += p.count * p.price));
  return (
    <div className="">
      <div className="relative container grid grid-cols items-start pb-16 pt-4 mx-auto mt-20">
        <div className="bg-gray-50 col-span-8 border border-gray-300 p-4 rounded shadow-lg">
          <h1 className="text-lg text-purple-700">Payment Successful</h1>
          <div>
            <h1 className="text-7xl font-bold font-sans">
              Thanks For Ordering
            </h1>
            <p className="relative mt-2 text-xl text-gray-600">
              Your order is being processed. We will send you confirmation very
              soon!! Happy Shopping!!
            </p>
          </div>
          <div className="w-6/12 mx-auto border border-gray-300 shadow-lg mt-4">
            <div className="p-4 bg-white">
              <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
                Order Summery
              </h4>
              {selectedProducts.map((item) => (
                //(item) => console.log(item.name)
                <div
                  className="flex justify-between p-2 border-b border-gray-200"
                  key={item.id}
                >
                  <div className="flex flex-row">
                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="w-44 text-gray-800 font-medium">
                        {item.title}
                      </h5>
                      <p className="text-sm text-gray-600">{item.category}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 w-16">{item.price}</p>
                  <p className="text-gray-600">x</p>
                  <p className="text-gray-600">{item.count}</p>
                  <p className="text-gray-800 font-medium">
                    ${item.count * item.price}
                  </p>
                </div>
              ))}

              <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
                <p>Subtotal</p>
                <p>${parseFloat(subTotal).toFixed(2)}</p>
              </div>
              <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
                <p className="text-bold">Total</p>
                <p>${parseFloat(subTotal).toFixed(2)}</p>
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <h1 className="text-gray-800 text-lg mb-4 font-medium uppercase">
                    Shipping Address
                  </h1>
                  {}
                </div>
                <div>
                  <h1 className="text-gray-800 text-lg mb-4 font-medium uppercase">
                    Customer Details
                  </h1>
                  {}
                </div>
              </div>
            </div>
            <div>
              <Link
                to="/Home"
                className="block mx-auto w-60 text-center border border-purple-600 px-4 py-3 text-lg rounded-full bg-purple-600 text-white mb-4"
              >
                <h1>Return Home</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default Success;
