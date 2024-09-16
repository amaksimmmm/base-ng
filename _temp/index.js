//однострочный коментарий

/*
  многострочный коментарый
  допускаются переносы
*/

/*
  1. Типы данных,
  2. Переменные,
  3. Функции,
  4. Циклы,
  5. Условия,
  6. Вложенность,
  7. DOM API,
  8. Тестирование,
  9. Типизация
*/

/*
2. Переменные 
*/


/*
7. DOM API

const title1 = document.getElementById('title1');
const title2 = document.querySelector('#title2');

title2.textContent = 'joy Hello';

console.log(title1);
console.log(title2);

////////////////////////////////////////////////////////

// var firstVariable = 1;
// const secondVariable = 2;

// const title1 = document.querySelector('#title1');

// title1.textContent = 'hjdjfbjvbkd';

// console.log(title1);
*/

/*
  Создайте функцию, которая возвращает true, может ли первый массив быть вложен 
во второй и false наоборот. arr1 может быть вложен внутрь, arr2 если:

arr1Минимальное значение больше arr2минимального значения .
arr1Максимальное значение меньше arr2максимального значения .
Примеры
canNest([1, 2, 3, 4], [0, 6]) ➞ true

canNest([3, 1], [4, 0]) ➞ true

canNest([9, 9, 8], [8, 9]) ➞ false

canNest([1, 2, 3, 4], [2, 3]) ➞ false
*/
// const trueFalse = (arr1, arr2) => {
//  const minArr1 = Math.min(...arr1);
//  const minArr2 = Math.min(...arr2);
//  const maxArr1 = Math.max(...arr1);
//  const maxArr2 = Math.max(...arr2);

//  if (minArr1 > minArr2 && maxArr1 < maxArr2) {
//    return true;
//  } else {
//    return false;
//  };
// };

// const arr1 = [1, 2, 3, 4];
// const arr2 = [2, 3];

// console.log(trueFalse(arr1, arr2));

const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3];

const canNest = (arr1, arr2) => {
  const [minArr1, maxArr1] = [Math.min(...arr1), Math.max(...arr1)];
  const [minArr2, maxArr2] = [Math.min(...arr2), Math.max(...arr2)];
  return minArr1 > minArr2 && maxArr1 < maxArr2;
};

console.log(canNest([1, 2, 3, 4], [0, 6]));
console.log(canNest([3, 1], [4, 0]));
console.log(canNest([9, 9, 8], [8, 9]));
console.log(canNest([1, 2, 3, 4], [2, 3]));

