var a = [];
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
        }
}

for(i=0; i!=100; i++){
    a[i]=i+1;
    console.log(fizzbuzz(a[i]));
}

