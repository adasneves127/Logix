class TableGenerator{
    constructor(inputSize, outputSize){
        this.inSize = parseInt(inputSize);
        this.outSize = parseInt(outputSize)
        this.outputTableList = new Array(this.outSize)
        this.inputTableList = new Array(Math.pow(2, this.inSize))
        for(let i = 0; i < this.outputTableList.length; i++){
            this.outputTableList[i] = [];
        }

        for (let index = 0; index < this.inputTableList.length; index++) {
            this.inputTableList[index] = new Array(this.inSize)
        }
        this.equation = new Array(this.outSize);
        for(let currentEqIndex = 0; currentEqIndex < this.equation.length; currentEqIndex++){
            this.equation[currentEqIndex] = [];
        }
        this.alphabetValues = "abcdefghijklmnopqrstuvwxyz".split('')
    }
    generateEq() {
        for(let output = 0; output < this.outSize; output++){
            for(let index = output; index < Math.pow(2, this.inSize) * this.outSize; index+= this.outSize){
                this.outputTableList[output].push(document.getElementById(`Output${index}`).innerText)
            }
        }
        let row = 0;
        let col = 0;
        for(let index = 0; index < Math.pow(2, this.inSize) * this.inSize; index++){
            row = index % this.inSize;
            col = Math.floor(index/this.inSize)
            this.inputTableList[col][row] = document.getElementById(`Input${index}`).innerText;
        }
        console.log(this.outputTableList)
        console.log(this.inputTableList)

        for(let i = 0; i < this.outputTableList.length; i++){
            this.getEquation(this.outputTableList[i])
        }
        for(let i = 0; i < this.equation.length; i++){
            document.getElementById("Output").innerText += "Out" + i + ": " + this.equation[i] + "\n"
        }

    }
    getEquation(outputColumn){
        let lowestUnusedIndex;
        
        for(let i = 0; i < this.equation.length; i++){
            if(this.equation[i].length == 0){
                lowestUnusedIndex = i;
                break;
            }
        }
        console.log(lowestUnusedIndex)

        for(let i = 0; i < outputColumn.length; i++){
            if(outputColumn[i] == "0") continue;
            let output = "("
            for(let j = 0; j < this.inputTableList[i].length; j++){
                output += this.inputTableList[i][j] == "1" ? this.alphabetValues[j] : ("\'" + this.alphabetValues[j])
                if(j < this.inputTableList[i].length - 1){
                    output += "*"
                }
            }
            
            //console.log(output, " ", outputColumn[i])
            this.equation[lowestUnusedIndex] += output;
            if(i < outputColumn.length - 1){
                this.equation[lowestUnusedIndex] += ")+"
            }
            else{
                this.equation[lowestUnusedIndex] += ")"
            }
           

            //console.log(outputColumn[i])

        
        }
        if(this.equation[lowestUnusedIndex].charAt(this.equation[lowestUnusedIndex].length - 1) == '+'){
            let currentEq = this.equation[lowestUnusedIndex].split('');
            currentEq[currentEq.length - 1] = ""
            this.equation[lowestUnusedIndex] = currentEq.join("");
        }
        console.log(this.equation[lowestUnusedIndex])
        
        //this.equation[lowestUnusedIndex] = this.simplifyExpression(this.equation[lowestUnusedIndex])
    }

    simplifyExpression(arr){
        let simpEq = "("

        let EqParts = arr.split("+")

        for(let i = 0; i < EqParts.length; i++){
            if(EqParts[i].charAt(0) == '('){
                EqParts[i] = EqParts[i].substring(1, EqParts[i].length - 1)
            }
            if(EqParts[i].charAt(EqParts[i].length - 1) == ')'){
                EqParts[i] = EqParts[i].substring(0, EqParts[i].length - 1)
            }
        }


        for(let a = 0; a < EqParts.length -1; a++){ 
            
            
            let currEqA = EqParts[a].split("*")
            for(let b = a; b < EqParts.length; b++){
                let diffIndex = -3;
                let diff = 0;
                let currEqB = EqParts[b].split("*")

                for(let index = 0; index < currEqB.length; index++){
                    if(currEqA[index] !== currEqB[index]){
                        diff++;
                        diffIndex = index;
                    }
                }
                if(diff == 1){
                    for(let i = 0; i < currEqA.length; i++){
                        if(i != diffIndex){
                            simpEq += currEqA[i]
                        }
                    }
                    simpEq += ")+("
                    break;
                }
                else{
                    simpEq += EqParts[a] + ")+("
                }
            }
        }

        if(simpEq.charAt(simpEq.length - 2) == '+'){
            let currentEq = simpEq.split('');
            currentEq[currentEq.length - 2] = ""
            currentEq[currentEq.length - 1] = ""
            simpEq = currentEq.join("");
        }
        return simpEq;


    }
}