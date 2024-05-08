export enum PaymentStatus {
  Holded,
  Processed,
  Reversed,
}

class Payment {
  id: number;
  status: PaymentStatus = PaymentStatus.Holded;
  createAt: Date = new Date();
  updateAt: Date | undefined;

  constructor(id: number) {
    this.id = id;
  }

  public getPaymentLifeTime(): number {
    return new Date().getTime() - this.createAt.getTime();
  }

  public unHoldPayment(): void {
    if (this.status === PaymentStatus.Processed) {
      throw new Error("Платеж не может быть возвращен");
    }
    this.status = PaymentStatus.Reversed;
    this.updateAt = new Date();
  }
}

const payment = new Payment(123);
payment.unHoldPayment();
console.log("payment", payment);
const time = payment.getPaymentLifeTime();
console.log(time, "time");
