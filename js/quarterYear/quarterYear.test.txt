import { quarterYear } from "./quarterYear.js";
import { months } from "./months.js";

const testData = {
  test1: {
    obj: months,
    num1: 10,
    quarterYeare: 'October является частью четвертого квартала',
  },
  test2: {
    obj: months,
    num1: 12,
    quarterYeare: 'December является частью четвертого квартала',
  },
  test3: {
    obj: months,
    num1: 1,
    quarterYeare: 'January является частью первого квартала',
  },
};

describe('quarterYear', () => {
  test('Unit test 1', () => {
    const test1 = testData.test1;
    const quarterYeared = quarterYear(test1.obj, test1.num1);
    expect(test1.quarterYeare).toEqual(quarterYeared);
  });
  test('Unit test 2', () => {
    const test2 = testData.test2;
    const quarterYeared = quarterYear(test2.obj, test2.num1);
    expect(test2.quarterYeare).toEqual(quarterYeared);
  });
  test('Unit test 3', () => {
    const test3 = testData.test3;
    const quarterYeared = quarterYear(test3.obj, test3.num1);
    expect(test3.quarterYeare).toEqual(quarterYeared);
  });
});


// 2-й вариант
// const testData = {
//   test1: {
//     arr1: [1, 2, 3],
//     arr2: [8, 7, 6],
//     quarterYeared: [1, 2, 3, 6, 7, 8],
//   },
// };

// describe('quarterYear', () => {
//   testData('Unit test 1', () => {
    // const {arr1, arr2, quarterYeared} = testData.test1;

    // const quarterYeared = quarterYear(testData.test1.arr1, testData.test1.arr2);
    // expect(test1.quarterYeared).toEqual(quarterYear);

//     const test1 = testData.test1;
//     const quarterYeared = quarterYear(test1.arr1, test1.arr2);
//     expect(test1.quarterYeared).toEqual(quarterYear);
//   })
// })

// 1-й вариант
// describe('quarterYear', () => {
//   test('Unit test 1', () => {
//     const arr1 = [1, 2, 3];
//     const arr2 = [8, 7, 6];
//     const quarterYeared = quarterYear(arr1, arr2);
//     const expectedQuarterYeared = [1, 2, 3, 6, 7, 8];
//     expect(expectedQuarterYeared).toEqual(quarterYeared);
//   });
// });

