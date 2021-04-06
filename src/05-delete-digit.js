/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strN = String(n);

  const arr = [];
  for (let i = 0; i < strN.length; i++) {
    const res = strN.slice().split('');
    res.splice(i, 1);
    arr.push(res.join(''));
  }
  const arr1 = arr.map((el) => Number(el));

  return arr1.sort((a, b) => b - a)[0];
}

module.exports = deleteDigit;
