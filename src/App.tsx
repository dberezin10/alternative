import React from "react";

import TimerView from "./components/TimerView";
import Counter from "./components/Counter";
import { DatePicker } from "antd";
import { Todos } from "./components/Todos";
import PracticeOop from "./components/practiceOop";
import NodaSoft from "./components/nodaSoft/NodaSoft";

const App = (): JSX.Element => {
  return (
    <div>
      <DatePicker />
      <TimerView />
      <Counter />
      <Todos />
      <PracticeOop />

      <NodaSoft />
    </div>
  );
};

export default App;
