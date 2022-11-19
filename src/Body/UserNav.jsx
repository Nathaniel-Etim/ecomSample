import React from "react";
import classes from "./userNav.module.css";
import SearchOffRounded from "@mui/icons-material/SearchOffOutlined";
import { useSelector } from "react-redux";

const UserNav = () => {
  const userDetails = useSelector((state) => state.userInfo.loginUser);

  return (
    <div className={classes.UserNav}>
      <div className={classes.top}>
        <span className={classes.logo}>
          {" "}
          {`Welcome ${userDetails.userName} 👋 start by searching our online store in ${userDetails.userCountr}!`}
        </span>
      </div>
      <div>
        <input
          className={classes.searchArea}
          type="search"
          placeholder="search..."
        />
        <SearchOffRounded className={classes.icon} />
      </div>
    </div>
  );
};

export default UserNav;
