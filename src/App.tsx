import React, { useCallback, useEffect, useState } from "react";
import { multiPly } from "./utils-ts/log-in";

const App = (): JSX.Element => {
  const [item, setItem] = useState(2);
  const [data, setData] = useState();

  // useEffect(() => {
  //   setItem(!item);
  // }, [item]);

  const toggle = useCallback((): void => {
    setItem((p) => multiPly(p));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  console.log("data", data);

  return (
    <div>
      fdf
      <div>{item}</div>
      <button onClick={toggle}></button>
      <div>fd</div>
    </div>
  );
};

export default App;
