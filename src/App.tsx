import React from "react";

import TimerView from "./components/TimerView";
import Counter from "./components/Counter";
import { DatePicker } from "antd";
import { Todos } from "./components/Todos";
import TaskCounter from "./interviews/1/TaskCounter";
import { useTimeout } from "./interviews/2/useTimeout";
import { useIsFirstRender } from "./interviews/3/useIsFirstRender";
import Parent from "./interviews/4/Parent";
import SearchUsers from "./interviews/5/SearchUsers";

const App = (): JSX.Element => {
  const handleTimer = () => {
    console.log("timer");
  };

  useTimeout(handleTimer, 5000);
  const isFirstRender = useIsFirstRender();

  console.log(`isFirstRender: ${isFirstRender}`);
  return (
    <div>
      <DatePicker />
      <TimerView />
      <Counter />
      <Todos />
      <p>---- \\ ----</p>
      <button onClick={handleTimer}>timer</button>
      <TaskCounter />
      <p>Задача 4, ререндер</p>
      <Parent />
      <p>Задача 5, поиск пользователя с дебаунсом</p>
      <SearchUsers />
    </div>
  );
};

export default App;
