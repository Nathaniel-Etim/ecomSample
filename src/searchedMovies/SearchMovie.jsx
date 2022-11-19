import React from "react";
import classes from "../searchedMovies/search.module.css";

const SearchMovie = () => {
  const checkValue = (event) => {
    const value = event.target.__reactProps$dvhl0uradbo.value;

    console.log(value);
  };

  return (
    <div className={classes.SearchMovie}>
      <div className={classes.category}>
        <div className={classes.categoryList}>
          <div className={classes.categoryItem}>
            <span value="electronics" onClick={checkValue}>
              electronics
            </span>
          </div>
          <div className={classes.categoryItem}>
            <span onClick={checkValue} value="jewelery">
              jewelery
            </span>
          </div>
        </div>

        <div className={classes.categoryList}>
          <div className={classes.categoryItem}>
            <span onClick={checkValue} value="men's clothing">
              men's cloth
            </span>
          </div>
          <div className={classes.categoryItem}>
            <span onClick={checkValue} value="women's clothing">
              women's cloth
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
