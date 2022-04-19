
function main() {
    Charas.init()
    let arr = [["No", "ID", "icon", "evo", "rare", "name", "skillDesc", "abilityDesc"]]
    for(let chara of Charas.getKnight()){
        arr.push(arr[0].map(h => chara[h]))
    }
    const table = new Table(arr)
    table.setWidth([30, 80, 80, 30, 30, 200, 400, 500])
    $("#outer").empty().append(table.table)
}
