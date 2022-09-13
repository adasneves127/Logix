function loadAnd(P, Q, O){

    let in1, in2, out
    for(let i = 0; i < inputSize; i++){
        if(document.getElementById(`Header${i}`).innerHTML == P){
            in1 = i;
        }
        if(document.getElementById(`Header${i}`).innerHTML == Q){
            in2 = i;
        }
    }

    for(let i = inputSize; i < inputSize + outputSize; i++){
                if(document.getElementById(`Header${i}`).innerHTML == O){
            out = i - inputSize;
        }
    }

    for(let height = 0; height < Math.pow(2, inputSize); height++){
        i = parseInt(document.getElementById(`Input${in1 + (inputSize * height)}`).innerText)
        j = parseInt(document.getElementById(`Input${in2 + (inputSize * height)}`).innerText)


        k = document.getElementById(`Output${out + (outputSize * (height))}`)

        
        k.innerText = (i & j)
    }
}
function loadOr(P, Q, O){
    let in1, in2, out
    for(let i = 0; i < inputSize; i++){
        if(document.getElementById(`Header${i}`).innerHTML == P){
            in1 = i;
        }
        if(document.getElementById(`Header${i}`).innerHTML == Q){
            in2 = i;
        }
    }

    for(let i = inputSize; i < inputSize + outputSize; i++){
                if(document.getElementById(`Header${i}`).innerHTML == O){
            out = i - inputSize;
        }
    }

    for(let height = 0; height < Math.pow(2, inputSize); height++){
        i = parseInt(document.getElementById(`Input${in1 + (inputSize * height)}`).innerText)
        j = parseInt(document.getElementById(`Input${in2 + (inputSize * height)}`).innerText)


        k = document.getElementById(`Output${out + (outputSize * (height))}`)

        
        k.innerText = (i | j)
    }
    
}
function loadNot(P, O){
    let in1, out
    for(let i = 0; i < inputSize; i++){
        if(document.getElementById(`Header${i}`).innerHTML == P){
            in1 = i;
        }
    }

    for(let i = inputSize; i < inputSize + outputSize; i++){
                if(document.getElementById(`Header${i}`).innerHTML == O){
            out = i - inputSize;
        }
    }

    for(let height = 0; height < Math.pow(2, inputSize); height++){
        i = parseInt(document.getElementById(`Input${in1 + (inputSize * height)}`).innerText)
        


        k = document.getElementById(`Output${out + (outputSize * (height))}`)

        
        k.innerText = Math.abs(1-i)
    }
    
}
function loadImp1(P, Q, O){
    let in1, in2, out
    for(let i = 0; i < inputSize; i++){
        if(document.getElementById(`Header${i}`).innerHTML == P){
            in1 = i;
        }
        if(document.getElementById(`Header${i}`).innerHTML == Q){
            in2 = i;
        }
    }

    for(let i = inputSize; i < inputSize + outputSize; i++){
                if(document.getElementById(`Header${i}`).innerHTML == O){
            out = i - inputSize;
        }
    }

    for(let height = 0; height < Math.pow(2, inputSize); height++){
        i = parseInt(document.getElementById(`Input${in1 + (inputSize * height)}`).innerText)
        j = parseInt(document.getElementById(`Input${in2 + (inputSize * height)}`).innerText)


        k = document.getElementById(`Output${out + (outputSize * (height))}`)

        
        k.innerText = Math.abs(1-i) | j
    }
}
function loadXor(P, Q, O){
    let in1, in2, out
    for(let i = 0; i < inputSize; i++){
        if(document.getElementById(`Header${i}`).innerHTML == P){
            in1 = i;
        }
        if(document.getElementById(`Header${i}`).innerHTML == Q){
            in2 = i;
        }
    }

    for(let i = inputSize; i < inputSize + outputSize; i++){
                if(document.getElementById(`Header${i}`).innerHTML == O){
            out = i - inputSize;
        }
    }

    for(let height = 0; height < Math.pow(2, inputSize); height++){
        i = parseInt(document.getElementById(`Input${in1 + (inputSize * height)}`).innerText)
        j = parseInt(document.getElementById(`Input${in2 + (inputSize * height)}`).innerText)


        k = document.getElementById(`Output${out + (outputSize * (height))}`)

        
        k.innerText = (i ^ j)
    }
    
}
function loadImp2(P, Q, O){
    let in1, in2, out
    for(let i = 0; i < inputSize; i++){
        if(document.getElementById(`Header${i}`).innerHTML == P){
            in1 = i;
        }
        if(document.getElementById(`Header${i}`).innerHTML == Q){
            in2 = i;
        }
    }

    for(let i = inputSize; i < inputSize + outputSize; i++){
                if(document.getElementById(`Header${i}`).innerHTML == O){
            out = i - inputSize;
        }
    }

    for(let height = 0; height < Math.pow(2, inputSize); height++){
        i = parseInt(document.getElementById(`Input${in1 + (inputSize * height)}`).innerText)
        j = parseInt(document.getElementById(`Input${in2 + (inputSize * height)}`).innerText)


        k = document.getElementById(`Output${out + (outputSize * (height))}`)

        
        k.innerText = Math.abs(1-(i^j))
    }
}