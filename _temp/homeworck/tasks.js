/*
  Измените все символы строки на заглавные буквы с помощью метода 
  toUpperCase().
*/

/**
 * @function firstСapitalДetter
 * @description преоброзование первого слова в тексте на заглавную букву
 * @param {string} str текст
 * @throws {Error} тип ошибки: если не соответствует формат
 * @returns {string} результат преоброзования
 */

export const firstСapitalДetter = (str) => {
  if (typeof str !== 'string') throw new Error('Invalid value');
  // return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return str ? `${str[0].toUpperCase()}${str.slice(1)}` : '';
};

/**
 * capitalLettersString
 * @description преоброзование каждого нового слова с заглавной буквы
 * @param {string} str текст
 * @throws {Error} тип ошибки: если не соответствует формат
 * @returns {string} результат преоброзования
 */

export const capitalLettersString = (str) => {
  if (typeof str !== 'string') throw new Error('Invalid value');
  return str.split(' ').map(letter => 
    letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase()
  ).join(' '); 
};

/**
 * getTimeDay
 * @description определение времени
 * @returns {get Date} врями суток
 */

export const getTimeDay = () => {
  const hoursTimeClock = new Date().getHours();

  if (
    isNaN(hoursTimeClock) || hoursTimeClock < 0 || hoursTimeClock > 23
  ) return null;
  else if (hoursTimeClock >= 5 && hoursTimeClock <= 9) return 'morning';
  else if (hoursTimeClock >= 10 && hoursTimeClock <= 17) return 'afternoon';
  else if (hoursTimeClock >= 18 && hoursTimeClock <= 23) return 'evening';
  else return 'night';
};


const hello = () => {
  const go = getTimeDay();

  if (go === 'morning') return 'доброе утро';
  return 'спокойной ночи';
};

console.log(hello());