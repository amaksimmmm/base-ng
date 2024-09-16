// const world = (str) => {
//   console.log(str);
// };

// world('Привет, мир!');

/*
  Если указано число от 0 до 9, верните его словами.
  Вход :: 1
  Выход :: «Один».
  
  Если ваш язык поддерживает это, попробуйте использовать 
  оператор switch .
  
  const number = (num) => {
    // 1. действие
    worldNumber = [
      'Ноль', 'Один', 'Два', 'Три',
      'Четыре', 'Пять', 'Шесть', 'Семь',
      'Восемь', 'Девять'
    ];
    
    //2. действие
    if (num >= 0 && num <= 9) {
      return worldNumber[num];
    } else {
      return 'Число вне диапазона';
  };
};

console.log(number(2));

/*
1. Создаем массив слов чисел
2. Проверка числа и возврат соответствующего слова
каждая цыфра соответствует индексу массива если 
массив начинается не с нуля требуется отнять единицу
от num
*/

/*
с использованием объекта
*

const numbers = (num) => {
  const numObj = {
    0: 'Ноль',
    1: 'Один',
    2: 'Два',
    3: 'Три',
    4: 'Четыре',
    5: 'Пять',
    6: 'Шесть', 
    7: 'Семь',
    8: 'Восемь',
    9: 'Девять'
  };
  
  if (num in numObj) {
    return numObj[num];
  } else {
    return 'Число вне диапазона';
  };
};

console.log(number(7));

//Используем оператор in, чтобы проверить, существует ли 
// переданное число как ключ в объекте numberWords. Если да, 
// возвращаем соответствующее значение. Если нет, возвращаем 
// сообщение 'Число вне диапазона'.
*/

/*
После тяжелого квартала в офисе вы решаете немного отдохнуть в отпуске. Поэтому 
вы бронируете рейс для себя и своей девушки и пытаетесь оставить весь беспорядок 
позади.

Вам понадобится арендованный автомобиль, чтобы передвигаться во время отпуска. 
Менеджер по прокату автомобилей делает вам несколько хороших предложений.
Каждый день аренды автомобиля стоит $40. Если вы арендуете автомобиль на 7 или 
более дней, вы получаете скидку $50 от общей суммы. В качестве альтернативы, 
если вы арендуете автомобиль на 3 или более дней, вы получаете скидку $20 от 
общей суммы.

Напишите код, который выдает общую сумму за разные дни(д).

const dailyRate = 40;
const discountSevenDays = 50;
const discountThreeToSixDays = 20;

const calculateRentalCost = (numberOfDays) => {
  const totalCost = numberOfDays * dailyRate;
  
  if (numberOfDays >= 7) {
    return totalCost - discountSevenDays;
  } else if (numberOfDays >=3) {
    return totalCost - discountThreeToSixDays;
  } else {
    return totalCost;
};
};

console.log('Потрачено за время отдыха:', calculateRentalCost(100),'$');
console.log(calculateRentalCost(7));
console.log(calculateRentalCost(5));
console.log(calculateRentalCost(1));
console.log(calculateRentalCost(0));
*/

const log = console.log;

const listEl = document.getElementById('list');
log(listEl);

const { children } = list;
log(children);
