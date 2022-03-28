let inputSize, outputSize;
let currentIndex = 0;

function focusMain(){
    document.getElementById("inputSize").focus();
}

function createTable(){
    
    let inputL, outputL, outputI, inputI, createB;
    
    inputL = document.getElementById("inputLabel")
    outputL = document.getElementById("outputLabel")
    inputI = document.getElementById("inputSize")
    outputI = document.getElementById("outputSize")
    createB = document.getElementById("createButton")
    inputI.style.display = inputL.style.display = outputI.style.display = createB.style.display = outputL.style.display = "none";

    inputSize = parseInt(inputI.value);
    outputSize = parseInt(outputI.value);
    //console.log(inputSize, outputSize)
    if(isNaN(inputSize) || isNaN(outputSize)){
        alert("Input is not valid!")
        inputI.style.display = inputL.style.display = outputI.style.display = createB.style.display = outputL.style.display = "inline-block";
        return;
    }

    const TableLocation = document.getElementById("TableLocation");
    const Table = document.createElement("table")
    TableLocation.appendChild(Table)
    const TableHeader = document.createElement("tr")
    Table.appendChild(TableHeader)
    for(let i = 0; i < inputSize; i++){
        let currentCol = document.createElement("th")
        let currentData = document.createTextNode("In" + i);
        currentCol.appendChild(currentData);
        TableHeader.appendChild(currentCol)
    }
    for(let i = 0; i < outputSize; i++){
        let currentCol = document.createElement("th")
        let currentData = document.createTextNode("Out" + i);
        currentCol.appendChild(currentData);
        TableHeader.appendChild(currentCol)
    }

    for(let height = 0; height < Math.pow(2, inputSize); height++){
        let currentRow = document.createElement("tr")
        let number = convertNumToBin(height, inputSize)
        Table.appendChild(currentRow);
        for(let widthInput = 0; widthInput < inputSize; widthInput++){
            let currentCol = document.createElement("td")
            currentCol.setAttribute("id", `Input${widthInput + (inputSize * height)}`)
            let currentData = document.createTextNode(number[widthInput])
            currentRow.appendChild(currentCol)
            currentCol.appendChild(currentData)
        }
        for(let widthOut = 0; widthOut < outputSize; widthOut++){
            let currentCol = document.createElement("td")
            currentCol.setAttribute("id", `Output${widthOut + (outputSize * height)}`)
            currentRow.appendChild(currentCol)
        }
    }
    selectCell("rgba(255, 0, 0, 0.5)")
    document.getElementById("tableControl").style.display="inline-block"
    document.getElementById("DataIn").focus()
}


function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}  

function convertNumToBin(number, outputSize){
    let output = new Array(outputSize);

    for(let i = 0; i < outputSize; i++){
        output[i] = ((number & 1 << i) & 0xFFFF) != 0 ? 1 : 0
    }
    output.reverse();
    return output;
}

function Navigate(direction){
    document.getElementById("DataIn").focus()
    selectCell("transparent")
    switch(direction){
        case "next":
            currentIndex = (currentIndex + 1) % (outputSize * Math.pow(2, inputSize));

            break;
        case "last":
            --currentIndex;
            if(currentIndex < 0){
                currentIndex = Math.pow(2, inputSize) - 1
            }
            break;
    }
    selectCell("rgba(255, 0, 0, 0.5)") 
}

function selectCell(Color){
    let currentCell = document.getElementById(`Output${currentIndex}`)
    currentCell.style.backgroundColor = Color
}

function ConfirmData(){
    let dataIn = parseInt(document.getElementById("DataIn").value);
    document.getElementById("DataIn").value = ""
    document.getElementById("DataIn").focus()
    if(isNaN(dataIn) || (dataIn !== 0 && dataIn !== 1)){
        alert("Data is not valid!")
        return;
    }
    console.log(dataIn)
    document.getElementById(`Output${currentIndex}`).innerText = dataIn
    Navigate('next')
}
function CompleteTable(){
    let tableGen = new TableGenerator(inputSize, outputSize)
    tableGen.generateEq();

}
