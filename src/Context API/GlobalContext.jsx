import React, { useState, useEffect, createContext } from "react";
import App from "../App";
import axios from "axios";

export const Context = createContext();

function GlobalContext(props) {
  const [products, setproducts] = useState([]);
  const [open, setOpen] = useState(false);
  let productList = localStorage.getItem("products");
  const [selectedProducts, setselectedProducts] = useState([]);
  //const selectedProducts = products.filter((product) => product.count > 0);
  const [countTotal, setcountTotal] = useState(0);
  // var countTotal = 0;
  // products.map((p) => {
  //   countTotal += p.count;
  // });

  useEffect(async () => {
    if (productList) {
      console.log("hi");
      const data = JSON.parse(productList);
      const newData = data.map((d) => ({ ...d, count: 0 }));

      setproducts(newData);
    } else {
      console.log("bye");
      const { data } = await axios.get("https://fakestoreapi.com/products");
      const newData = data.map((d) => ({ ...d, count: 0 }));
      newData.map((d) => counts.push({ [d.id]: d.count }));
      setproducts(newData);
      localStorage.setItem("products", JSON.stringify(data));
    }
  }, []);

  return (
    <Context.Provider
      value={{
        open,
        setOpen,
        products,
        setproducts,
        selectedProducts,
        countTotal,
        setcountTotal,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default GlobalContext;
