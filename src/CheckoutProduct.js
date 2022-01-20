import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, image }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    //removw item from cart
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProductImage" src={image} alt="" />

      <div className="checkoutProduct--info">
        <p className="checkoutProduct--title">{title}</p>
        {/* <img className="checkoutlogo" src="logo.png" alt="logo" /> */}
        <small className="subtotal--gift">
          <input type="checkbox" /> This will be a gift
        </small>
        <p className="checkoutProduct--price">
          <bold>₹</bold>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromCart}> Remove From cart </button>
        <select
          className="quantityBox"
          name="url"
          tabindex="0"
          title="Search in"
        >
          <option>Qty: 1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
    </div>
  );
}

export default CheckoutProduct;
