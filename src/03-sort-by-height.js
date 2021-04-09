/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr1 = arr.filter((el) => el > 0).sort((a, b) => a - b);
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr2.push(arr[i]);
    } else {
      arr2.push(arr1[0]);
      arr1.splice(0, 1);
    }
  }
  return arr2;
}

module.exports = sortByHeight;
