import React from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="checkout">
      <div className="checkout--left">
        <img
          className="checkout--adv"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png"
          alt="adv"
        />
        <div className="shoppingDetails">
          <h3> Hello, {user?.email}</h3>
          <div className="checkout--login">
            <img
              className="checkouImage"
              src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
              alt=""
            />
            <h3 className="checkout--tittle">Your Shopping Details</h3>
            <div className="loginButtons">
              <a href="login">
                <button className="signInButton"> Create new Account </button>
                <Link to={!user && "/login"}>
                  <button
                    onClick={handleAuthentication}
                    className="signUpButton"
                  >
                    {user ? "Sign Out" : "Sign In"}
                  </button>
                </Link>
              </a>
            </div>
          </div>
          {cart.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>

      <div className="checkout--right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
