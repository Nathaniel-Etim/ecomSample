import { useState } from "react";

const useFormValidity = (validInput) => {
  const [input, setInput] = useState(``);
  const [isTouched, setIsTouched] = useState(false);

  const onUserInputHandeler = (event) => {
    setInput(event.target.value);
  };

  const onBlurHandelerFN = (e) => {
    setIsTouched(true);
  };

  const isValid = validInput(input);

  const hasError = !isValid && isTouched;

  const clearInputFn = () => {
    setInput(``);
    setIsTouched(false);
  };
  return {
    onUserInputHandeler,
    onBlurHandelerFN,
    isTouched,
    isValid,
    input,
    hasError,
    clearInputFn,
  };
};

export default useFormValidity;
