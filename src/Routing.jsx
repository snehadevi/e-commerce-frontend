import { Route, Switch, Redirect } from "react-router";
import React from "react";
import Shop from "./Components/Shop";
import CheckOut from "./Pages/CheckOut";
import Contact from "./Pages/Contact";
import Success from "./Pages/Success";
import { useContext } from "react";
import { Context } from "./Context API/GlobalContext";
import Blog from "./Pages/Blog";
import NotFound from "./Pages/NotFound";

function Routing() {
  const { selectedProducts } = useContext(Context);
  return (
    <div>
      <Switch>
        {/* <Route path="/Home/:id" component={ViewDetails} /> */}
        {/* <Route path="/not_found" component={NotFound} /> */}
        <Route exactpath="/" component={Shop} />
        <Route exact path="/Home" component={Shop} />
        <Route exact path="/Home/checkout" component={CheckOut} />
        <Route exact path="/Home/checkout/Success" component={Success} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Blog" component={Blog} />
        <Redirect from="/" exact to="/Home" />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default Routing;
