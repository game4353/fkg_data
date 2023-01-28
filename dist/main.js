import { Charas } from "./chara.js";
import { lazy } from "./lazy.js";
import { Table } from "./table.js";
Charas.init();
const title_width = [
    ['No', 30],
    ['ID', 80],
    ['icon', 80],
    ['evo', 30],
    ['rare', 30],
    ['prop', 30],
    ['name', 200],
    ['skillDesc', 400],
    ['ability', 500],
    ['source', 100],
    ['date', 100]
];
let arr = [title_width.map(r => r[0])];
for (let chara of Charas.getKnight()) {
    arr.push(arr[0].map(h => chara[h]));
}
const table = new Table(arr);
table.setWidth(title_width.map(r => r[1]));
$('#outer').empty().append(table.table);
lazy($(window));
