import React, { useContext, useState } from "react";
import { Context } from "../Context API/GlobalContext";
import { MenuAlt1Outline, ShoppingCartOutline } from "heroicons-react";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

const navItem = [
  { name: "HOME", to: "/Home", current: true },
  { name: "SHOP", to: "/Shop", current: false },
  { name: "BLOG", to: "/Blog", current: false },
  { name: "CONTACT", to: "/Contact", current: false },
];

function Navigation() {
  const [hidden, sethidden] = useState(false);
  const { open, setOpen, products, selectedProducts, countTotal } =
    useContext(Context);

  const handleClick = (item) => {
    navItem.forEach(function (obj) {
      console.log(obj.name, item.name);
      if (obj.name !== item.name) {
        obj.current = false;
        console.log("clicked");
      } else {
        obj.current = true;
        console.log("not");
      }
    });
  };

  return (
    <Disclosure>
      <div className="fixed w-full bg-white shadow-lg flex flex-col top-0 p-3">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div>
              <a
                href="#"
                className="text-gray-600 hover:text-purple-600 sm:hidden"
              >
                <MenuAlt1Outline onClick={() => sethidden(!hidden)} />
              </a>
            </div>
            <div className="sm:bg-gradient-to-r from-purple-400 to-red-400 w-10 h-10 rounded-lg"></div>
            <h1 className="text-lg text-gray-600 sm:text-xl sm:mt-1 sm:ml-2 lg:text-3xl">
              SHOP CIRCLE
            </h1>
          </div>
          <div className="flex flex-row mt-2">
            <div className="hidden text-sm sm:flex flex-row sm:text-xl">
              {navItem.map((item) => (
                <div onClick={() => handleClick(item)} key={item.name}>
                  <Link
                    to={item.to}
                    className={
                      item.current
                        ? "bg-purple-500 text-white p-4"
                        : "text-gray-600 hover:text-purple-600 p-4"
                    }
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
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
        <div>
          {hidden && (
            <div className="px-2 pt-2 pb-3 space-y-1 text-gray-600 sm:hidden">
              {navItem.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:text-purple-600"
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </Disclosure>
  );
}

export default Navigation;
