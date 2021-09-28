import React, { useState, useEffect, createContext } from "react";
import App from "../App";
import axios from "axios";

export const Context = createContext();

function GlobalContext(props) {
  const [products, setproducts] = useState([]);
  const [open, setOpen] = useState(false);
  let productList = localStorage.getItem("products");
  const [selectedProducts, setselectedProducts] = useState([]);
  const [countTotal, setcountTotal] = useState(0);
  const [orderList, setorderList] = useState([]);

  function calculateTotalCount(selectedList) {
    let count = 0;
    selectedList.map((p) => {
      if (p.count) count += p.count;
    });
    return count;
  }

  useEffect(async () => {
    if (productList) {
      //console.log("hi");
      const data = JSON.parse(productList);
      setproducts(data);
      //const newData = data.map((d) => ({ ...d, count: 0 }));

      //setproducts(newData);
    } else {
      //console.log("bye");
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setproducts(data);
      // const newData = data.map((d) => ({ ...d, count: 0 }));
      // newData.map((d) => counts.push({ [d.id]: d.count }));
      // setproducts(newData);
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
        setselectedProducts,
        calculateTotalCount,
        orderList,
        setorderList,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default GlobalContext;
