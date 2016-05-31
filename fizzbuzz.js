"use strict";

var fizzbuzz = require('fizzbuzz');

var a = [];

for(let i=0; i!=100; i++){
    a[i]=i+1;
    console.log(fizzbuzz(a[i]));
}

