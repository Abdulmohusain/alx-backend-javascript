export default class Airport {
  constructor(name, code) {
    if (typeof (code) !== 'string') { throw new TypeError('TypeError: Code must be a string'); }
    if (typeof (name) !== 'string') { throw new TypeError('TypeError: Name must be a string'); }
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
