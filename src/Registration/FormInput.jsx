import React from "react";
import classes from "./registrationArea.module.css";
import useFormValidity from "../loginForm/formValidity";
import { useDispatch } from "react-redux";
import { isLogedInAction } from "../store/UI-slice";
import { userSliceAction } from "../store/userInfo";

const FormInput = () => {
  const dispatch = useDispatch();
  const {
    onUserInputHandeler: onNameHandelerFn,
    onBlurHandelerFN: OnNameBlurHandelerFn,
    isTouched: nameIsTouched,
    isValid: nameIsValid,
    input: userNameInputValue,
    hasError: userNameHasError,
    clearInputFn: userNameClearInputFn,
  } = useFormValidity((value) => value.trim() !== ``);

  const {
    onUserInputHandeler: onCountryHandelerFn,
    onBlurHandelerFN: OnCountryBlurHandelerFn,
    isTouched: CountryIsTouched,
    isValid: CountryIsValid,
    input: countryInputValue,
    hasError: countryHasError,
    clearInputFn: countryClearInputFn,
  } = useFormValidity((value) => value.trim() !== ``);

  const {
    onUserInputHandeler: onEmailHandelerFn,
    onBlurHandelerFN: OnEmailBlurHandelerFn,
    isTouched: emailIsTouched,
    isValid: emailIsValid,
    input: emailInputValue,
    hasError: emailHasError,
    clearInputFn: emailClearInputFn,
  } = useFormValidity((value) => value.includes(`@`));

  const {
    onUserInputHandeler: onNumberHandelerFn,
    onBlurHandelerFN: OnNumberBlurHandelerFn,
    isTouched: numberIsTouched,
    isValid: numberIsValid,
    input: numberInputValue,
    hasError: numberHasError,
    clearInputFn: numberClearInputFn,
  } = useFormValidity((value) => value.trim() !== ``);

  const numberError = numberIsTouched && numberHasError && !numberIsValid;
  const numberClass = numberError ? classes.error : classes.userInput;

  const emailError = emailIsTouched && emailHasError && !emailIsValid;
  const emailClass = emailError ? classes.error : classes.userInput;

  // nameValidation
  const nameHasError = nameIsTouched && userNameHasError && !nameIsValid;
  const nameClass = nameHasError ? classes.error : classes.userInput;

  //   country validation
  const countryNotError =
    CountryIsTouched && countryHasError && !CountryIsValid;
  const countryClass = countryNotError ? classes.error : classes.userInput;

  const isValid =
    numberIsValid && CountryIsValid && nameIsValid && emailIsValid;

  const onSubmmitFormHandelr = (event) => {
    event.preventDefault();

    if (!isValid) {
      return;
    }

    const registeredUsers = {
      userName: userNameInputValue,
      userCountry: countryInputValue,
      userMail: emailInputValue,
      password: numberInputValue,
    };

    dispatch(userSliceAction.addUser(registeredUsers));

    userNameClearInputFn();
    countryClearInputFn();
    emailClearInputFn();
    numberClearInputFn();

    dispatch(isLogedInAction.showLogin());
  };

  return (
    <form className={classes.right} onSubmit={onSubmmitFormHandelr}>
      <div>
        <h3> Registration form</h3>
      </div>
      <div>
        <div className={classes.formItem}>
          <label> Name :</label>
          <input
            className={nameClass}
            type="text"
            placeholder={
              nameHasError ? `name can't be left empty` : `user name`
            }
            value={userNameInputValue}
            onChange={onNameHandelerFn}
            onBlur={OnNameBlurHandelerFn}
          />
        </div>
        <div className={classes.formItem}>
          <label> country :</label>
          <input
            className={countryClass}
            type="text"
            placeholder={
              countryNotError ? `Enter a valid country e.g Nigeria` : `country`
            }
            value={countryInputValue}
            onChange={onCountryHandelerFn}
            onBlur={OnCountryBlurHandelerFn}
          />
        </div>
        <div className={classes.formItem}>
          <label> Email :</label>
          <input
            className={emailClass}
            type="email"
            placeholder={emailError ? `enter valid mail ` : `@example.com`}
            value={emailInputValue}
            onChange={onEmailHandelerFn}
            onBlur={OnEmailBlurHandelerFn}
          />
        </div>
        <div className={classes.formItem}>
          <label> number :</label>
          <input
            className={numberClass}
            type="text"
            placeholder={
              numberError ? `password Can't be left empty` : "password"
            }
            value={numberInputValue}
            onChange={onNumberHandelerFn}
            onBlur={OnNumberBlurHandelerFn}
          />
        </div>
      </div>
      {isValid && (
        <button type="submit" className={classes.submitBtn}>
          SUBMIT
        </button>
      )}
    </form>
  );
};

export default FormInput;
