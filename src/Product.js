import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, image1, image2, image3, image4 }) {
  const [{ cart }, dispatch] = useStateValue();

  console.log("In side cart", cart);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        price: price,
        image1: image1,
        image2: image2,
        image3: image3,
        image4: image4,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>

        <p className="product__price">
          <bold> ₹ </bold>
          <strong>{price}</strong>
        </p>

        <img className="product__img" src={image1} alt="....." />
        <img className="product__img" src={image2} alt="....." />
        <img className="product__img" src={image3} alt="....." />
        <img className="product__img" src={image4} alt="....." />
      </div>
      <button className="product__button" onClick={addToCart}>
        {" "}
        Add to cart{" "}
      </button>
    </div>
  );
}

export default Product;
