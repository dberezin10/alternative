import { makeAutoObservable } from "mobx";

interface ITimer {
  increaseTimer: () => void;
  _name: string;
}
class Timer implements ITimer {
  secondsPassed = 1;

  _name = "";

  constructor() {
    makeAutoObservable(this);
    this._name = "45";
  }

  increaseTimer(): void {
    this.secondsPassed += 1;
  }
}

export default new Timer();
