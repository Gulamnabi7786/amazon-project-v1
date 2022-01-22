import React from "react";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import "./Subtotal.css";

function Subtotal() {
  const history = useHistory();
  const [{cart}, dispatch] = useStateValue();  

  return (
    <div className="subtotal">
      <CurrencyFormat 
         renderText = { (value) => (
          <>
                <p>Subtotal ({cart.length} items) :<strong> {value} </strong> </p>
                <small className="subtotal--gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
          </>
         )}
         decimalScale = {2}
         value = {getCartTotal(cart)}
         displayType = {"text"}
         thousandSeparator = {true}
         prefix = {"₹"}
      />      
      <button onClick={e => history.push('/payment')} > Proceed to Buy </button>
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
