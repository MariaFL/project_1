"use strict";

var getAdjustment = require('get-adjustment');


console.log(getAdjustment(2, 1, 2, 2));
console.log(getAdjustment(2, 3, 2, 2));
console.log(getAdjustment(2, 2, 2, 1));
console.log(getAdjustment(2, 2, 2, 3));
console.log(getAdjustment(2, 1, 2, 1));
console.log(getAdjustment(2, 3, 2, 1));
console.log(getAdjustment(2, 1, 2, 3));
console.log(getAdjustment(2, 3, 2, 3));
console.log(getAdjustment(2, 4, 2, 3));