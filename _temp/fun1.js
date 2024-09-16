/*
  Напишите функцию, которая принимает в качестве параметров целое число nи 
  строку sи возвращает строку, sповторяющуюся ровно nраз.

  Примеры (вход -> выход)
    6, "I"     -> "IIIIII"
    5, "Hello" -> "HelloHelloHelloHelloHello"

/////ТАПОРНАЯ ФУНКЦИЯ/////
const log = console.log;

const numberInteger = 6;
const line = 'I';

const repeatingString = (num, str) => {
  for (let count = 1; count <= num; count++) {
    log(str);
  };
};

repeatingString(numberInteger, line);
repeatingString(6, 'i');
*/
const log = console.log;

const repeatingString = (num, str) => {
  return str.repeat(num);
};

log(repeatingString(6, 'I'));
log(repeatingString(5, 'Hello'));
