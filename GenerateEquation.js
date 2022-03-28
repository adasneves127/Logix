class TableGenerator{
    constructor(inputSize, outputSize){
        this.inSize = inputSize;
        this.outSize = outputSize
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
        
        //this.simplifyExpression()
    }

    simplifyExpression(){
        for(let setValues = 0; setValues < Math.pow(2, inputSize); setValues++){
            let values = new Array(inputSize)
            for(let z = 0; z < values.length; z++){
                values[z] = setValues % (0b1 << z) ? true : false;
            }
            console.log("test")
            for(let i = 0; i < this.equation.length; i++){
                let workingTerm = this.equation[i]
                
                let termCumulative = false;
                let currentSet = false;

                workingTerm = workingTerm.split("+")
                for(let i = 0; i < workingTerm.length; i++){
                    workingTerm[i].replace('(', '')
                    workingTerm[i].replace(')', '')
                    let terms = workingTerm[i].split("*")
                    terms[0].replace("(","")
                    terms[terms.length-1].replace(")","")
                    console.log(terms)
                    for(let j = 0; j < terms.length; terms++){
                        if(terms[j] == "'"){
                            currentSet = currentSet && false
                        }
                    }
                }
            }
        }
    }
}