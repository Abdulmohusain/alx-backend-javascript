export default class Currency {
  constructor(code, name) {
    if (typeof (code) !== 'string') { throw new TypeError('TypeError: Code must be a string'); }
    if (typeof (name) !== 'string') { throw new TypeError('TypeError: Name must be a string'); }

    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof (val) !== 'string') { throw new TypeError('TypeError: Code must be a string'); }
    this._code = val;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof (val) !== 'string') { throw new TypeError('TypeError: Name must be a string'); }
    this._name = val;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
