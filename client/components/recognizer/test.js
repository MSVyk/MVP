const minSumSubArray = (array, k) => {
  let smalest = undefined;
  let indexBegin = 0;

  for (let i = 0; i < array.length - (k - 1); i++) {
      let sum = array.slice(i,k);
      let initial = 0;
      sum = sum.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
      }, initial);
      console.log(sum)
      if(!smalest) smalest = sum;
      if(sum < smalest) {
          indexBegin = i;
          smalest = sum;
      }

  }

  return [indexBegin, indexBegin+(k-1)]
}

let arr = [10, 4, 2, 5, 6, 3, 8, 1];
let k = 3;
console.log(minSumSubArray(arr,k));