// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

function solution(number){
  let sumOfNumber = 0;
    for(let i=1;i<number;i++){
        if(i % 3 == 0 || i % 5 == 0){
          sumOfNumber += i;
        }
    }
  return sumOfNumber;
}
console.log(solution(10))

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

