const keywords = {};
for(let o of masterData.masterKeywords)
    keywords[o.name] = o.desc;

function tip(text){
    return tooltip(text, keywords[text]).get(0).outerHTML;
}
function tooltip(text, tiptext){
    let div = $("<span class='tooltip'>").text(text);
    let span = $("<span class='tooltiptext'>").html(tiptext);
    return div.append(span);
}
function _fyjtd(content, isAbility){
    if(isAbility){
        let abi = content;
        abi = abi.split("<br>");
        abi = abi.map(_ => `<span>${_}</span>`);
        abi = abi.join("");
        abi = abi.replace(/【(.+?)】/g, (match, p1) => tip(p1));
        content = content.replace(/【(.+?)】/g, (match, p1) => (p1));
        return $("<div class='td'>").val(content).html(abi);
    }
    return $("<div class='td'>").val(content).html(content);
}
