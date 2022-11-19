import React, { useState, useEffect } from "react";
import classes from "./avalbleitem.module.css";
import Items from "./items";

const ElectronicItem = () => {
  const [salesitem, setSalesItem] = useState([]);

  useEffect(() => {
    const shopItems = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/electronics"
      );
      if (!response.ok) {
        throw new Error(`Check network connection`);
      }

      const data = await response.json();
      setSalesItem(data);
    };

    try {
      shopItems();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const content = salesitem.map((el) => {
    return <Items key={el.id} el={el} />;
  });

  return (
    <React.Fragment>
      <div className={classes.smallcontainer}>
        <h2 className={classes.title}> Electronics</h2>
        <div className={classes.row}>
          {content}
          <div className={classes.col4}></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ElectronicItem;
