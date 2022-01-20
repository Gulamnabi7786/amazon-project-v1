import React from "react";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="subtotalContainer">
      <div className="subtotal">
        <CurrencyFormat
          remderText={(value) => (
            <>
              <p>
                (Subtotal (cart.length)Item):<strong>{value}</strong>
              </p>
              <small className="subtotal--gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getCartTotal(cart)}
          displayType={"text"}
          thousandSeparater={true}
          prefix={"₹"}
        />
        <button className="proceedbutton">Proceed to Buy</button>
      </div>
    </div>
  );
}

export default Subtotal;

// subtotal.js
// import React from 'react';
// import "./Subtotal.css";

// function Subtotal() {
//     return (
//         <div className="subtotal">
//            <p>SubTotal (0 item): <strong>0 </strong></p>
//            <small className="subtotal--gift">
//            <input type="checkbox" />This order contains a gift
//            </small>
//            <button>Proceed to Bu</button>
//         </div>
//     )
// }

// export default Subtotal
