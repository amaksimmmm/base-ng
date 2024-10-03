/**
 * @typedef {import('./types').InputProducts} InputProducts
 * @typedef {import('./types').OutputProducts} OutputProducts
 */

/**
 * @function getTotalPrice
 * @param {InputProducts} arr
 * @returns {OutputProducts} sumProduct
 */

export const getTotalPrice = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Аргументы должны быть массивами!');
  };

  arr.forEach(element => {
    if (typeof element !== 'object' || element === null) {
      throw new Error('Массив должен быть объектом');
    };
  });

  arr.forEach(obj => {
    console.log(obj.product);
  });

  let sumProduct = 0;
  for (let count = 0; count < arr.length; count++) {
    sumProduct += arr[count].price * arr[count].quantity;
  };
  return `Стоимость за товары: ${sumProduct.toFixed(1)}$`; //такая запись нужна для теста
};
