function parseEq(Eq, values){
    Eq = Eq.replace(/ /g, "");
    let output = []
    let equation = Eq.split("=")[1];
    let outputName = Eq.split("=")[0];
    let operations = ["^", "->", "v", "~", "<->"];
    operations.forEach(operation => {
        if(equation.includes(operation)){
            
        }
    })
}