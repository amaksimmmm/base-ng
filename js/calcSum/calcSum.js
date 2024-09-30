// /**
//  * @typedef {object} InputUser
//  * @property {string} firstName
//  * @property {string} lastName
//  * @property {number} age
//  */

// /**
//  * @typedef {object} OutputUser
//  * @property {string} fulltName
//  * @property {number} ageIn
//  * @property {boolean} isAdult
//  */

/**
 * @typedef {InputUser} InputUser
 */

/**
 * @function transForm
 * @param {InputUser} user
 * @returns {OutputUser}
 */

export const transForm = (user) => ({
  fullName: `${user.firstName} ${user.lastName}`,
  ageIn: user.age * 12,
  isAdult: user.age >= 18
});
