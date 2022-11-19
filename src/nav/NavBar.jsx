import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLogedInAction } from "../store/UI-slice";
import { userSliceAction } from "../store/userInfo";
import classes from "./navBar.module.css";

const NavBar = () => {
  const logUserIn = useSelector((store) => store.userInfo.logUserIn);

  const dispatch = useDispatch();

  const onLogoutHandelerFn = () => {
    dispatch(userSliceAction.logout());
  };

  const showFormHandedler = () => {
    dispatch(isLogedInAction.register());
  };

  return (
    <div className={classes.navBar}>
      <div className={classes.right}>
        <h3 className={classes.logo}>
          Slaylex<span className={classes.logoDot}>.</span>
        </h3>
      </div>
      <div className={classes.left}>
        <nav>
          <ul className={classes.navItem}>
            <li>ABOUT US</li>
            <li> CONTACT US</li>
            {!logUserIn && (
              <li className={classes.logout} onClick={showFormHandedler}>
                {" "}
                register{" "}
              </li>
            )}
            {logUserIn && (
              <li className={classes.logout} onClick={onLogoutHandelerFn}>
                {" "}
                LOGOUT
              </li>
            )}{" "}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
