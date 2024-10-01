import React from "react";

import TimerView from "./components/TimerView";
import Counter from "./components/Counter";
import { DatePicker } from "antd";
import { Todos } from "./components/Todos";
import PracticeOop from "./components/practiceOop";
import { AreaChart } from "./components/charts/AreaCharts";

const App = (): JSX.Element => {
  return (
    <div>
      <DatePicker />
      <TimerView />
      <Counter />
      <Todos />
      <PracticeOop />
      <AreaChart data={[]} />
    </div>
  );
};

export default App;
