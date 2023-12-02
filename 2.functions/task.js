function getArrayParams(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...elements){
    let result = elements.reduce((sum, current) => sum + current, 0);
    return result;
}
function differenceMaxMinWorker(...elements){
    let result = Math.max(...elements) - Math.min(...elements);
    return result;
}
function differenceEvenOddWorker(...elements){
    let sumEvenElement = 0, sumOddElement = 0;
    for (let i = 0; i < elements.length; i++){
        if (elements[i] % 2 == 0) {
            sumEvenElement += elements[i];
        }
        else{
            sumOddElement += elements[i];
        };
    };
    return sumEvenElement - sumOddElement;
};
function averageEvenElementsWorker(...elements){
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < elements.length; i++){
    if (elements[i] % 2 === 0){
      sumEvenElement += elements[i];
      countEvenElement++;
    };
  };
  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func){
  let maxWorkerResult = -Infinity;
  for (let arr of arrOfArr){
    let result = func(...arr);  
    if (result > maxWorkerResult){
      maxWorkerResult = result;
    };
  };
  return maxWorkerResult
}
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];

/*
function getArrayParams(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
    for (let i = 0; i < arr.length; i++){
      sum = sum + arr[i];
    }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  if (arr.length === 0){
    return 0
  }
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
      sumEvenElement += arr[i];
    }else{
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  sumEven = 0;
  countEven = 0;
  if (arr.length === 0){
    return 0
  }
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
      sumEven += arr[i];
      countEven += 1;
    }
  }
  return sumEven / countEven;
}
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
function makeWork(arrOfArr, func) {
  let MaxWorkCount = -Infinity;
  for (let Arr of arrOfArr){
    if (func(...Arr) > MaxWorkCount){
      MaxWorkCount = func(...Arr);
    }
  }
  return MaxWorkCount;
}
*/