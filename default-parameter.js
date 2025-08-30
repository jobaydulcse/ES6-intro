function sum(num1 = 0, num2 = 0) {
  const total = num1 + num2;
  console.log(total);
}
// sum(10, 20);
// NaN = not a number
// sum(12);
// sum(10, 50);

function multiply(num1 = 1, num2 = 1) {
  const result = num1 * num2;
  console.log(result);
}
// multiply(10, 10);

// multiply(10);

function fullName(first, last = "") {
  const name = first + " " + last;
  console.log(name);
}
fullName("Manik");
