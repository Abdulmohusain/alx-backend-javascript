export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  let i = 0;
  for (const idx of array) {
    const value = idx;
    newArr[i] = appendString + value;
    i += 1;
  }

  return newArr;
}
