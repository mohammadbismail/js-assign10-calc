let numOnScreen = "";
let prevNum = "";
let op = "";

function getDisplay() {
  return document.getElementById("display");
}
function press(num) {
  numOnScreen += num;
  console.log(numOnScreen);
  getDisplay().innerText = numOnScreen;
}
function setOP(oper) {
  op = oper;
  prevNum = numOnScreen;
  console.log(prevNum);
  numOnScreen = "";
  getDisplay().innerText = "0";
}
function clr() {
  numOnScreen = "";
  prevNum = "";
  op = "";
  getDisplay().innerText = "0";
}
function calculate() {
  let result;
  if (op === "+") {
    result = parseFloat(prevNum) + parseFloat(numOnScreen);
  }
  if (op === "-") {
    result = parseFloat(prevNum) - parseFloat(numOnScreen);
  }
  if (op === "/") {
    result = parseFloat(prevNum) / parseFloat(numOnScreen);
  }
  if (op === "*") {
    result = parseFloat(prevNum) * parseFloat(numOnScreen);
  }
  getDisplay().innerText = result;
}
