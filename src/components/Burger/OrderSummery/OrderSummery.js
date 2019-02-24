import React from "react";

import AUX from "../../../hoc/Auxx";

const orderSummery = props => {
  const ingredientSummery = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
      </li>
    );
  });

  return (
    <AUX>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummery}</ul>
      <p>Continue to Checkout?</p>
    </AUX>
  );
};

export default orderSummery;
