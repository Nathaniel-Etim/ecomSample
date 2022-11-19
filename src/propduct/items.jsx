import React, { useState } from "react";
import classes from "./avalbleitem.module.css";

const Items = ({ el }) => {
  const [over, setOver] = useState(false);

  const onAddToCartHandeler = () => {
    const cartItem = {
      image: el.image,
      title: el.title,
      price: el.price,
      id: el.id,
    };

    console.log(cartItem);
  };

  return (
    <React.Fragment>
      <div
        className={classes.col4}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        key={el.id}
      >
        <img src={el.image} alt="" />
        <h4> {el.title} </h4>
        <p>{`$ ${el.price}`}</p>
        {over && (
          <h3 className={classes.btn} onClick={onAddToCartHandeler}>
            {" "}
            Add to cart{" "}
          </h3>
        )}
      </div>
    </React.Fragment>
  );
};

export default Items;
