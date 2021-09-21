import React, { useState, useEffect, createContext } from "react";
import App from "../App";

export const Context = createContext();

function GlobalContext(props) {
  const [open, setOpen] = useState(false);
  return (
    <Context.Provider value={{ open, setOpen }}>
      {props.children}
    </Context.Provider>
  );
}

export default GlobalContext;
