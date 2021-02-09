import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";
function Dashboard(props) {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>

      <div className="user">
        <div>
          Username: <b>{props.username}</b>
        </div>
        <button onClick={props.logoutHandler}>Log Out</button>
      </div>
    </>
  );
}
export default Dashboard;
