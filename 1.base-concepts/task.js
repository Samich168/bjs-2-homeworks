"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let disc = b ** 2 - 4 * a * c;
  if (disc > 0){
    let x1 = ((-b + Math.sqrt(disc)) / (2 * a));
    let x2 = ((-b - Math.sqrt(disc)) / (2 * a));
    arr.push(x1, x2)
  } else if (disc = 0){
    let x1 = -b/(2*a);
    arr.push(x1)
  }
  return arr;
}
// function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
// }