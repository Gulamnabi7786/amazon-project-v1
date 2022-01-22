import React from "react";
import "./MultipleProduct.css";
import { useStateValue } from "./StateProvider";

function MultipleProduct({ id, title, price, image1, image2, image3, image4 }) {
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
    <div className="multipleproduct">
      <div className="MultiproductInfo">
        <p><b>{title}</b></p>

        <p className="muktiproduct__price">
          <bold> ₹ </bold>
          <strong>{price}</strong>
        </p>

        <div className="multiproduct__imgs">
          <div className="row1">
            <img className="multiproduct__img1" src={image1} alt="....." />
            <img className="multiproduct__img2" src={image2} alt="....." />
          </div>
          <div className="row2">
            <img className="multiproduct__img3" src={image3} alt="....." />
            <img className="multiproduct__img4" src={image4} alt="....." />
          </div>
        </div>
      </div>
      <button className="multiproduct__button" onClick={addToCart}>
        {" "}
        Add to cart{" "}
      </button>
    </div>
  );
}

export default MultipleProduct;
