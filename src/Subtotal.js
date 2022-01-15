import React from "react";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        remderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal--gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        dispalayType={"text"}
        thousandSeparater={true}
        prefix={"₹"}
      />
      <button>Proceed to Buy</button>
    </div>
  );
}

export default Subtotal;  
