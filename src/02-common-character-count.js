/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const i = 0;
  const counter = 0;
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  const findl = (index, count) => {
    const find = arr2.findIndex((el) => el === arr1[0]);
    if (arr1.length === 0) {
      return count;
    }
    if (find >= 0) {
      arr2.splice(find, 1);
      arr1.splice(i, 1);
      const newIndex = index + 1;
      const newCount = count + 1;
      return findl(newIndex, newCount);
    }
    arr1.splice(i, 1);
    const newIndex = index + 1;
    return findl(newIndex, count);
  };
  return findl(i, counter);
}

module.exports = getCommonCharacterCount;
