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

//   pressedBtns: [],
//   add(val1, val2) {
//     return val1 + val2;
//   },
//   subt(val1, val2) {
//     return val1 - val2;
//   },
//   div(val1, val2) {
//     return val1 / val2;
//   },
//   mutl(val1, val2) {
//     return val1 * val2;
//   },
// };

let calcElements = [
  document.querySelectorAll(".Num"),
  document.querySelectorAll(".operator"),
  document.querySelector(".dot"),
  document.querySelector(".clear"),
  document.querySelector("#equals"),
  document.querySelector("#display"),
];
let pressedString = []; //array to save 1)1st pressed button 2)operator 3)2nd pressed button 4)equals
let previousPressed = false; //1st button is not pressed yet
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
calcElements[0].addEventListener("click", calculate);
function calculate() {}
