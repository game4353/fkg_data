
class Skill{
    constructor(arr){
        this.ID = arr[0]*1
        this.name = arr[1]
        this.typeID = arr[2]*1
        this.arg1 = arr[3]*1
        this.arg2 = arr[4]*1
        this.arg3 = arr[5]*1
        this.desc = arr[6]
        this.prob = arr[7]*1
        this.probUp = arr[8]*1
    }
    toString(){
        return `【${this.name}】${this.prob}%→${this.prob + 4*this.probUp}%` + 
        '<br>' + Skills.trans(this.typeID, this.arg1, this.arg2, this.arg3)
    }
}
class Skills{
    static skills = {}
    static fromId(sid){
        if (!Skills.skills[sid]) {
            let arr = masterData.masterCharacterSkill[sid]
            if (arr) Skills.skills[sid] = new Skill(arr)
        }
        return Skills.skills[sid]
    }
    static trans(typeID, arg1, arg2, arg3) {
        let dmg1 = arg1 / 100
        let dmg2 = arg2 / 100
        let dmg3 = arg3 / 100
        let admg2 = dmg1 + dmg2
        switch (typeID) { 
            case 101: return `敵単体に${dmg1}倍のダメージを与える`
            case 103: return `敵単体に${dmg1}倍のダメージを与え、HPを吸収する`
            case 104: return `敵全体に${dmg1}倍のダメージを与える`
            case 106: return `敵全体に${dmg1}倍のダメージを与え、HPを吸収する`
            case 107: return `敵に${arg2}回${dmg1}倍のダメージを与える`
            case 108: return `敵${arg2}体に${dmg1}倍のダメージを与える`
            case 109: return `現在好感度に応じ敵単体に${dmg1}～${admg2}倍のダメージを与える`
            case 110: return `現在好感度に応じ敵単体に${dmg1}～${admg2}倍のダメージを与え、HPを吸収する`
            case 111: return `敵に${arg2}回${dmg1}倍のダメージを与えた後、敵全体に${dmg3}倍のダメージを与える`
            case 112: return `敵全体に、敵が残り1体の場合${dmg1}倍、2体の場合${dmg2}倍、\n3体の場合${dmg3}倍のダメージを与える`
            case 113: return `${arg2}回、ランダムに選択した敵に通常攻撃の${dmg1}倍のダメージを与える`
            case 114: return `敵単体に${dmg1}倍のダメージを与える`
            case 115: return `敵全体に最大HPの${dmg1}％のダメージを与える`
            case 116: return `敵2体に、敵が残り1体の場合${dmg1}倍、2体の場合${dmg2}倍、\n3体の場合${dmg3}倍のダメージを与える`
            case 117: return `敵全体に、敵が残り1体の場合${dmg1}倍、2体の場合${dmg2}倍、\n3体の場合${dmg3}倍のダメージを与え、HPを吸収する`
            case 201: return `ランダムに選択した味方全員の体力をスキル使用者の攻撃力5%のさらに${dmg1}%だけ回復する`
            case 202: return `味方全員の体力を${dmg1}だけ回復する`
            default:
                console.log(`Unknown typeID: ${typeID}`)
                return `(${typeID}): ???`
        }
    }
}

class Ability{
    constructor(arr){
        this.ID = arr[0]
        this.desc = arr[3]
    }
    toString(){
        return this.desc
    }
}

class Abilities{
    static abilities = {}
    static fromChara (cid) {
        if (!Abilities.abilities[cid]) {
            let arr = masterData.masterCharacterLeaderSkillDescription[cid]
            if (arr) Abilities.abilities[cid] = new Ability(arr)
        }
        return Abilities.abilities[cid]
    }
}