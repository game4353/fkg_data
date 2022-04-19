function ref2no(ref){
    if (ref < 73) return ref
    if (ref < 560) return ref - 36
    if (ref < 564) return ref - 32
    if (ref < 568) return 0
    if (ref < 572) return ref - 44
    if (ref > 1e5) return 0
    return ref - 40
}
function getIconPart(type, num = ''){
    return $("<div class='iconpart'>")
    .css("background-image", `url('asset/icon/${type}${num}.png')`) 
}
function getIconImg(id){
    return $("<div class='iconpart'>").append(
        $("<img class='lazy'>")
        .attr("data-src", `asset/icon/${id}.png`)
    )
}
function getIcon(id, rare, prop, heart){
    const icon = $("<div class='icon'>")
    icon.append(
        getIconPart("bg", rare), 
        getIconImg(id),
        getIconPart("frame", rare),
        getIconPart("prop", prop)
    )
    if(heart) icon.append(getIconPart('heart').addClass('heart'))
    return icon
}

class Chara{
    constructor(arr){
        this.ID = arr[0]*1
        this.family = arr[2]*1
        this.nation = arr[3]*1
        this.rare = arr[7]*1
        this.prop = arr[8]*1
        this.skillID = arr[13]*1
        this.hp = arr[16]*1
        this.ev2 = arr[33]*1
        this.isEv2 = arr[34]*1
        this.isKnight = arr[35]*1
        this.ref = arr[39]*1
        this.evo = arr[40]*1
        this.ev3 = arr[46]*1
        this.isEv3 = arr[47]*1
        this.canEv3 = arr[48]*1
        this.name = arr[49]
        this.noCG = arr[50]*1
        this.kana = arr[52]
        this.ev4 = arr[60]*1
        this.isEv4 = arr[61]*1
        this.canEv4 = arr[62]*1

        this.No = ref2no(this.ref)
        if (this.ability = Abilities.fromChara(this.ID)) {
            this.abilityDesc = this.ability.toString()
        }
        if (this.skill = Skills.fromId(this.skillID)) {
            this.skillDesc = this.skill.toString()
        }
    }
    get icon(){
        if (!this._icon) this._icon = getIcon(this.iconID, this.rare, this.prop)
        return this._icon
    }

}

class Charas{
    static charas = {}
    static init () {        
        for (let id in masterData.masterCharacter) {
            Charas.charas[id] = new Chara(masterData.masterCharacter[id])
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