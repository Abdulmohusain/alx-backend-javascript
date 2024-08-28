import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) !== 'number') { throw new TypeError('TypeError: Amount must be a number'); }
    if (!(currency instanceof Currency)) { throw new TypeError('TypeError: Currency must be a currency'); }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    if (typeof (val) !== 'number') { throw new TypeError('TypeError: Amount must be a number'); }
    this._amount = val;
  }

  get currency() {
    return this._currency;
  }

  set currency(val) {
    if (!(val instanceof Currency)) { throw new TypeError('TypeError: Currency must be a currency'); }
    this._currency = val;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
