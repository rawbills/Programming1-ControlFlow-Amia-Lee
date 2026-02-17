// Conditions kata: FizzBuzz-style function that returns an array for 1..n

function fizzBuzz(n = 100) {
  // TODO: write your solution here (replace the line below).
  // Return an array of values for 1..n following FizzBuzz rules.
  // Example: fizzBuzz(5) -> [1, 2, "Fizz", 4, "Buzz"]
  // Explain your logic choices in comments as you code.


 // Purpose: return array
 // n is the limit to the amount of times the loop will run
  // Loop through numbers 1 to n
  // If number is divisible by 3, add "Fizz" to the array
  // If number is divisible by 5, add "Buzz" to the array
  // If number is divisible by both 3 and 5, add "FizzBuzz" to the array
  // Otherwise, add the number itself to the array
  for (let i = 1; i <= 20; i++) {
    if(i % 15 === 0){
      console.log("FizzBuzz")
    }if(i % 3 === 0){
      console.log("Fizz")
    }else if (i % 5 ===0){
      console.log("Buzz")
    } else{
      console.log(i)
    }
  }
}
fizzBuzz(5);

globalThis.__katas = globalThis.__katas || {};
globalThis.__katas.fizzBuzz = fizzBuzz;
