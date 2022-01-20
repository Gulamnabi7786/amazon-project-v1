import React from 'react';
import "./MultipleProduct.css";

function MultipleProduct() {
    const [{ cart }, dispatch] = useStateValue();
import { useStateValue } from "./StateProvider";

  console.log("In side cart", cart);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
      },
    });
  };

  return <div className='multipleproduct'>
      <div className='productInfo'>
      <p>{title}</p>

<p className="product__price">
  <bold> ₹ </bold>
  <strong>{price}</strong>
</p>

<img className="product__img" src={image} alt="....." />
</div>
  </div>;
}

export default MultipleProduct;
