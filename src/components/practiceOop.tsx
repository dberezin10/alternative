import React from "react";
import { CoffeeMachine } from "../utils/coffeMachine";

const PracticeOop = (): JSX.Element => {
  const coffeeMachine = new CoffeeMachine(100);
  coffeeMachine.power = 500;
  console.log(coffeeMachine.power);
  return <div>ООП Практика</div>;
};

export default PracticeOop;
