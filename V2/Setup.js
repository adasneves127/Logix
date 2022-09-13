inputRows = 1;
outputRows = 1;
function addInput(){
    inputRows++;
    document.getElementById("InputSettings").appendChild(document.createElement("br"));
    newRow = document.createElement("input");
    newRow.setAttribute("type", "text");
    newRow.setAttribute("id", `Input${inputRows}`);

    newLabel = document.createElement("label");
    newLabel.setAttribute("for", `Input${inputRows}`);
    newLabel.innerHTML = `Input ${inputRows}: `;
    document.getElementById("InputSettings").appendChild(newLabel);

    document.getElementById("InputSettings").appendChild(newRow);
}

function addOutput(){
    outputRows++;
    document.getElementById("OutputSettings").appendChild(document.createElement("br"));
    newRow = document.createElement("input");
    newRow.setAttribute("type", "text");
    newRow.setAttribute("id", `Out${outputRows}`);

    newLabel = document.createElement("label");
    newLabel.setAttribute("for", `Out${outputRows}`);
    newLabel.innerHTML = `Output ${outputRows}: `;
    document.getElementById("OutputSettings").appendChild(newLabel);

    document.getElementById("OutputSettings").appendChild(newRow);
}