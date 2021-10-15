const _ = require('lodash');

const numbers = [30, 2, 42, 9, 12, 51];

_.each(numbers, (number, i) => {
   console.log(`${i}: ${number}`);
})