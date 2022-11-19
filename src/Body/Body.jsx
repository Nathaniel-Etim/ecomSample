import React from "react";
import classes from "./body.module.css";
import PersonIcon from "@mui/icons-material/Person";
import CategoryIcon from "@mui/icons-material/Category";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Body = () => {
  return (
    <div className={classes.sidebar}>
      <hr></hr>
      <div className={classes.center}>
        <ul>
          <p className={classes.title}>MAIN</p>
          <li>
            <PersonIcon className={classes.icon}></PersonIcon>
            <span>Users</span>
          </li>
          <li>
            <CategoryIcon className={classes.icon}></CategoryIcon>
            <span>Product</span>
          </li>
          <li>
            <ListAltIcon className={classes.icon}></ListAltIcon>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className={classes.icon}></LocalShippingIcon>
            <span>Delivery</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Body;
