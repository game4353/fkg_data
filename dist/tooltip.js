import { masterData } from "./data.js";
export class Keywords {
    static dict;
    static init() {
        Keywords.dict = {};
        for (let i in masterData.masterKeywords) {
            const kw = masterData.masterKeywords[i];
            const name = kw._key;
            const desc = kw._description;
            Keywords.dict[name] = desc;
        }
    }
    static get(kw) {
        if (Keywords.dict == undefined)
            Keywords.init();
        if (Keywords.dict[kw])
            return Keywords.dict[kw];
        if (Keywords.dict[`"${kw}"`])
            return Keywords.dict[`"${kw}"`];
        console.log(`missing "${kw}" in keywords.`);
        return '';
    }
    static getHtml(kw) {
        let div = $("<span class='tooltip'>").text(kw);
        let span = $("<span class='tooltiptext'>").html(Keywords.get(kw));
        div.append(span);
        return div.get(0).outerHTML;
    }
}
