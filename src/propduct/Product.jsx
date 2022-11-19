import React from "react";
import classes from "./product.module.css";
import image from "./lady.png";

const Product = () => {
  return (
    <div className={classes.header}>
      <div className="container">
        <div className={classes.row}>
          <div className={classes.col2}>
            <h2>
              Give Your Workout
              <br /> A New Style!
            </h2>
            <p>
              success isn't about greatness. It's about consistency. <br />
              consisitent hardwork gains success .greatness will come.{" "}
            </p>
          </div>
          <div className={classes.col2}>
            <img src={image} width="650px" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
