import React, { useContext, useState } from "react";
import Navigation from "../Components/Navigation";
import { Link } from "react-router-dom";
import { Context } from "../Context API/GlobalContext";
import Success from "./Success";

function CheckOut({ history }) {
  const { selectedProducts, setselectedProducts, countTotal, setcountTotal } =
    useContext(Context);
  //console.log(selectedProducts);

  const [hidden, sethidden] = useState(true);
  const [ProductList, setProductList] = useState(selectedProducts);
  const [total, settotal] = useState(countTotal);
  //console.log(ProductList, total);

  let subTotal = 0;
  selectedProducts.map((p) => (subTotal += p.count * p.price));

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("submitted", history);
    sethidden(false);
    setselectedProducts([]);
    setcountTotal(0);
    //history.push("/Home/checkout/Success");
  };
  return (
    <div>
      {hidden && (
        <div className="bg-gray-50">
          <form id="myForm" onSubmit={handleSubmit}>
            <div className="relative container gap-6 grid grid-cols-12 items-start pb-16 pt-4 mx-auto mt-20">
              <div className="bg-gray-50 col-span-8 border border-gray-300 p-4 rounded shadow-lg">
                <h3 className="text-lg font-medium capitalize mb-4">
                  Shipping & Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-600 mb-2 block">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="rounded-lg shadow-lg block w-full border border-purple-600 px-4 py-3 text-gray-600 text-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
                        // className="block w-full border border-purple-600 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0"
                      />
                    </div>
                    <div>
                      <label className="text-gray-600 mb-2 block">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="rounded-lg shadow-lg block w-full border border-purple-600 px-4 py-3 text-gray-600 text-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-left text-gray-600 mb-2 block">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="rounded-lg shadow-lg block w-full border border-purple-600 px-4 py-3 text-gray-600 text-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
                    />
                  </div>
                  <div>
                    <label className="text-left text-gray-600 mb-2 block">
                      Email
                    </label>
                    <input
                      type="text"
                      className="rounded-lg shadow-lg block w-full border border-purple-600 px-4 py-3 text-gray-600 text-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
                    />
                  </div>
                  <div>
                    <label className="text-left text-gray-600 mb-2 block">
                      Company
                    </label>
                    <input
                      type="text"
                      className="rounded-lg shadow-lg block w-full border border-purple-600 px-4 py-3 text-gray-600 text-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
                    />
                  </div>
                  <div>
                    <label className="text-left text-gray-600 mb-2 block">
                      Address
                    </label>
                    <input
                      type="text"
                      className="rounded-lg shadow-lg block w-full border border-purple-600 px-4 py-3 text-gray-600 text-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-600 mb-2 block">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="rounded-lg shadow-lg block w-full border border-purple-600  px-4 py-3 text-gray-600 text-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
                        // className="block w-full border border-purple-600 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0"
                      />
                    </div>
                    <div>
                      <label className="text-gray-600 mb-2 block">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="rounded-lg shadow-lg block w-full border border-purple-600 px-4 py-3 text-gray-600 text-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-600 mb-2 block">
                        Province <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="rounded-lg shadow-lg block w-full border border-purple-600 px-4 py-3 text-gray-600 text-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
                        // className="block w-full border border-purple-600 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0"
                      />
                    </div>
                    <div>
                      <label className="text-gray-600 mb-2 block">
                        Postal Code <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="rounded-lg shadow-lg block w-full border border-purple-600 px-4 py-3 text-gray-600 text-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/*sidebar*/}
              <div className="bg-white col-span-4 border border-gray-200 p-4 rounded shadow-lg">
                <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
                  Order Summery
                </h4>
                <div className="space-y-2">
                  {selectedProducts.map((item) => (
                    //(item) => console.log(item.name)
                    <div className="flex justify-between" key={item.id}>
                      <div>
                        <h5 className="w-44 text-gray-800 font-medium">
                          {item.title}
                        </h5>
                        <p className="text-sm text-gray-600">{item.category}</p>
                      </div>
                      <p className="text-gray-600 w-16">{item.price}</p>
                      <p className="text-gray-600">x</p>
                      <p className="text-gray-600">{item.count}</p>
                      <p className="text-gray-800 font-medium">
                        ${item.count * item.price}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
                  <p>Subtotal</p>
                  <p>${parseFloat(subTotal).toFixed(2)}</p>
                </div>
                <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
                  <p>Shipping</p>
                  <p>Free</p>
                </div>
                <div className="flex justify-between text-gray-800 font-medium py-3 uppercase">
                  <p className="text-bold">Total</p>
                  <p>${parseFloat(subTotal).toFixed(2)}</p>
                </div>
                <div className="flex items-center mb-4 mt-2">
                  <input
                    type="checkbox"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
                  />
                  <label
                    htmlFor="agreement"
                    className="text-gray-600 ml-3 cursor-pointer text-sm"
                  >
                    Agree to our{" "}
                    <a href="#" className="text-purple-700">
                      terms & conditions
                    </a>
                  </label>
                </div>
                <input
                  href="#"
                  className="bg-white w-full block text-center text-purple-600 bg-primary border border-purple-600 px-4 py-3 font-medium rounded-md hover:bg-purple-600 hover:text-white"
                  value="Place Order"
                  type="submit"
                />
              </div>
            </div>
          </form>
          <div>
            <Link
              to="/Home"
              className="block mx-auto w-60 text-center border border-purple-600 px-4 py-3 text-lg rounded-full bg-purple-600 text-white"
            >
              <h1>Return Home</h1>
            </Link>
          </div>
          <Navigation />
        </div>
      )}
      {!hidden && <Success subTotal={total} selectedProducts={ProductList} />}
    </div>
  );
}

export default CheckOut;