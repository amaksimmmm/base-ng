/* 
  Вы были в походе с друзьями далеко от дома, но когда пришло время возвращаться, 
  вы поняли, что топливо заканчивается, а ближайшая заправка находится в 50 
  нескольких милях! Вы знаете, что в среднем ваша машина проезжает около 25 миль 
  на галлон. Остались 2галлоны.
  
  Учитывая эти факторы, напишите функцию, которая сообщит вам, возможно ли 
  добраться до насоса или нет.

  Функция должна возвращать значение true, если это возможно, и false наоборот.
*/

/**
 * @function pullIntoAGasStation
 * @description Function that will tell us whether it is possible to get to a gas station or not.
 * @param {number} halon fuel in the tank
 * @param {number} drivengMiles miles driven
 * @param {numer} miles average fuel flow
 * @returns {boolean} True if possible, and false on the contrary
 */

export const pullIntoAGasStation = (miles, halon, drivengMiles) => {   //miles добавил для 3-го варианта
  // const miles = 25 * halon; // условие для 1 и 2 варианта

  // if (miles >= drivengMiles) {
  //   return 'True: доедем не очкуй кожаный';
  // }else {
  //   return 'False: нужно по пути у кого-то слить пару голонов';
  // };

  // return miles ? miles >= drivengMiles : 'null';

  return miles * halon <= drivengMiles; // нужно убрать return и фигурные скобки т.к. код написал в одну строчку
};
