// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback
  * In the body of the function return the callback with the two parameters that you created
*/

const desk = ['Pen', 'Journal', 'Laptop', 'Phone', 'Paper', 'Water Bottle'];

  function getLength(desk, cb) {
  cb(desk.length);
  }

  getLength(desk, (length) => {
    console.log(length);
  })


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

  // let add = function(x,y) {
  //   return x+y;
  // }
  function consume1(x,y,add) {
    add(x+y);
  }
  consume1(2,2,function(total) {
    console.log(total);
  });

  // let multiply = function (x,y) {
  //   return x*y;
  // }
  function consume2(x,y,multiply) {
    multiply(x*y)
  }
  consume2(10,16,function(multiply) {
    console.log(multiply)
  });

  // let greeting = function(first, last) {
  //   return `Hello ${first} ${last}, nice to meet you!`
  // }

  function consume3(first, last, greeting) {
    greeting(`Hello ${first} ${last}, nice to meet you`)
  }
  consume3("Mary","Poppins",function(greeting) {
    console.log(greeting)
  });


// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!

  // function consume(x, y, add) {
  //   add(x+y);
  // }
  // consume(2,2,function(add) {
  //   console.log(add);
  // }); // 4
  //
  //
  // function consume(x, y, multiply) {
  //   multiply(x * y);
  // }
  // consume(10,16,function(multiply) {
  //   console.log(multiply);
  // }); // 160
  //
  //
  //
  // function consume(first, last, greeting) {
  //   greeting("nice to meet you!");
  // }
  // consume("Mary","Poppins", function(greeting) {
  //   console.log(`Hello ${first} ${last} ${greeting}`)

  // }); // Hello Mary Poppins, nice to meet you!

/* Step 3: Check your work by un-commenting the following calls to consume(): */




// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

/* Explanation: nestedFunction() is a function within the myFunction function. It has created a "closure" and
therefore can access variables within its internal scope, as well as from the outer function scope (eg. internal) and
finally, from the global scope, or "external". It's like a 2 way mirror where nestedFunction() can see all the way out.*/


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
