import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Header2 from "./Header2";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
// import ImageCarousel from "./ImageCarousel";

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
      {/* <ImageCarousel /> */}
    </Router>
  );
}

export default App;
