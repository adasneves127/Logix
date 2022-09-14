inputRows = 1;
outputRows = 1;
function addInput(){
    inputRows++;
    document.getElementById("InputSettings").appendChild(document.createElement("br"));
    deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete Row";
    newRow = document.createElement("input");
    newRow.setAttribute("type", "text");
    newRow.setAttribute("id", `Input${inputRows}`);
    deleteBtn.setAttribute("id", `Delete_In${inputRows}`);
    deleteBtn.setAttribute("onclick", `deleteInput(${inputRows})`);

    newLabel = document.createElement("label");
    newLabel.setAttribute("for", `Input${inputRows}`);
    newLabel.innerHTML = `Input ${inputRows}: `;
    newLabel.setAttribute("id", `InputLbl${inputRows}`);
    document.getElementById("InputSettings").appendChild(newLabel);

    document.getElementById("InputSettings").appendChild(newRow);
    document.getElementById("InputSettings").appendChild(deleteBtn);
    newRow.focus();
}

function addOutput(){
    outputRows++;
    document.getElementById("OutputSettings").appendChild(document.createElement("br"));
    deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete Row";
    newRow = document.createElement("input");
    newRow.setAttribute("type", "text");
    newRow.setAttribute("id", `Out${outputRows}`);
    deleteBtn.setAttribute("onclick", `deleteOutput(${inputRows})`);
    deleteBtn.setAttribute("id", `Delete_Out${outputRows}`);

    newLabel = document.createElement("label");
    newLabel.setAttribute("for", `Out${outputRows}`);
    newLabel.innerHTML = `Output ${outputRows}: `;
    newLabel.setAttribute("id", `OutputLbl${inputRows}`);
    document.getElementById("OutputSettings").appendChild(newLabel);

    document.getElementById("OutputSettings").appendChild(newRow);
    document.getElementById("OutputSettings").appendChild(deleteBtn);
    newRow.focus();
}

function deleteInput(row){
    document.getElementById(`Input${row}`).remove();
    document.getElementById(`Delete_In${row}`).remove();
    document.getElementById(`InputLbl${row}`).remove();
    inputRows--;
}

function deleteOutput(row){
    document.getElementById(`Output${row}`).remove();
    document.getElementById(`Delete_Out${row}`).remove();
    document.getElementById(`OutputLbl${row}`).remove();
    inputRows--;
}