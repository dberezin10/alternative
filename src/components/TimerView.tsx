import React from "react";
import { observer } from "mobx-react-lite";
import timer from "../mobx/Timer";
const TimerView = observer(() => {
  return (
    <div>
      Timer
      <span>Seconds passed: {timer.secondsPassed}</span>
      <button onClick={(): void => timer.increaseTimer()}>Click timer</button>
    </div>
  );
});

export default TimerView;
