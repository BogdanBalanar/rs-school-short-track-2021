/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = email.split('');
  const arrOfIndexes = arr.map((el, index) => {
    if (el === '@') {
      return index;
    }
    return 0;
  });
  const newArr = arrOfIndexes.filter((el) => el !== 0);
  return arr.slice(newArr[newArr.length - 1] + 1, arr.length).join('');
}

module.exports = getEmailDomain;
