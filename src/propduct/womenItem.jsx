import React, { useState, useEffect } from "react";
import classes from "./avalbleitem.module.css";
import Items from "./items";

const WomenItems = () => {
  const [salesitem, setSalesItem] = useState([]);

  useEffect(() => {
    const shopItems = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/women's clothing"
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
      <div className={classes.categories}>
        <div className={classes.smallcontainer}>
          <div className={classes.row}>
            <div className="/img/col-3">
              <img src="../img/1-4.jpg" alt="" />
            </div>
            <div className={classes.col3}>
              <img src="../img/1-3.jpg" alt="" />
            </div>
            <div className={classes.col3}>
              <img src="../img/1-1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.smallcontainer}>
        <h2 className={classes.title}> women's clothing </h2>
        <div className={classes.row}>{content}</div>
      </div>
    </React.Fragment>
  );
};

export default WomenItems;
