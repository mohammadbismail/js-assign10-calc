// TODO: 1)check addEventListener, 2)try array methods like forEach 3)make an object of selectors and methods for calculator
//TODO: 4)try forEach() built-in function to loop in array entries
//TODO: question to ask: how to see innerText of object.propery of an array? like calc.calcElements[0][1].innerText? which should be 8
// const calc = {
//   calcElements: [
//     document.querySelectorAll(".Num"),
//     document.querySelectorAll(".operator"),
//     document.querySelector(".dot"),
//     document.querySelector(".clear"),
//     document.querySelector("#equals"),
//     document.querySelector("#display"),
//   ],
let calcElements = [
  // document.querySelectorAll(".Num"),
  // document.querySelectorAll(".operator"),
  // document.querySelector(".dot"),
  // document.querySelector(".clear"),
  document.querySelector("#equals"),
  document.querySelector("#display"),
];
let pressed = []; //array to save 1)1st pressed button 2)operator 3)2nd pressed button 4)equals
let operator = []; //to know which operator is pressed
let flag = false; // if operator is pressed this will become true
function add(val1, val2) {
  return val1 + val2;
}
function subt(val1, val2) {
  return val1 - val2;
}
function div(val1, val2) {
  return val1 / val2;
}
function mutl(val1, val2) {
  return val1 * val2;
}
function clr() {
  return (calcElements[5].innerText = 0); //empty dispaly
}
function press(value) {
  if (value == 0) {
    pressed.push("0");
  } else if (value == 1) {
    pressed.push("1");
  } else if (value == 2) {
    pressed.push("2");
  } else if (value == 3) {
    pressed.push("3");
  } else if (value == 4) {
    pressed.push("4");
  } else if (value == 5) {
    pressed.push("5");
  } else if (value == 6) {
    pressed.push("6");
  } else if (value == 7) {
    pressed.push("7");
  } else if (value == 8) {
    pressed.push("8");
  } else if (value == 9) {
    pressed.push("9");
  } else if (value == ".") {
    pressed.push(".");
  }
  console.log(pressed);
  return pressed;
}

let sum1 = 0;
for (var i = 0; i < pressed.length; i++) sum1 += pressed[i];
// let pressedValue = parseInt(sum1);
console.log(sum1);
// console.log(pressedValue);
// function operator(value) {
//   if (value == "*") {
//     flag = true; // user has ended entering 1st item
//     mutl();
//   }
// }
