import React from "react";
import "./App.css";
import Header from "./Header";
import Header2 from "./Header2";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Header2 />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Header2 />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
