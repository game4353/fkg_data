"use strict";
function getIconPart(type, num = '') {
    return $("<div class='iconpart'>")
        .css("background-image", `url('asset/icon/${type}${num}.png')`);
}
function getIconImg(id) {
    return $("<div class='iconpart'>").append($("<img class='lazy'>")
        .attr("data-src", `asset/icon/${id}.png`));
}
function getIcon(id, rare, prop, heart) {
    const icon = $("<div class='icon'>");
    icon.append(getIconPart("bg", rare), getIconImg(id), getIconPart("frame", rare), getIconPart("prop", prop));
    if (heart)
        icon.append(getIconPart('heart').addClass('heart'));
    return icon;
}
class Chara {
    constructor(arr) {
        this.heart = false;
        this.base = this;
        this.ID = arr[0] * 1;
        this.family = arr[2] * 1;
        this.nation = arr[3] * 1;
        this.rare = arr[7] * 1;
        this.prop = arr[8] * 1;
        this.skillID = arr[13] * 1;
        this.hp = arr[16] * 1;
        this.ev2 = arr[33] * 1;
        this.isEv2 = arr[34] * 1;
        this.isKnight = arr[35] * 1;
        this.ref = arr[39] * 1;
        this.evo = arr[40] * 1;
        this.ev3 = arr[46] * 1;
        this.isEv3 = arr[47] * 1;
        this.canEv3 = arr[48] * 1;
        this.name = arr[49];
        this.noCG = arr[50] * 1;
        this.kana = arr[52];
        this.isEvent = arr[55] * 1;
        this.createDate = arr[56];
        this.ev4 = arr[60] * 1;
        this.isEv4 = arr[61] * 1;
        this.canEv4 = arr[62] * 1;
        if (this.ability = Abilities.fromChara(this.ID)) {
            this.abilityDesc = this.ability.toString();
        }
        if (this.skill = Skills.fromId(this.skillID)) {
            this.skillDesc = this.skill.toString();
        }
    }
    get No() {
        if (this.ref < 73)
            return this.ref;
        if (this.ref < 560)
            return this.ref - 36;
        if (this.ref < 564)
            return this.ref - 32;
        if (this.ref < 568)
            return 0;
        if (this.ref < 572)
            return this.ref - 44;
        if (this.ref > 1e5)
            return 0;
        return this.ref - 40;
    }
    get source() {
        if (this.base !== this)
            return this.base.source;
        if (this.rare === 6) {
            if (this.No === 235)
                return '報酬 &<br>クエスト';
            if (this.No === 461)
                return '配布';
            if ([495, 675, 738].includes(this.No))
                return '交換';
            if ([530, 668, 669, 759, 761, 827, 828, 829, 844, 845].includes(this.No))
                return 'コラボ';
            if ([623, 718, 746, 770, 784, 795, 821, 834, 839, 850].includes(this.No))
                return '限定';
            if ([634, 635, 636, 652, 658, 666, 717, 741, 756, 771, 785, 804, 811, 818, 825].includes(this.No))
                return '虹色メダル';
            if (this.No <= 632)
                return 'ガチャ &<br>虹色メダル';
            if (this.No <= 848)
                return 'ガチャ';
        }
        else if (this.rare === 5) {
            //if(this.isEvent) return '配布'
        }
        return '??';
    }
    get icon() {
        if (!this._icon)
            this._icon = getIcon(this.iconID, this.rare, this.prop, this.heart);
        return this._icon;
    }
}
class Charas {
    static init() {
        for (let id in masterData.masterCharacter) {
            Charas.charas[id] = new Chara(masterData.masterCharacter[id]);
        }
        for (let id in Charas.charas) {
            let chara = Charas.charas[id];
            if (chara.ev2)
                Charas.charas[chara.ev2].base = chara.base;
            if (chara.ev3)
                Charas.charas[chara.ev3].base = chara.base;
            if (chara.ev4)
                Charas.charas[chara.ev4].base = chara.base;
        }
        for (let id in Charas.charas) {
            let chara = Charas.charas[id];
            if (chara.evo != 1)
                continue;
            chara.iconID = chara.ID;
            let chara2 = Charas.charas[chara.ev2];
            if (!chara2)
                continue;
            let iid = chara2.iconID = chara2.ID;
            let chara3 = Charas.charas[chara2.ev3 || chara2.ev4];
            if (!chara3)
                continue;
            iid = chara3.iconID = chara3.noCG ? iid : chara3.ID;
            let chara4 = Charas.charas[chara3.ev3 || chara3.ev4];
            if (chara4)
                chara4.iconID = iid;
        }
    }
    static getKnight() {
        let arr = [];
        for (let id in Charas.charas) {
            let chara = Charas.charas[id];
            if (!chara.isKnight)
                continue;
            if (!chara.nation)
                continue;
            arr.push(chara);
        }
        return arr.sort((a, b) => a.ref - b.ref);
    }
}
Charas.charas = {};
