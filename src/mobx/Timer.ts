import { makeAutoObservable } from "mobx";

class Timer {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer(): void {
    this.secondsPassed += 1;
  }
}

export default new Timer();
