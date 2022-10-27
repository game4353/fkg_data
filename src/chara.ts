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

class Chara {
    // memo: search 'MasterCharacterTable' or '['masterdata']['MasterCharacterData']();'
    base
    ID
    family
    nation
    rare
    prop
    skillID
    hp
    ev2
    isEv2
    isKnight
    ref
    evo
    ev3
    isEv3
    canEv3
    name
    noCG
    kana
    isEvent
    createDate
    ev4
    isEv4
    canEv4
    ability
    abilityDesc
    skill
    skillDesc
    _icon?: JQuery<HTMLElement>
    heart = false
    iconID?: number
    constructor (arr: any[]) {
        this.base = this
        this.ID = arr[0x0]*1 // MasterCharacterID.value
        this.family = arr[0x2]*1 // BreedID
        this.nation = arr[0x3]*1 // NationId
        this.rare = arr[0x7]*1 // Rarity
        this.prop = arr[0x8]*1 // Material
        this.skillID = arr[0x13]*1 // BattleSkillID
        this.hp = arr[0x16]*1 // HPisLV1
        this.ev2 = arr[0x27]*1 // EvolveCharacterId
        this.isEv2 = arr[0x28]*1 // MaxEvolveFlag
        this.isKnight = arr[0x29]*1 // PartySetEnableFlag
        this.ref = arr[0x2d]*1 // MasterCharacterBookID
        this.evo = arr[0x2e]*1 // MasterCharacterBookOrderNum
        this.ev3 = arr[0x34]*1 // FloweringCharacterID
        this.isEv3 = arr[0x35]*1 // MaxFloweringFlag
        this.canEv3 = arr[0x36]*1 // FloweringEnableFlag
        this.name = arr[0x37] // Fullname
        this.noCG = arr[0x38]*1 // OnlyPerformanceFloweringEnableFlag
        this.kana = arr[0x3a] // readingCharacterName
        this.isEvent = arr[0x3d]*1 // isEventCharacter
        this.createDate = arr[0x3e] // createDate
        this.ev4 = arr[0x42]*1 // rarityEvolutionTypeId?
        this.isEv4 = arr[0x43]*1 // MaxRarityGlowFlag
        this.canEv4 = arr[0x44]*1 // RarityGlowEnableFlag

        if (this.ability = Abilities.fromChara(this.ID)) {
            this.abilityDesc = this.ability.toString()
        }
        if (this.skill = Skills.fromId(this.skillID)) {
            this.skillDesc = this.skill.toString()
        }
    }
    get No () {
        if (this.ref < 73) return this.ref
        if (this.ref < 560) return this.ref - 36
        if (this.ref < 564) return this.ref - 32
        if (this.ref < 568) return 0
        if (this.ref < 572) return this.ref - 44
        if (this.ref > 1e5) return 0
        return this.ref - 40
    }
    get source (): string {
        if (this.base !== this) return this.base.source
        if (this.rare === 6) {
            if (this.No === 235) return '報酬 &<br>クエスト'
            if (this.No === 461) return '配布'
            if ([495,675,738].includes(this.No)) return '交換'
            if ([530,668,669,759,761,827,828,829,844,845].includes(this.No)) return 'コラボ'
            if ([623,718,746,770,784,795,821,834,839,850,854].includes(this.No)) return '限定'
            if ([634,635,636,652,658,666,717,741,756,771,785,804,811,818,825].includes(this.No)) return '虹色メダル'
            if (this.No <= 632) return 'ガチャ &<br>虹色メダル'
            if (this.No <= 855) return 'ガチャ'
        } else if (this.rare === 5) {
            //if(this.isEvent) return '配布'
        }
        return '??'
    }
    get icon () {
        if (!this._icon) this._icon = getIcon(this.iconID!, this.rare, this.prop, this.heart)
        return this._icon
    }
    get date () {
        return this.createDate.match(/\d+-\d+-\d+/)[0]
    }

}

class Charas {
    static charas: {[id: string]: Chara} = {}
    static init () {        
        for (let id in masterData.masterCharacter) {
            Charas.charas[id] = new Chara(masterData.masterCharacter[id])
        }
        for (let id in Charas.charas) {
            let chara = Charas.charas[id]
            if (chara.ev2) Charas.charas[chara.ev2].base = chara.base
            if (chara.ev3) Charas.charas[chara.ev3].base = chara.base
            if (chara.ev4) Charas.charas[chara.ev4].base = chara.base
        }
        for (let id in Charas.charas) {
            let chara = Charas.charas[id]
            if (chara.evo != 1) continue
            chara.iconID = chara.ID
            let chara2 = Charas.charas[chara.ev2]
            if (!chara2) continue
            let iid = chara2.iconID = chara2.ID
            let chara3 = Charas.charas[chara2.ev3 || chara2.ev4]
            if (!chara3) continue
            iid = chara3.iconID = chara3.noCG? iid: chara3.ID
            let chara4 = Charas.charas[chara3.ev3 || chara3.ev4]
            if (chara4) chara4.iconID = iid
        }
    }
    static getKnight () {
        let arr = []        
        for (let id in Charas.charas) {
            let chara = Charas.charas[id]            
            if (!chara.isKnight) continue
            if (!chara.nation) continue
            arr.push(chara)
        }
        return arr.sort((a, b) => a.ref - b.ref)
    }
}