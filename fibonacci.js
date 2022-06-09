let n = 10;
let j = 1;
let k = 0;
let fib = 0;
for(i=0;i<=n;i++){
    console.log(fib);
    fib = j+k;
    j = k;
    k = fib;
}