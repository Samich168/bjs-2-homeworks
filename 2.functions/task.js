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
  if (arr === []){
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
  if (arr === []){
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

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let dataArr of arrOfArr) {
    const workerResult = func(...dataArr);
    
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }

  return maxWorkerResult;
}
