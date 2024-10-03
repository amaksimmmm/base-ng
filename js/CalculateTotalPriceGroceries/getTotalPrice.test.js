import { products } from "./products.js";
import { getTotalPrice } from "./getTotalPrice.js";

// console.log(getTotalPrice(products));

const testData = {
  test1: {
    arr: products,
    totalPrice: 'Стоимость за товары: 10.4$',
  },
};

describe('getTotalPrice', () => {
  test('Unit test 1', () => {
    const test1 = testData.test1;
    const testTotalPrice = getTotalPrice(test1.arr);
    expect(test1.totalPrice).toEqual(testTotalPrice);
  });
});
