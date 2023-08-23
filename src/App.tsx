import React from "react";

import TimerView from "./components/TimerView";
import Counter from "./components/Counter";
import { DatePicker } from "antd";
import { Todos } from "./components/Todos";

const App = (): JSX.Element => {
  return (
    <div>
      <DatePicker />
      <TimerView />
      <Counter />
      <Todos />
      <p>---- \\ ----</p>
    </div>
  );
};

export default App;
