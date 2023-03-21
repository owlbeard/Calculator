const add = function(firstNum, secondNum) {
  let equation = firstNum + secondNum;
  let decimalDefense = (Math.round(equation * 10) / 10).toFixed(1);
  return Number(decimalDefense);
};

const subtract = function(firstNum, secondNum) {
  let equation = firstNum - secondNum;
  let decimalDefense = (Math.round(equation * 10) / 10).toFixed(1);
  return Number(decimalDefense);
};

const multiply = function(firstNum, secondNum) {
  let equation = firstNum * secondNum;
  let decimalDefense = (Math.round(equation * 10) / 10).toFixed(1);
  return Number(decimalDefense);
};

const divide = function(firstNum, secondNum) {
  let equation = firstNum / secondNum;
  let decimalDefense = (Math.round(equation * 10) / 10).toFixed(1);
  return Number(decimalDefense);
};

let firstNum = [];
let operator = ""
let secondNum = [];
let operatorPressed = false;
console.log(operatorPressed)

const allNumbers = Array.from(document.getElementsByClassName("number"));
const allSymbols = Array.from(document.getElementsByClassName("symbol"));
const clear = document.querySelector("#clear");
const deleteNumber = document.querySelector("#delete");
const equation = document.getElementById("equation");
const equals = document.getElementById("equals");
const results = document.querySelector(".result")

for (let i = 0; i < allNumbers.length; i++) {
  allNumbers[i].addEventListener("click", function(e) {
    let numeric = Number(e.target.textContent)
    if (operatorPressed === false) {
      firstNum.push(numeric)
      equals.textContent = Number(firstNum.join(""))
    };
    if (operatorPressed === true) {
      secondNum.push(numeric);
      equals.textContent = Number(secondNum.join(""))
    };
  })
}

for (let i = 0; i < allSymbols.length; i++) {
  allSymbols[i].addEventListener("click", function(e) {
    let strSymbol = e.target.textContent.toString();
    if (strSymbol === "÷") {
      operatorPressed = true;
      operator = "÷";
      equation.textContent = Number(firstNum.join("")) + " " + operator;
    }
    else if (strSymbol === "x") {
      operatorPressed = true;
      operator = "x";
      equation.textContent = Number(firstNum.join("")) + " " + operator;
    }
    else if (strSymbol === "-") {
      operatorPressed = true;
      operator = "-";
      equation.textContent = Number(firstNum.join("")) + " " + operator;
    }
    else if (strSymbol === "+") {
      operatorPressed = true;
      operator = "+";
      equation.textContent = Number(firstNum.join("")) + " " + operator;
    }
    else if (strSymbol === ".") {
      if (operatorPressed === true) {
        secondNum.push(".");
        equals.textContent = secondNum.join("")
        console.log()
      }
      if (operatorPressed === false) {
        firstNum.push(".");
        equals.textContent = firstNum.join("")
        console.log(firstNum)
      };
    }
  })  
}

results.addEventListener("click", function(e) {
  let x = Number(firstNum.join(""))
  let y = Number(secondNum.join(""))
  equation.textContent = x + " " + operator + " " + y + " =";
  if (operator == "÷") {
    equals.textContent = Number(divide(x, y));
    firstNum = Array.from(String(divide(x, y)))
    secondNum = [];
    operatorPressed = false;
  }
  else if (operator == "x") {
    equals.textContent = Number(multiply(x, y));
    firstNum = Array.from(String(multiply(x, y)))
    secondNum = [];
    operatorPressed = false;
  }
  else if (operator == "-") {
    equals.textContent = Number(subtract(x, y));
    firstNum = Array.from(String(subtract(x, y)))
    console.log(firstNum)
    secondNum = [];
    operatorPressed = false;
  }
  else if (operator == "+") {
    equals.textContent = Number(add(x, y));
    firstNum = Array.from(String(add(x, y)))
    secondNum = [];
    operatorPressed = false;
  }
  else {
    return;
  };
})

clear.addEventListener("click", function(e) {
  firstNum = [];
  secondNum = [];
  operator = ""
  operatorPressed = false;
  equation.textContent = "";
  equals.textContent = 0
})

deleteNumber.addEventListener("click", function(e) {
  if (operatorPressed === false) {
    firstNum.pop();
    equals.textContent = Number(firstNum.join(""));
  }
  else if (operatorPressed === true) {
    secondNum.pop();
    equals.textContent = Number(secondNum.join(""));
  }
})