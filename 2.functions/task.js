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
console.log(differenceMaxMinWorker())

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