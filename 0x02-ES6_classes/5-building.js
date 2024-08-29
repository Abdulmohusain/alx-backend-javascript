export default class Building {
  constructor(sqft) {
    if (typeof (sqft) !== 'number') { throw new TypeError('TypeError: Sqft must be a number'); }
    this._sqft = sqft;

    if (new.target !== Building) {
      if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    if (typeof (val) !== 'number') { throw new TypeError('TypeError: Sqft must be a number'); }
    this._sqft = val;
  }
}
