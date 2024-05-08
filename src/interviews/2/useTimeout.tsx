import { useEffect, useRef } from "react";

export const useTimeout = (callback: () => void, delay: number) => {
  const ref = useRef(callback);

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current();
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);
};
