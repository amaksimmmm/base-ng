Если месяц задан целым числом от 1 до 12, определите, к какому кварталу года он относится, представив его в виде целого числа.

Например: месяц 2 (февраль) является частью первого квартала; месяц 6 (июнь) является частью второго квартала; а месяц 11 (ноябрь) является частью четвертого квартала.

Ограничение:

1 <= month <= 12

//---------------------------------------------------------
ПРИМЕР ИСПОЛЬЗОВАНИЯ ГРАМОСКОГО СПОСОБА

const log = console.log;

const monch = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

const mf = (arr, num1) => {
  if (num1 >= 1 && num1 <= 3) {
  return `${arr[num1]} является частью первого квартала`;
  } else if (num1 >= 4 && num1 <= 6) {
    return `${arr[num1]} является частью второго квартала`;
  }else if (num1 >= 7 && num1 <= 9) {
    return `${arr[num1]} является частью третьего квартала`;
  } else if (num1 >= 10 && num1 <= 12) {
    return `${arr[num1]} является частью четвертого квартала`;
  } else {
    return Error;
  };
};

log(mf(monch, 12));

//---------------------------------------------------------
ПРИМЕР ИСПОЛЬЗОВАНИЯ МЕНЕЕ ГРАМОСКОГО

if (num1 < 1 || num1 > 12) return Error;
  const quarter = Math.ceil(num1 / 3); // Вычисляем квартал


const log = console.log;

//---------------------------------------------------------
ПРИМЕР ИСПОЛЬЗОВАНИЯ с массивом и тернарным оператором

const months = [
  '',        // пустое значение для соответствия индексам с 1 до 12
  'January', 'February', 'March',
  'April', 'May', 'June',
  'July', 'August', 'September',
  'October', 'November', 'December'
];

const mf = (arr, num1) =>
  (num1 >= 1 && num1 <= 12)
  ? `${arr[num1]} является частью ${Math.ceil(num1 / 3)} квартала`
  : `Ошибка: ${num1} не является допустимым номером месяца`;

log(mf(months, 0));




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


