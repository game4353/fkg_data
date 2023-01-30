const premium = await $.getJSON("asset/data/premium.json")

import { masterData } from './data.js'
import { Data } from './manual/header.js'
import { Abilities, Skills } from './skill.js'

type Parts = 'bg' | 'frame' | 'prop' | 'heart'

function getIconPart (type: Parts, num: number | '' = '') {
    return $("<div class='iconpart'>")
        .css("background-image", `url('asset/icon/${type}${num}.png')`)
}
function getIconImg (id: number) {
    return $("<div class='iconpart'>").append(
        $("<img class='lazy'>")
            .attr("data-src", `asset/icon/${id}.png`)
    )
}
function getIcon (id: number, rare: number, prop: number, heart: boolean) {
    const icon = $("<div class='icon'>")
    icon.append(
        getIconPart("bg", rare),
        getIconImg(id),
        getIconPart("frame", rare),
        getIconPart("prop", prop)
    )
    if (heart) icon.append(getIconPart('heart').addClass('heart'))
    return icon
}

export class Chara {
    base
    data
    ID
    family
    nation
    skillID
    skillID2
    hp
    ev2
    isEv2
    isKnight
    ev3
    isEv3
    canEv3
    noCG
    kana
    createDate
    ev4
    isEv4
    canEv4
    ability
    abilityDesc
    skill
    skillDesc
    _icon?: JQuery<HTMLElement>
    iconID?: number
    constructor (data: Data<"masterCharacter">) {
        this.base = this
        this.data = data
        this.ID = parseInt(data.MasterCharacterID)
        this.family = parseInt(data.BreedID)
        this.nation = parseInt(data.NationId)
        this.skillID = parseInt(data.BattleSkillID)
        this.skillID2 = parseInt(data.BattleSkillID2) // ???
        this.hp = parseInt(data.HPisLV1)
        this.ev2 = parseInt(data.EvolveCharacterId)
        this.isEv2 = parseInt(data.MaxEvolveFlag)
        this.isKnight = parseInt(data.PartySetEnableFlag)
        this.ev3 = parseInt(data.FloweringCharacterID)
        this.isEv3 = parseInt(data.MaxFloweringFlag)
        this.canEv3 = parseInt(data.FloweringEnableFlag)
        this.noCG = parseInt(data.OnlyPerformanceFloweringEnableFlag)
        this.kana = data.readingCharacterName
        this.createDate = data.createDate
        this.ev4 = parseInt(data.rarityEvolutionTypeId)
        this.isEv4 = parseInt(data.MaxRarityGlowFlag)
        this.canEv4 = parseInt(data.RarityGlowEnableFlag)

        if (this.ability = Abilities.fromChara(this.ID)) {
            this.abilityDesc = this.ability.toString()
        }
        if (this.skill = Skills.fromId(this.skillID)) {
            this.skillDesc = this.skill.toString()
        }
    }
    get isEvent () { return this.data.isEventCharacter === '1' }
    get name () { return this.data.Fullname }
    get evo () { return parseInt(this.data.MasterCharacterBookOrderNum) }
    get ref () { return parseInt(this.data.MasterCharacterBookID) }
    get No () {
        const num = parseInt(masterData.masterCharacterBook[this.ref]._bookNum)
        if (num < 305) return num
        if (num < 525) return num - 1
        if (num < 541) return num - 9
        return num - 13
    }
    get source (): string {
        if (this.base !== this) return this.base.source
        if (this.rare === 6) {
            if (this.No === 235) return '報酬 &<br>クエスト'
            if ([461, 914, 925].includes(this.No)) return '配布'
            if ([495, 675, 738].includes(this.No)) return '交換'
            if ([530, 668, 669, 759, 761, 827, 828, 829, 844, 845, 902, 903, 904].includes(this.No)) return 'コラボ'
            if ([623, 718, 746, 770, 784, 795, 821, 834, 839, 850, 854, 870, 876, 881, 899, 908, 928].includes(this.No)) return '限定'
            if ([634, 635, 636, 652, 658, 666, 717, 741, 756, 771, 785, 804, 811, 818, 825, 874, 897, 919].includes(this.No)) return '虹色メダル'
            if (this.No <= 632) return 'ガチャ &<br>虹色メダル'
            if (this.No <= 855) return 'ガチャ'
        } else if (this.rare === 5) {
            if ([171, 206, 248, 280, 322, 452].includes(this.No)) return '生放送'
            if ([528, 529, 667, 758].includes(this.No)) return 'コラボ'
            if ([133, 173, 182, 215, 224, 253, 293, 294, 304, 309, 335, 373, 392, 406, 443, 501].includes(this.No)) return '特典'
            if (this.isEvent) return '配布'
        } else if (this.rare === 2) {
            if (this.ref < 600) return 'ガチャ'
        }
        if (premium.includes(this.base.ID)) return 'ガチャ'
        return '??'
    }
    get rare () { return parseInt(this.data.Rarity) }
    get prop () { return parseInt(this.data.Material) }
    get heart () { return masterData.masterCharacterBook[this.ref]._heartFlag === '1' }
    get icon () {
        if (!this._icon) this._icon = getIcon(this.iconID!, this.rare, this.prop, this.heart)
        return this._icon
    }
    get date () { return this.data.createDate.match(/\d+-\d+-\d+/)?.at(0) }

}

export class Charas {
    static charas: { [id: string]: Chara } = {}
    static init () {
        for (const id in masterData.masterCharacter) {
            Charas.charas[id] = new Chara(masterData.masterCharacter[id])
        }
        // assign 'base'
        for (const id in Charas.charas) {
            const chara = Charas.charas[id]
            const data = chara.data
            const ev2 = data.EvolveCharacterId
            if (ev2 !== '0') Charas.charas[ev2].base = chara.base
            const ev3 = data.FloweringCharacterID
            if (ev3 !== '0') Charas.charas[ev3].base = chara.base
            const ev4 = data.rarityEvolutionTypeId
            if (ev4 !== '0') Charas.charas[ev4].base = chara.base
        }
        // assign 'iconID'
        for (const id in Charas.charas) {
            let chara = Charas.charas[id]
            if (chara.base != chara) continue
            chara.iconID = chara.ID
            // ev2
            chara = Charas.charas[chara.data.EvolveCharacterId]
            if (chara == null) continue // problematic if there is id=0 
            let iid = chara.iconID = chara.ID
            // ev3
            chara = Charas.charas[chara.data.FloweringCharacterID] 
                ?? Charas.charas[chara.data.rarityEvolutionTypeId]
            if (chara == null) continue // problematic if there is id=0 
            const noCG = chara.data.OnlyPerformanceFloweringEnableFlag === '1'
            iid = chara.iconID = noCG ? iid : chara.ID
            // ev4
            chara = Charas.charas[chara.data.FloweringCharacterID] 
                ?? Charas.charas[chara.data.rarityEvolutionTypeId]
            if (chara == null) continue // problematic if there is id=0 
            chara.iconID = iid
        }
    }
    static getKnight () {
        let arr = []
        for (let id in Charas.charas) {
            const data = Charas.charas[id].data
            if (data.PartySetEnableFlag === '0') continue
            if (data.NationId === '0') continue
            if (Charas.charas[id].No > 1e5) continue
            arr.push(Charas.charas[id])
        }
        return arr.sort((a, b) => a.No - b.No)
    }
}