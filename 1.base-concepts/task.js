"use strict"
function solveEquation(a, b, c){
  let disk = Math.pow(b, 2) - 4 * a * c;
  if (disk < 0){
    return [];
  }
  if (disk === 0){
    return( -b / (2*a));
  }
  else{
    let x1 = (-b + disk ** 0.5) / (2*a);
    let x2 = (-b - disk ** 0.5) / (2*a);
    return x1, x2;
  }
}
console.log(solveEquation(1, 2, 1))









































// "use strict"
// function solveEquation(a, b, c) {
//   let arr = [];
//   let disc = b ** 2 - 4 * a * c;
//   let x1 = 0, x2 = 0;
//   if (disc > 0){
//     x1 = ((-b + Math.sqrt(disc)) / (2 * a));
//     x2 = ((-b - Math.sqrt(disc)) / (2 * a));
//     arr.push(x1, x2)
//   } else if (disc === 0){
//     x1 = -b/(2*a);
//     arr.push(x1)
//   }
//   return arr;
// }

// function calculateTotalMortgage(percent, contribution, amount, countMonths){
//     let monthPercent = percent / 100 / 12;
//     let body = amount - contribution;
//     let monthPay = body * (monthPercent + monthPercent / (((1 + monthPercent)**countMonths)-1));
//     let fullPrice = monthPay * countMonths;
//     return Number(fullPrice.toFixed(2));
// }