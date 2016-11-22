var num;
var operators = [];
var isUserInputing = false, operate = false;

var symPlaceholder = document.getElementById("sym-placeholder");

var operands = [];

function numberInput(numberPressed)
{
  num = numberPressed;
  if (isNaN(num) && num != ".")
  {
    return;
  }

  if(num >= 0 && num <= 9)
  {
    isUserInputing = true;
  }

  if(isUserInputing)
  {
    if(operate)
    {
      document.getElementById("username").value = num;
      operate = false;
    }
    else
    {
      document.getElementById("username").value += num;
    }

  }

  console.log("numberInput---operands:"+operands+"-----------------oprts:"+operators);
}

function operatorPressed(operator)
{
  if(!isUserInputing)
  {
    return;
  }

  operands.push(document.getElementById("username").value);

  if(operands.length > 1)
  {
    performCalculations(operands);
    resetArrayAndNumber();
  }

  operate = true;
  operators.push(operator);

  symPlaceholder.innerHTML = operators[0];
  console.log("operatorPressed---operands:"+operands+"-----------------oprts:"+operators);
}

function displayResult()
{
  operands.push(document.getElementById("username").value);
  if(operands.length > 1)
  {
    performCalculations(operands);
    resetArrayAndNumber();
  }
  else
  {
    clearAll();
  }
  console.log("displayResult---operands:"+operands+"-----------------oprts:"+operators);
}

function performCalculations(oprs)
{
  switch(operators[0])
  {
    case "+":
    document.getElementById("username").value = Number(oprs[0]) + Number(oprs[1]);
    resetArrayAndNumber();
    break;

    case "-":
    document.getElementById("username").value = Number(oprs[0]) - Number(oprs[1]);
    resetArrayAndNumber();
    break;

    case "x":
    document.getElementById("username").value = Number(oprs[0]) * Number(oprs[1]);
    resetArrayAndNumber();
    break;

    case "/":
    document.getElementById("username").value = Number(oprs[0]) / Number(oprs[1]);
    resetArrayAndNumber();
    break;
  }
  console.log("performCalculations---operands:"+operands+"-----------------oprts:"+operators);
}

function resetArrayAndNumber()
{
  operands = [];
  operators.shift();

  num = document.getElementById("username").value;
  operands.push(document.getElementById("username").value);

  isUserInputing = true;
  operate = false;
  console.log("resetArrayAndNumber---operands:"+operands+"-----------------oprts:"+operators);
}

function clearAll()
{
  num = "";
  operators = [];
  isUserInputing = false, operate = false;

  symPlaceholder.innerHTML = "";

  operands = [];

  document.getElementById("username").value = "";
  console.log("clearAll---operands:"+operands+"-----------------oprts:"+operators);
}
