import React, { useCallback, useEffect, useState } from "react";
import { multiPly } from "./utils-ts/log-in";
import TimerView from "./components/TimerView";
import Counter from "./components/Counter";

const App = (): JSX.Element => {
  const [item, setItem] = useState(2);
  const [data, setData] = useState();

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
      <TimerView />
      <Counter />
      <div>{item}</div>
      <button onClick={toggle}></button>
      <div>fd</div>
    </div>
  );
};

export default App;
