import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Header2 from "./Header2";
import Home from "./Home";
import Checkout from "./Checkout";
import Orders from "./Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import ImageCarousel from "./ImageCarousel";

const promise = loadStripe("pk_test_51KIr1ASBv3Mz30xuzhLxpzhZzhnTcoyZ3IHDZiPbd33v2gcBfhoquAAxSAdUlLAiku7XHLWnuTJQDaHj6AWsMs2D00CBBEuN4t");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //Will only run once when app component is loaded.
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS :", authUser);

      if (authUser) {
        //user just logged in / user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Header2 />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Header2 />
            <Home />
          </Route>
        </Switch>
      </div>
      {/* <ImageCarousel /> */}
    </Router>
  );
}

export default App;
