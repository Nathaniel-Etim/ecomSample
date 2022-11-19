import React, { useContext, useState, useEffect } from "react";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartModelContent = (
    <React.Fragment>
      <div>
        <ul className={classes[`cart-items`]}>pastz </ul>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span> 500 </span>
        </div>
        <button className={classes[`button--alt`]} onClick={props.onHideCart}>
          {" "}
          close{" "}
        </button>

        <button className={classes.button}> order </button>
      </div>
    </React.Fragment>
  );

  const isSubmmitingModelContent = <p>sending order data</p>;

  const didSubmmitingModelContent = (
    <React.Fragment>
      <p>successfully sent the order</p>
      <div className={classes.actions}>
        <button className={classes[`button--alt`]} onClick={props.onHideCart}>
          {" "}
          close{" "}
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {!submitting && !didSubmit && cartModelContent}
      {submitting && isSubmmitingModelContent}
      {!submitting && didSubmit && didSubmmitingModelContent}
    </Modal>
  );
};

export default Cart;
