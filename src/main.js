"use strict";
const masterData = {};
const files = [
    'masterCharacter',
    'masterCharacterSkill',
    'masterCharacterLeaderSkillDescription',
    'masterKeywords'
];
function getData(tsvName) {
    return new Promise((res, rej) => {
        fetch(`master/${tsvName}.tsv`).then(res => {
            return res.text();
        }).then(data => {
            let dict = {};
            for (let r of data.split('\n')) {
                let arr = r.split('\t');
                dict[arr[0]] = arr;
            }
            res(dict);
        }).catch(e => {
            rej(e);
        });
    });
}
function lazy(parent) {
    const top = parent.scrollTop() || 0;
    const h = document.documentElement.clientHeight;
    $('.lazy:visible').each(function () {
        const y = $(this).parents('.tr')[0].offsetTop;
        if (y > top + h || y < top - 100)
            return;
        $(this).attr('src', $(this).attr('data-src')).removeClass('lazy');
    });
}
$(function ($) {
    Promise.all(files.map(name => getData(name))).then(arr => {
        for (let i in files)
            masterData[files[i]] = arr[i];
        main();
        lazy($(window));
    }).catch(e => {
        console.log(e);
    });
});
function main() {
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
        ['abilityDesc', 500],
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
}
