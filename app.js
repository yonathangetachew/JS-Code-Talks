function filterStrings(arr) {
  return arr.filter(x => typeof x === 'number');
}

const arr = [22, 10, 6, 99, 71, 'boy', 'you', 'cant', 'even', 'code', 'fr'];
const filteredArr = filterStrings(arr);
console.log(filteredArr);

