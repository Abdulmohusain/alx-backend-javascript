export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') { throw new TypeError('TypeError: Name must be a string'); }
    if (typeof (length) !== 'number') { throw new TypeError('TypeError: Length must be a number'); }
    if (!Array.isArray(students)) { throw new TypeError('TypeError: Students must be a array of strings'); }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof (val) !== 'string') { throw new TypeError('TypeError: Name must be a string'); }
    this._name = val;
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof (val) !== 'number') { throw new TypeError('TypeError: Length must be a string'); }
    this._length = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (!Array.isArray(val)) { throw new TypeError('TypeError: Students must be a an array of string'); }
    this._students = val;
  }
}
