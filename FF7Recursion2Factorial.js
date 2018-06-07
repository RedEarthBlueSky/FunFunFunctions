//  RECURSIVE FUNCION BREAKDOWN
//  1.  Function must have a break statement or condition
//  the function then calls itself
//  until it doesn't because it hits the break statement

function factorial(n, accumulator) {
    if (n === 0) {
      return accumulator;
    }
    return factorial(n - 1, n * accumulator);
}

console.log(factorial(5, 1));
// return factorial(4, 5)
// return factorial(3, 20)
// return factorial(2, 60)
// return factorial(1, 120)
// return 120 as loop is broken

let fac5 = factorial(5, 1);
console.log(fac5);
