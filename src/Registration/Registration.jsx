import React from "react";
import classes from "../Registration/registrationArea.module.css";
import FormInput from "./FormInput";

const Registration = () => {
  return (
    <div className={classes.registration}>
      <div className={classes.form}>
        <FormInput />
        <div className={classes.left}>
          <div>
            <h3>ABOUT US</h3>
          </div>
          <div>
            <p className={classes.aboutus}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              cupiditate voluptatem quidem dolor nesciunt possimus non! Minus
              culpa vel perspiciatis excepturi nostrum animi laborum recusandae
              repudiandae temporibus deserunt a quibusdam fuga, distinctio iusto
              obcaecati alias!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
