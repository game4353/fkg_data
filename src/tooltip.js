"use strict";
class Keywords {
    static init() {
        Keywords.dict = {};
        for (let i in masterData.masterKeywords) {
            const kw = masterData.masterKeywords[i];
            const name = kw[1];
            const desc = kw[4];
            Keywords.dict[name] = desc;
        }
    }
    static get(kw) {
        if (!Keywords.dict)
            Keywords.init();
        return Keywords.dict[kw];
    }
    static getHtml(kw) {
        let div = $("<span class='tooltip'>").text(kw);
        let span = $("<span class='tooltiptext'>").html(Keywords.get(kw));
        div.append(span);
        return div.get(0).outerHTML;
    }
}
