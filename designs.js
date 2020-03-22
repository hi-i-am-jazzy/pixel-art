// Select color input
const colorSelect = document.querySelector('#colorPicker');

// Select size input
const widthInput  = document.querySelector('#inputWidth');
const heightInput = document.querySelector('#inputHeight');
const form        = document.querySelector('#sizePicker');
const grid        = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
function makeGrid(h, w) {
    let output = "";
    for (let j = 0; j < Number.parseInt(h); j++) {
        output += "<tr>";

        for (let x = 0; x < Number.parseInt(w); x++) {
            output += "<td></td>";
        }

        output += "</tr>";
    }

    return output;
};

// Change color when click on grid square
grid.addEventListener('click', event => {
    if (event.target.tagName === "TD") {
      event.target.style.backgroundColor = colorSelect.value;    
    }
  });  

// When submit add Grid to HTML/submit clears background colors
form.addEventListener('submit', function (event) {
    pixelCanvas.innerHTML = makeGrid(heightInput.value, widthInput.value);
    event.preventDefault();
});

