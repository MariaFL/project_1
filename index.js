/*var a =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var b;
for(var i=0; i!=10; i++) {
    console.log(a[i]);
}

console.log("\n");

a.forEach((element) => console.log(element));

() => {
    
}

console.log("\n");

var myTools = function (x) {
    this.x = x;
};
myTools.prototype.getAllElement = function (x) {
    console.log(this.x);
    var self = this;
    a.forEach(function(element) {
        console.log(self.x);
    });
};

var myToolbox = new myTools(10);

myToolbox.getAllElement();

console.log("\n");
console.log("\n");

function fizzbuzz(item) {
    if (item%15==0) {
            return("fizzbuzz");
        } else {    
            if (item%3==0) {
                return("fizz");
            }
            if (item%5==0) {
                return("buzz");
            } else {
                return(item);
            } 
        };
}

for(i=0; i!=100; i++){
    a[i]=i+1;
    console.log(fizzbuzz(a[i]));
}
/*a.forEach(function(element) {     
    console.log(fizzbuzz(a[i]));
}, this);

console.log("\n");
console.log("\n");

function arrow(x0, x1, y0, y1) {
    if (y0==y1) {
        if (x0>x1) {
            console.log("arrow left");
            return(0);
        } else {
            console.log("arrow right");
            return(0);
        }
    }
    if (y0>y1) {
        if (x0==x1) {
            console.log("arrow top");
            return(0);
        }
        if (x0>x1) {
            console.log("arrow top-left");
            return(0);
        } else {
            console.log("arrow top-right");
            return(0);
        }
    } else {
        if (x0==x1) {
            console.log("arrow bottom");
            return(0);
        }
        if (x0>x1) {
            console.log("arrow bottom-left");
            return(0);
        } else {
            console.log("arrow bottom-right");
            return(0);
        }
    }
}

function isNear(x0, x1, y0, y1) {
    if ((x1-x0)==1 || (x0-x1)==1 || (x0-x1)==0) {
        if ((y1-y0)==1 || (y0-y1)==1 || (y0-y1)==0) {
            console.log("its near");
            arrow(x0, x1, y0, y1);
        } else { console.log("its not near"); }
    } else { console.log("its not near"); }
}

isNear(2, 1, 2, 2);
isNear(2, 3, 2, 2);
isNear(2, 2, 2, 1);
isNear(2, 2, 2, 3);
isNear(2, 1, 2, 1);
isNear(2, 3, 2, 1);
isNear(2, 1, 2, 3);
isNear(2, 3, 2, 3);
isNear(2, 4, 2, 3);

console.log("\n");
*/
/*var lodash = require('lodash');

console.log(lodash);*/

var fizzbuzz = require('./fizzbuzz');
// console.info(__dirname+***);

// console.log("YA");

