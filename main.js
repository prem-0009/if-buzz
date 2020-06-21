/*******************************************************************************
 * Your code here!
 ******************************************************************************/
const num = getInput(0);

const isEvenlyDivisibleBy3 = num % 3 === 0;
const isEvenlyDivisibleBy5 = num % 5 === 0;
let answer = '';
if (isEvenlyDivisibleBy3){
  answer = 'Fizz'
}

if (isEvenlyDivisibleBy5){
  answer = answer + 'Buzz'
}

if (!isEvenlyDivisibleBy3 && !isEvenlyDivisibleBy5){
  answer = num;
}
console.log(answer);

// if (isEvenlyDivisibleBy3){
//   if ( isEvenlyDivisibleBy5){
//     console.log("FizzBuzz")
//   } else {
//     console.log("Fizz")
//   }
// } else if ( isEvenlyDivisibleBy5){
//   console.log("Buzz")
// } else {
//   console.log(num)
// }


// if (isEvenlyDivisibleBy3   && isEvenlyDivisibleBy5 ){
//     console.log("FizzBuzz")
// }else if (isEvenlyDivisibleBy3 ){
//     console.log('Fizz')
// }else if (isEvenlyDivisibleBy5 ){
//     console.log("Buzz")
// } else {
//     console.log(num)
// }

// // stretch
// const firstN = getInput(1);
// const secondN = getInput(2);
// const isEvenlyDivisibleBy1st = num % firstN === 0;
// const isEvenlyDivisibleBy2nd = num % secondN === 0; 



// if (isEvenlyDivisibleBy1st  && isEvenlyDivisibleBy2nd){
//   console.log('FizzBuzz')
// } else if (isEvenlyDivisibleBy1st  ){
//   console.log('Fizz')
// } else if (isEvenlyDivisibleBy2nd  ){
//   console.log('Buzz')
// } else if (isEvenlyDivisibleBy3  && isEvenlyDivisibleBy5){
//   console.log("FizzBuzz")
// }else if (isEvenlyDivisibleBy3){
//   console.log('Fizz')
// }else if (isEvenlyDivisibleBy5){
//   console.log("Buzz")
// } else {
//   console.log(num)
//   }


/*******************************************************************************
  The below helper function will return an argument the user used when launching
  the app.

  So if the app was launched using the command `node main.js 5 8`, for example,
  5 would be the first argument, and 8 the second.

  Our helper function takes a number as a parameter and returns the argument
  with that index, as a string.

  If no argument with the given index was used when launching the app,
  undefined will be returned.

  The indices are not the indices of a string, with each character its own
  individual string. Instead, each space-separated word is its own index.

  See the following diagram of indices for an example:

  input: node main.js help what is 32 * 9 please
  indices:             0    1   2  3  4 5   6

  So if the user typed in `node main.js 47 times 5`, then the following calls
  to `getInput` would result in the following outputs:

  getInput(0) // -> '47'
  getInput(1) // -> 'times'
  getInput(2) // -> '5'
  getInput(3) // -> undefined

  For most apps, you will need multiple inputs from the user, but for this 
  one, getInput(0) should be all you need.
 ******************************************************************************************/

function getInput(i) {
  return process.argv[i + 2];
}
