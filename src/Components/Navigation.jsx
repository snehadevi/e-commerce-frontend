import React, { useContext } from "react";
import { Context } from "../Context API/GlobalContext";
import { MenuAlt1Outline, ShoppingCartOutline } from "heroicons-react";

function Navigation() {
  const { open, setOpen, products, selectedProducts, countTotal } =
    useContext(Context);

  return (
    <div className=" fixed w-full bg-white shadow-lg flex flex-row justify-between top-0 p-3">
      <div className="flex flex-row">
        <div>
          <a href="#" className="text-gray-600 hover:text-purple-600 sm:hidden">
            <MenuAlt1Outline />
          </a>
        </div>
        <div className="sm:bg-gradient-to-r from-purple-400 to-red-400 w-10 h-10 rounded-lg"></div>
        <h1 className="text-lg sm:text-3xl text-gray-600 ml-2">Shop Circle</h1>
      </div>
      <div className="flex flex-row mt-2">
        <div className="hidden sm:flex flex-row">
          <div>
            <a href="#" className="text-gray-600 hover:text-purple-600 p-4">
              Home
            </a>
          </div>
          <div>
            <a href="#" className="text-gray-600 hover:text-purple-600 p-4">
              Shop
            </a>
          </div>
          <div>
            <a href="#" className="text-gray-600 hover:text-purple-600 p-4">
              Blog
            </a>
          </div>
          <div>
            <a href="#" className="text-gray-600 hover:text-purple-600 p-4">
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <a
              onClick={() => setOpen(true)}
              href="#"
              className="bg-purple-600 text-gray-50 hover:bg-purple-700 p-3 px-5 rounded-full sm:mr-5"
            >
              <ShoppingCartOutline className="inline-block" />
              {countTotal}
            </a>
          </div>
          {/* <div>
            <a
              href="#"
              className="text-gray-600 hover:text-purple-600 sm:hidden"
            >
              <MenuAlt1Outline />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
