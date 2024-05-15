import React from "react";
import { observer } from "mobx-react-lite";
import timer from "../store/Timer";
const TimerView = observer(() => {
  return (
    <div>
      <h1
        style={{
          color: "gold",
          textDecoration: "underline",
          fontStyle: "italic",
        }}
      >
        Timer view
      </h1>
      <span>Seconds passed: {timer.secondsPassed}</span>
      {timer._name}
      <button onClick={(): void => timer.increaseTimer()}>Click timer</button>
    </div>
  );
});

export default TimerView;
