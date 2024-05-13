let getArrayParams = function(...arr){
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = [...arr].reduce((i, j) => {
    return i += j;
  });
  let avg = sum / [...arr].length;
  return(`max: ${max}, min: ${min}, avg: ${+avg.toFixed(2)}`);
  }

let summElementsWorker = function(...elements){
  if ([...elements].length === 0) {
    return 0
  }
  let result = 0; 
  result = elements.reduce((sum, current) => sum + current, 0);
  return result;
}

let differenceMaxMinWorker = function(...elements){
  if ([...elements].length === 0) {
    return 0
  }
  let result = 0; 
  result = Math.max(...elements) - Math.min(...elements);
  return result;
}

let differenceEvenOddWorker = function(...elements){
  if ([...elements].length === 0) {
    return 0
  }
  let sumEvenElement = 0, sumOddElement = 0;
  for (let i = 0; i < elements.length; i++){
    if (elements[i] % 2 === 0){
      sumEvenElement += elements[i];
    } else {
      sumOddElement += elements[i];
   }  
  }
  return sumEvenElement - sumOddElement;
}
let averageEvenElementsWorker = function(...elements){
  if (elements.length === 0) {
    return 0
  }
  let sumEvenElement = 0, countEvenElement = 0;
  for (let i = 0; i < elements.length; i++){
    if (elements[i] % 2 === 0 ){
      sumEvenElement += elements[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}

let makeWork = function(arr, func){
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arr.length; i++){
    if (maxWorkerResult < func(...arr[i])) {
      maxWorkerResult = func(...arr[i]);
    }
  }
  return maxWorkerResult
}

























// function getArrayParams(...arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++){
//     sum = sum + arr[i];
//   }
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
//   let avg = Number((sum / arr.length).toFixed(2));
//   return { min: min, max: max, avg: avg };
// }

// function summElementsWorker(...elements){
//     let result = 0; 
//     result = elements.reduce((sum, current) => sum + current, 0);
//     return result;
// }
// function differenceMaxMinWorker(...elements){
//     let result = 0; 
//     result = Math.max(...elements) - Math.min(...elements);
//     return result;
// }
// function differenceEvenOddWorker(...elements){
//     let sumEvenElement = 0, sumOddElement = 0;
//     for (let i = 0; i < elements.length; i++){
//         if (elements[i] % 2 == 0) {
//             sumEvenElement += elements[i];
//         }
//         else{
//             sumOddElement += elements[i];
//         };
//     };
//     return sumEvenElement - sumOddElement;
// };
// function averageEvenElementsWorker(...elements){
//   let sumEvenElement = 0;
//   let countEvenElement = 0;
//   for (let i = 0; i < elements.length; i++){
//     if (elements[i] % 2 === 0){
//       sumEvenElement += elements[i];
//       countEvenElement++;
//     };
//   };
//   return sumEvenElement / countEvenElement;
// }

// function makeWork(arrOfArr, func){
//   let maxWorkerResult = -Infinity;
//   for (let arr of arrOfArr){
//     let result = func(...arr);  
//     if (result > maxWorkerResult){
//       maxWorkerResult = result;
//     };
//   };
//   return maxWorkerResult
// }
// const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
