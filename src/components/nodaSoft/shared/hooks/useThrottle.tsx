import { useState } from "react";

type CallbackFunction = (...args: never[]) => void;

const useThrottle = (
  callback: CallbackFunction,
  delay: number
): CallbackFunction => {
  const [clickable, setClickable] = useState(true);

  return (...args) => {
    if (clickable) {
      setClickable(false);
      callback(...args);
      setTimeout(() => {
        setClickable(true);
      }, delay);
    }
  };
};

export default useThrottle;
