"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let disc = b ** 2 - 4 * a * c;
  let x1 = 0, x2 = 0;
  if (disc > 0){
    x1 = ((-b + Math.sqrt(disc)) / (2 * a));
    x2 = ((-b - Math.sqrt(disc)) / (2 * a));
    arr.push(x1, x2)
  } else if (disc === 0){
    x1 = -b/(2*a);
    arr.push(x1)
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = parseFloat(percent / 100);
  let credit = (amount - contribution);
  let monthPercent = percent / 12;
  let pay = credit * (monthPercent + (monthPercent / (((1 + monthPercent)**countMonths) - 1)));
  return (pay * 12).toFixed(2);
}