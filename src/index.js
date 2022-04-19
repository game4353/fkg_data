const masterData = {}
const files = [
    'masterCharacter',
    'masterCharacterSkill',
    'masterCharacterLeaderSkillDescription',
    'masterKeywords'
]

function getData(tsvName){
    return new Promise((res, rej) => {
        fetch(`master/${tsvName}.tsv`).then( res => {
            return res.text()
        }).then(data => {
            let dict = {}
            for(let r of data.split('\n')){
                r = r.split('\t')
                dict[r[0]] = r
            }
            res(dict)
        }).catch(e => {
            rej(e)
        })
    })
}

function lazy(parent){
    const top = parent.scrollTop()
    const h = document.documentElement.clientHeight
    $('.lazy:visible').each(function(){
        const y = $(this).parents('.tr')[0].offsetTop
        if (y > top + h || y < top - 100) return
        $(this).attr('src', $(this).attr('data-src')).removeClass('lazy')
    })
}

$(function($) {
    Promise.all(files.map(name => getData(name))).then(arr => {
        for(let i in files) masterData[files[i]] = arr[i]
        main()
        lazy($(window))
    }).catch(e => {
        console.log(e)
    })
})