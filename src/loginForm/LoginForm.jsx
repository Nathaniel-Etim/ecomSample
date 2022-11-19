import React from "react";
import useFormValidity from "./formValidity";
import classes from "./loginForm.module.css";
import { useDispatch } from "react-redux";
import { userSliceAction } from "../store/userInfo";

const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    onUserInputHandeler: nameUserInputHandeler,
    isValid: userNameIsValid,
    hasError: userNameHasError,
    input: userNameInput,
  } = useFormValidity((value) => value.trim() !== ``);

  const {
    onUserInputHandeler: poasswordonChangeHandeler,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    input: passwordInput,
  } = useFormValidity((value) => value.trim() !== ``);

  const inputHasError = !userNameIsValid || userNameHasError;

  const passwordIsError = !passwordIsValid || passwordHasError;

  const onSubmitFormHandeler = (e) => {
    e.preventDefault();

    if (inputHasError || passwordIsError) {
      console.log(`just test 1`);
      return;
    }
    const usersData = {
      userName: userNameInput,
      password: passwordInput,
    };

    dispatch(userSliceAction.loginInput(usersData));
    dispatch(userSliceAction.checkUserInput());
  };

  return (
    <div className={classes.LoginForm}>
      <div className={classes.form}>
        <form onSubmit={onSubmitFormHandeler}>
          <input
            value={userNameInput}
            onChange={nameUserInputHandeler}
            type="text"
            placeholder="username"
          />
          <input
            value={passwordInput}
            onChange={poasswordonChangeHandeler}
            type="password"
            placeholder="password"
          />
          <button className={classes.login}> login </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
