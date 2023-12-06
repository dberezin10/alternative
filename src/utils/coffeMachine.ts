interface ICoffeMachine {
  name?: string;
}

interface IPhillips {
  weight: number;
}
class CoffeeMachine implements ICoffeMachine {
  protected _power = 100;
  public name;

  constructor(w: number, name?: string) {
    this._power = w;
    this.name = name;
  }

  get power(): number | undefined {
    return this._power;
  }

  set power(val) {
    if (typeof val === "number") {
      this._power = this._power + val;
    }
  }

  protected printPerson(): void {
    console.log(`Имя: ${this.name}  Сила: ${this._power}`);
  }
}

class Phillips extends CoffeeMachine implements IPhillips {
  public weight = 0;
  constructor(w: number, weight: number, name?: string) {
    super(w, name);
    this._power = w;
    this.weight = weight;
  }

  public getWeight(): string {
    return `Weight Phillips ${this.weight} kg`;
  }
}

// создаём кофеварку
export { CoffeeMachine, Phillips };
