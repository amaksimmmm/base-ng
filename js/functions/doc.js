/**
 * @function calcSum
 * @description Функция сложения
 * @param {number} num1 Первое число
 * @param {number} num2 Второе число
 * @throws {Error} Тип ошибки: Если аргумент не число
 * @returns {number} Результат сложения
 */

export const calcSum = (num1, num2) => {
  if (!num1 || !num2) throw new Error('Invalid value');
  return num1 + num2;
};

