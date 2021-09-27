import { Route, Switch, Redirect } from "react-router";
import React from "react";
import Shop from "./Components/Shop";
import CheckOut from "./Pages/CheckOut";
import Contact from "./Pages/Contact";
import Success from "./Pages/Success";

function Routing() {
  return (
    <div>
      <Switch>
        {/* <Route path="/Home/:id" component={ViewDetails} /> */}
        {/* <Route path="/not_found" component={NotFound} /> */}
        <Route exact path="/Home/checkout/Success" component={Success} />
        <Route exact path="/Home/checkout" component={CheckOut} />
        <Route path="/Home" component={Shop} />
        <Route path="/Contact" component={Contact} />
        <Redirect from="/" exact to="/Home" />
        {/* <Redirect to="/not_found" /> */}
      </Switch>
    </div>
  );
}

export default Routing;
