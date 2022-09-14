class table{
    inputSize: number;
    outputSize: number;
    tableDef: object;
    headerDef: object;
    table: HTMLElement;

    constructor (inSize: number, outSize: number) {
        this.table = document.createElement("table");
        this.table.setAttribute("id", "TruthTable");
        document.getElementById("tableDiv")?.appendChild(this.table);
        this.addRows()
    }

    addRows(){
        this.tableDef["Header"] = {};
    }
}