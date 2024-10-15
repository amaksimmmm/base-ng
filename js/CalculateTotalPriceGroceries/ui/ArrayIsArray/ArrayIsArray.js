/**
 * @typedef {import ('./types').ArrayIsArrayData} ArrayIsArrayData
 */

/**
 * @function ArrayIs
 * @param {ArrayIsArrayData} products
 * @returns {string[]}
 */

export const ArrayIs = (products) => {
  if (!Array.isArray(products)) {
    throw new Error('Аргументы должны быть массивами!');
  };

  products.forEach(element => {
    if (typeof element !== 'object' || element === null) {
      throw new Error('Массив должен быть объектом');
    };
  });

  products.forEach(obj => {
    console.log(obj.product);
  });
};
