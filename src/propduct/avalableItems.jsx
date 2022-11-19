import React, { useState, useEffect } from "react";
// import Loader from "../loader/loader";
import classes from "./avalbleitem.module.css";
import Items from "./items";

const AvalableItems = () => {
  const [salesitem, setSalesItem] = useState([]);
  const [moreItems, setMoreItems] = useState(4);
  const [isLoaading, setIsLoading] = useState(false);
  // const [isLoading, setIsLoading1] = useState(false);

  useEffect(() => {
    const shopItems = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products?limit=${moreItems}`
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
  }, [moreItems]);

  const viewMoreItemHandeler = () => {
    setIsLoading(true);
    if (moreItems === 20) {
      setMoreItems(4);
    } else {
      setMoreItems((moreItems) => moreItems + 4);
    }

    setTimeout(() => {
      return setIsLoading(false);
    }, 4000);
  };

  const content = salesitem.map((el) => {
    return <Items key={el.id} el={el} />;
  });

  return (
    <React.Fragment>
      <div className={classes.smallcontainer}>
        <h2 className={classes.title}> Featured Product </h2>
        <div className={classes.row}>
          {content}
          <div className={classes.col4}>
            {isLoaading && <div className={classes.btn}> loading ... </div>}
            {!isLoaading && (
              <div onClick={viewMoreItemHandeler} className={classes.btn}>
                {" "}
                {moreItems === 20 ? `View Less` : `See More`}{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AvalableItems;
