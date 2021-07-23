import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from "./Form";
import Navbar from "./Navbar";
import Users from "./Users";
import Info from "./Info";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Navbar />
        </header>
        <Route exact path="/">
          <Users />
        </Route>
        <Route path="/user-info">
          <Info />
        </Route>
        <Route path="/create-update">
          <Form />
        </Route>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
