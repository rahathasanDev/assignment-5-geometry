/* function calculate (){
    const getInputNumberField1 = document.getElementById('input-field1')
    const inputValuerectangle = getInputNumberField1.value;


    const getInputNumberField2 = document.getElementById('input-field2')
    const inputValueparallelogram = getInputNumberField2.value;

   const getMultiplyOfValue = inputValuerectangle*inputValueparallelogram;

   const ResultOutputField =document.getElementById('outputResult');
  ResultOutputField.innerText =getMultiplyOfValue;
}


document.getElementById('triangle-button').addEventListener('click', function () {
    calculate ()
    // console.log(inputValue);
  }) */   //------- its lenthy procces so i skip this.....----
  // --------------random color function-----------

function randomBackgroundColor() {
  var red = Math.floor(Math.random() * 256);     // Generate random value for red (0-255)
  var green = Math.floor(Math.random() * 256);   // Generate random value for green (0-255)
  var blue = Math.floor(Math.random() * 256);    // Generate random value for blue (0-255)

  var color = "rgb(" + red + ", " + green + ", " + blue + ")";   // Create the RGB color string
  return color;
}

const getAllCard = document.querySelectorAll(".cards");
for (const getCards of getAllCard)
  getCards.addEventListener('mouseover', function () {
    getCards.style.backgroundColor = randomBackgroundColor();
  })


// random color function end 



//  input value clear  function-----
function emtyString(inputOneId, inputTwoId) {
  document.getElementById(inputOneId).value = "";
  document.getElementById(inputTwoId).value = "";
}

//  table data function start-------
function addDataUsingJavascript(Name, Area) {
  const calculationArea = document.getElementById('table-body');
  const createTable = document.createElement("tr");

  createTable.innerHTML = `
<td class="font-semibold pl-5">${serial}.</td>
<td class="font-semibold pl-12">${Name}</td>
<td class="font-bold ">${Area}cm<sup>2</sup></td>
`
  calculationArea.appendChild(createTable);
}
//  table data function end


var serial = 0;   // this var =serial is for 1,2,3,4,5,6,7,8,9 serial maintain........



// first two card calculate function here 

function CalculateInputValue(ButtonID, tittleId, DataFixed, inputOneId, inputTwoId) {

  const getButton = document.getElementById(ButtonID);
  getButton.addEventListener('click', function () {

    const tittle = document.getElementById(tittleId).innerText;
    const fixedValue = DataFixed;

    const value1 = document.getElementById(inputOneId).value;
    if (isNaN(value1) || value1 == '' || value1 < 0) {
      return alert("Please Input A Valid Number")
    }
    const value2 = document.getElementById(inputTwoId).value;
    if (isNaN(value2) || value2 == '' || value2 < 0) {
      return alert("Please Input A Valid Number")
    }
    serial += 1;
    const TotalData = parseFloat(fixedValue) * parseFloat(value1) * parseFloat(value2);
    const TotalDataToFixed = parseFloat(TotalData.toFixed(2));

    addDataUsingJavascript(tittle, TotalDataToFixed);
    emtyString(inputOneId, inputTwoId);
  })
}
// input id To  parameter to the function......

CalculateInputValue("triangle-button", "triangle-tittle", 0.5, "input-field1", "input-field2")
CalculateInputValue("rectangle-button", "rectangle-tittle", 1, "rectangle-input1", "rectangle-input2");

fixedValueCalculate("parallelogram-button", "parallelogram-tittle", 1, "parallelogram-b", "parallelogram-h");
fixedValueCalculate("rhombus-buttton", "rhombus-tittle", 0.5, "rhombus-d1", "rhombus-d2");
fixedValueCalculate("pentagon-button", "pentagon-tittle", 0.5, "pentagon-p", "pentagon-b");
fixedValueCalculate("ellipse-button", "ellipse-tittle", 3.14159265359, "ellipse-a", "ellipse-b");




// function for non input field cards,,,last 4 cards specific function.....


function fixedValueCalculate(ButtonID, tittleId, DataFixed, dataOneId, dataTwoId,) {

  const getButton = document.getElementById(ButtonID);
  getButton.addEventListener('click', function () {
      serial += 1;
      const tittle = document.getElementById(tittleId).innerText;
      const fixedValue = DataFixed;

      const data1 = document.getElementById(dataOneId).innerText;
      const data2 = document.getElementById(dataTwoId).innerText;
      const TotalData = parseFloat(fixedValue) * parseFloat(data1) * parseFloat(data2);
      const TotalDataToFixed = parseFloat(TotalData.toFixed(2));


      addDataUsingJavascript(tittle, TotalDataToFixed);
  })
}


















