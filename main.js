function calculate (){
    const getInputNumberField1 = document.getElementById('input-field1')
    const inputValuerectangle = getInputNumberField1.value;


    const getInputNumberField2 = document.getElementById('input-field2')
    const inputValueparallelogram = getInputNumberField2.value;

   const getMultiplyOfValue = inputValuerectangle*inputValueparallelogram;

   const ResultOutputField =document.getElementById('outputResult');
  ResultOutputField.innerText =getMultiplyOfValue;
}


document.getElementById('rectangle-button').addEventListener('click', function () {
    calculate ()
    // console.log(inputValue);
})





// random color function

  function randomBackgroundColor() {
    var red = Math.floor(Math.random() * 256);     // Generate random value for red (0-255)
    var green = Math.floor(Math.random() * 256);   // Generate random value for green (0-255)
    var blue = Math.floor(Math.random() * 256);    // Generate random value for blue (0-255)
  
    var color = "rgb(" + red + ", " + green + ", " + blue + ")";   // Create the RGB color string
    return color;
  }
  
  const getAllCard = document.querySelectorAll(".cards");
  for(const getCards of getAllCard)
  getCards.addEventListener('mouseover',function(){
      getCards.style.backgroundColor =randomBackgroundColor();
  })

// table function
function addData(elementName,Area){
  const calculationArea = document.getElementById('table-body');
  const createTable = document.createElement("tr");
  
  createTable.innerHTML = `
  <td>${serial}.</td>
  <td>${elementName}</td>
  <td>${Area}cm<sup>2</sup></td>
  <td><button class="btn btn-sm">Convert to m<sup>2</sup></button></td>
  `
   calculationArea.appendChild(createTable)
  }

