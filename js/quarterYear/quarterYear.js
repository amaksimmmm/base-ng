/**
 * @function quarterYear
 * @param {object} odj
 * @param {number} num1
 * @throws {Error} Error type: If the argument is not a number
 * @returns {string} quarter view
 */

export const quarterYear = (odj, num1) => {
  if (num1 >= 1 && num1 <= 3) {
  return `${odj[num1]} является частью первого квартала`;
  } else if (num1 >= 4 && num1 <= 6) {
    return `${odj[num1]} является частью второго квартала`;
  }else if (num1 >= 7 && num1 <= 9) {
    return `${odj[num1]} является частью третьего квартала`;
  } else if (num1 >= 10 && num1 <= 12) {
    return `${odj[num1]} является частью четвертого квартала`;
  } else {
    return Error;
  };
};

