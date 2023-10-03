interface ICoffeMachine {
  name?: string;
}
class CoffeeMachine implements ICoffeMachine {
  private _power = 10;
  public name;

  constructor(w: number, name?: string) {
    this._power = w;
    this.name = name;
  }

  get power(): number {
    return this._power;
  }

  set power(val) {
    console.log("this._power", this._power + val);
    this._power = this._power + val;
  }
}

// создаём кофеварку
export { CoffeeMachine };
