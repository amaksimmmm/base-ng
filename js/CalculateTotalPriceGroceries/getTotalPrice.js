import { ArrayIs } from './ui/ArrayIsArray/ArrayIsArray.js';

/**
 * @typedef {import('./types').getTotalPriceData} getTotalPriceData
 */

/**
 * @function getTotalPrice
 * @param {getTotalPriceData} products
 * @param {number} sumProduct
 * @returns {string}
 */

export const getTotalPrice = (products) => {
  ArrayIs(products);
  let sumProduct = 0;
  for (let count = 0; count < products.length; count++) {
    sumProduct += products[count].price * products[count].quantity;
  };

  return `Стоимость за товары: ${sumProduct.toFixed(1)}$`;
};
