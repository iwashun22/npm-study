var _ = require('lodash');
var numbers = [30, 2, 42, 9, 12, 51];
_.each(numbers, function (number, i) {
    console.log(i + ": " + number);
});
