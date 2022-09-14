let currentTable;


function table(x, y){
    this.inputSize = x;
    this.outputSize = y;
    this.tableDict = {};
    this.headerDef = {}
    this.table;
    this.create = function(){
        //Create Table
        let table = document.createElement("table");
        table.setAttribute("id", "TruthTable");
        this.table = table;
        document.getElementById("tableDiv").appendChild(table);
        this.addRows();
        document.getElementById("TableWarning").setAttribute("style", "display: none");
    }
    this.addRows = function(){

        //Create Header Row
        this.tableDict["Header"] = {}
        this.tableDict['Header']['Input'] = []
        this.tableDict['Header']['Output'] = []
        let headerRow = document.createElement("tr");
        for(let i = 0; i < this.inputSize; i++){
            let header = document.createElement("th");
            header.innerText = document.getElementById(`Input${i+1}`).value.toUpperCase();
            headerRow.appendChild(header);
            this.headerDef[header.innerText] = "Input";
            
            this.tableDict["Header"]['Input'].push(header.innerText);
        }

        this.table.appendChild(headerRow);

        for(let i = 0; i < this.outputSize; i++){
            let header = document.createElement("th");
            header.innerText = document.getElementById(`Out${i+1}`).value.toUpperCase();
            headerRow.appendChild(header);

            this.headerDef[header.innerText] = "Output";
            this.tableDict["Header"]['Output'].push(header.innerText);
        }

        this.tableDict["Rows"] = [];
        for(let i = 0; i < Math.pow(2, this.inputSize); i++){
            let currentRow = document.createElement("tr");
            let currentRowDict = {};
            currentRowDict['Input'] = {};
            currentRowDict['Output'] = {};
            for(let j = 0; j < this.inputSize; j++){
                let cell = document.createElement("td");
                cell.innerText = Math.floor(i / Math.pow(2, this.inputSize - j - 1)) % 2;
                cell.setAttribute("id", `Input${this.tableDict['Header']['Input'][j]}Row${i+1}`);
                currentRow.appendChild(cell);
                currentRowDict['Input'][this.tableDict["Header"]['Input'][j]] = cell.innerText;
            }
            for(let j = 0; j < this.outputSize; j++){
                let cell = document.createElement("td");
                cell.innerText = " ";
                currentRow.appendChild(cell);
                cell.setAttribute("id", `Output${this.tableDict['Header']['Output'][j]}Row${i+1}`);
                currentRowDict['Output'][this.tableDict["Header"]['Output'][j]] = cell.innerText;
            }
            this.tableDict["Rows"].push(currentRowDict);

            this.table.appendChild(currentRow);

        }
        //Show the table
        openTab(event, "Table");
    }

    this.loadFunction = function(){
        let splitFunc = document.getElementById("FunctionInput").value.split("=");
        const operations = ["^", "->", "v", "~", "<->"];
        let eq = {}
        operations.forEach(operation => {
            if(splitFunc[1].includes(operation)){
                eq.operation = operation;
                eq.left = splitFunc[1].split(operation)[0];
                eq.right = splitFunc[1].split(operation)[1];
                return;
            }
        })
        //Find IDs for each row
        let inputType = new Array(2);
        let outputType;
        outputType = this.headerDef[splitFunc[0]];
        inputType[0] = (this.headerDef[eq.left]);
        inputType[1] = (this.headerDef[eq.right]);

        console.log(eq);
        for(let i = 0; i < this.tableDict["Rows"].length; i++){

            

            let outputRow = document.getElementById(`${outputType}${splitFunc[0]}Row${i+1}`);
            let leftIn = eq.operation == "~" ? "0": document.getElementById(`${inputType[0]}${eq.left}Row${i+1}`).innerText;
            let rightIn = document.getElementById(`${inputType[1]}${eq.right}Row${i+1}`).innerText;
            

            leftVal = leftIn == "1" ? true : false;
            rightVal = rightIn == "1" ? true : false;

            switch(eq.operation){
                case "^":
                    outputRow.innerText = leftVal && rightVal ? "1" : "0";
                    break;
                case "->":
                    outputRow.innerText = !rightVal || leftVal ? "1" : "0";
                    break;
                case "v":
                    outputRow.innerText = leftVal || rightVal ? "1" : "0";
                    break;
                case "~":
                    outputRow.innerText = !rightVal ? "1" : "0";
                    break;
                case "<->":
                    outputRow.innerText = leftVal == rightVal ? "1" : "0";
                    break;

            }



        }
        //this.updateTable(outputType);
        openTab(event, "Table");
    }
    
    this.updateTable = function(outputType){
        for(let i = 0; i < this.tableDict["Rows"].length; i++){
            let currentRow = this.tableDict["Rows"][i];
            let input = currentRow['Input'];
            let output = currentRow['Output'];
            for(let j = 0; j < Object.keys(output).length; j++){
                let outputKey = Object.keys(output)[j];
                let outputValue = output[outputKey];
                let outputCell = document.getElementById(`Output${this.tableDict['Header']['Output'][j]}Row${i+1}`);
                outputCell.innerText = outputValue;
            }
            
        }
        openTab(event, "Table");
    }

    this.reInit = function(){
        this.table.innerHTML = "";
        this.addRows();
    }
}

function createTable(){
    if(currentTable){
        console.log("Table already exists");
        currentTable.reInit();
    } else {
        console.log("Creating Table");
        currentTable = new table(inputRows, outputRows);
        currentTable.create();
    }
}



//## This is the code for the tabs:

function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function loadFunction(){
    currentTable.loadFunction();
}