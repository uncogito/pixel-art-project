const form = document.getElementById("sizePicker");
const colorPicker = document.getElementById("colorPicker");
const grid = document.getElementById("pixelCanvas");

function makeGrid(event) {
    grid.innerHTML ="";  
    event.preventDefault();  
    let height = document.getElementById("inputHeight").value 
    let width = document.getElementById("inputWidth").value
    //console.log (event, height, width)
    for (let i=0; i<height; ++i) {
        let newRow = grid.insertRow(i);
        for (let j=0; j<width; ++j) {
          newRow.insertCell(j) ;
        }
    }

}

function pickColor() {
   let newColor = colorPicker.value;
    return newColor;
}

function changeColor(event){
    let rgbValue ;
    if (event.target.nodeName == "TD"){//check that click is on cell
        function hexToRgb (hex) { //convert color value of existing color to hex
            let red = parseInt(hex[1]+hex[2],16);
            let green = parseInt(hex[3]+hex[4],16);
            let blue = parseInt(hex[5]+hex[6],16);
            return (`rgb(${red}, ${green}, ${blue})`);
        }
        rgbValue = hexToRgb(pickColor());    
        if (event.target.style.backgroundColor === rgbValue) {//if already colored in picked color 
            event.target.style.backgroundColor = "#ffffff";     //change to white
        } else {
        event.target.style.backgroundColor = pickColor();
        }
    
    }
}    



colorPicker.addEventListener("click", pickColor);
form.addEventListener("submit", makeGrid);
grid.addEventListener("click", changeColor);
