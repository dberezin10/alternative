// import React, { useEffect, useState, useRef } from "react";
//
// export const useTimeout = (callback, delay) => {
//   const ref = useRef(callback);
//   ref.current = callback;
//
//   useEffect(() => {
//     const timer = useTimeout(() => {
//       ref.current();
//     }, delay);
//
//     return () => clearTimeout(timer);
//   }, []);
// };
