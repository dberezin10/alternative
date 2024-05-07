import React from "react";
import { CoffeeMachine, Phillips } from "../utils/coffeMachine";

const PracticeOop = (): JSX.Element | null => {
  const coffeeMachine = new CoffeeMachine(100);
  coffeeMachine.power = 500;
  console.log("coffeeMachine.power", coffeeMachine.power);

  const coffeeMachinePhillips = new Phillips(100, 25.5);
  coffeeMachinePhillips.power = 1100;
  console.log("coffeeMachinePhillips.power", coffeeMachinePhillips.power);
  console.log("coffeeMachinePhillips.power", coffeeMachinePhillips.getWeight());

  return null;
};

export default PracticeOop;
