export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const [idx, val] of array.entries()) {
    const value = val;
    newArr[idx] = appendString + value;
  }

  return newArr;
}
