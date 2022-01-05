function fibonacci(num){
  if (num < 2){
    return num;
  }
  let lastTwoIndexes = [0, 1];

  for(let i = 0; i < num - 1; i++){
    const sum = lastTwoIndexes[0] + lastTwoIndexes[1];
    lastTwoIndexes = [lastTwoIndexes[1], sum]
  }
  return lastTwoIndexes[1];
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 55");
  console.log("=>", fibonacci(10))

  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
//if num input is 0 or 1, it's output is 0 or 1.
//create an array to store values to add together and ultimately return as final output for input num.
//start with 0 index and 1 index
//create a loop, and loop to the nth value - 1, because our sum of the previous 2 indexes will yield nth value(output).
//create a variable to store index sums
//push the final index 1 and sum into lastTwoIndexes array.  This could keep going if needed

// And a written explanation of your solution
