/*
  Создайте функцию, которая принимает два числа в качестве аргументов и 
  возвращает их сумму.

  Примеры
  addition(3, 2) ➞ 5
  addition(-3, -6) ➞ -9
  addition(7, 3) ➞ 10

  Примечания
  Не забудьте о return результате.
  Если вы застряли на каком-то задании, найдите помощь на вкладке «Ресурсы» .
  Если вы действительно застряли, разблокируйте решения на вкладке «Решения» .

//Function Declaration, Anonymous Function
console.log('1-й вариант:', addition32(3, 2));

function addition32(num1, num2) {
  return num1 + num2;
};

//Function Expression
const addition36 = function(num1, num2) {
  let sum = num1 + num2;
  return sum;
};
console.log('2-й вариант:', addition36(-3, -6));

const addition57 = (num1, num2) => {
  return num1 + num2;
};
console.log('2.1-й вариант:', addition57(5, 7));

//Arrow Functions
const addition73 = (num1, num2) => num1 + num2;
console.log('3.1-й вариант:', addition73(7, 3));

const addition74 = (num1, num2) => num1 - num2;
console.log('3.2-й вариант:', addition74(7, 4));

const addition77 = (num1, num2) => num1 * num2;
console.log('3.3-й вариант:', addition77(7, 4));

const addition84 = (num1, num2) => num1 / num2;
console.log('3.4-й вариант:', addition84(8, 4));
*/

const sum = (num1, num2) => {
  const s = num1 + num2;
  if (typeof s === 'number') {
    return s;
  } else {
    console.log('not number');
    return null;
  };
};

console.log(sum(5, 'h'));

const sumNumber = (num1, num2) => {
  const s = num1 + num2;
  if (typeof s === 'number') {
    return s;
  } else {
    console.log('not number');
    return null;
  };
};

console.log('sumNumber: ', sumNumber(5, 5));

const root = (n1, n2) => {
  console.log('root: ', n1 * n2);
  return n1 * n2;
};

root(5, 5);
root(5, '5');
root('h', '5');

const look = (n1, n2) => {
  if (
    typeof n1 !== 'number' ||
    typeof n2 !== 'number' ||
    isNaN(n1) ||
    isNaN(n2) 
  ) {
    console.log('look: ', 'Error');
    return;
  };
  console.log('look: ', n1 + n2);
  return n1 + n2;
};

look(10, 5);
look(10, '5');
look(null, 'h');
