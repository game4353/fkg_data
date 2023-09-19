import { masterData } from "./data.js";
import { Keywords } from "./tooltip.js";
class Skill {
    ID;
    name;
    typeID;
    arg1;
    arg2;
    arg3;
    desc;
    prob;
    probUp;
    constructor(data) {
        this.ID = parseInt(data.MasterBattleSkillID);
        this.name = data.strName;
        this.typeID = parseInt(data.Effect);
        this.arg1 = parseInt(data.Value1);
        this.arg2 = parseInt(data.Value2);
        this.arg3 = parseInt(data.Value3);
        this.desc = data.strExplanation;
        this.prob = parseInt(data.BootPossibility);
        this.probUp = parseInt(data.BootCoefficient);
    }
    trans() {
        let dmg1 = this.arg1 / 100;
        let dmg2 = this.arg2 / 100;
        let dmg3 = this.arg3 / 100;
        let admg2 = dmg1 + dmg2;
        let amount = this.arg2;
        switch (this.typeID) {
            case 101: return `敵単体に${dmg1}倍のダメージを与える`;
            case 103: return `敵単体に${dmg1}倍のダメージを与え、HPを吸収する`;
            case 1032: return `敵単体に${dmg1}倍のダメージを与え、HPを吸収する<br>※スキルの発動回数に応じて、指定のアビリティセットを呼び出す`;
            case 1035: return `敵単体に${dmg1}倍のダメージを与え、HPを大吸収する`;
            case 104: return `敵全体に${dmg1}倍のダメージを与える`;
            case 106: return `敵全体に${dmg1}倍のダメージを与え、HPを吸収する`;
            case 107: return `敵に${amount}回${dmg1}倍のダメージを与える`;
            case 108: return `敵${amount}体に${dmg1}倍のダメージを与える`;
            case 109: return `現在好感度に応じ敵単体に${dmg1}～${admg2}倍のダメージを与える`;
            case 110: return `現在好感度に応じ敵単体に${dmg1}～${admg2}倍のダメージを与え、HPを吸収する`;
            case 111: return `敵に${amount}回${dmg1}倍のダメージを与えた後、敵全体に${dmg3}倍のダメージを与える`;
            case 112: return `敵全体に、敵が残り1体の場合${dmg1}倍、2体の場合${dmg2}倍、\n3体の場合${dmg3}倍のダメージを与える`;
            case 113: return `${amount}回、ランダムに選択した敵に通常攻撃の${dmg1}倍のダメージを与える`;
            case 114: return `敵単体に${dmg1}倍のダメージを与える`;
            case 115: return `敵全体に最大HPの${dmg1}％のダメージを与える`;
            case 116: return `敵2体に、敵が残り1体の場合${dmg1}倍、2体の場合${dmg2}倍、\n3体の場合${dmg3}倍のダメージを与える`;
            case 117: return `敵全体に、敵が残り1体の場合${dmg1}倍、2体の場合${dmg2}倍、\n3体の場合${dmg3}倍のダメージを与え、HPを吸収する`;
            case 201: return `ランダムに選択した味方全員の体力をスキル使用者の攻撃力5%のさらに${dmg1}%だけ回復する`;
            case 202: return `味方全員の体力を${dmg1}だけ回復する`;
            default:
                console.log(`Unknown typeID: ${this.typeID}`);
                return `(${this.typeID}): ???`;
        }
    }
    toString() {
        return `【${this.name}】${this.prob}% → ${this.prob + 4 * this.probUp}%` +
            '<br>' + this.trans();
    }
}
export class Skills {
    static skills = {};
    static fromId(sid) {
        if (!Skills.skills[sid]) {
            let arr = masterData.masterCharacterSkill[sid];
            if (arr)
                Skills.skills[sid] = new Skill(arr);
        }
        return Skills.skills[sid];
    }
}
class Ability {
    ID;
    desc;
    constructor(data) {
        this.ID = parseInt(data.id);
        this.desc = data.description1;
    }
    toString() {
        return this.desc;
    }
    toDiv() {
        let desc = this.desc;
        let kws;
        while (kws = desc.match(/【(.+?)】/)) {
            desc += '\n' + Keywords.get(kws[1]);
            desc = desc.replace(kws[0], kws[1]);
        }
        desc = desc.replace(/<br>/g, '\n');
        let spans = this.desc.split('<br>');
        spans = spans.map(_ => `<span>${_}</span>`);
        let html = spans.join('');
        html = html.replace(/【(.+?)】/g, (_match, p1) => Keywords.getHtml(p1));
        return $("<div class='td ability'>").val(desc).html(html);
    }
}
export class Abilities {
    static abilities = {};
    static fromChara(cid) {
        if (!Abilities.abilities[cid]) {
            let data = masterData.masterCharacterLeaderSkillDescription[cid];
            if (data)
                Abilities.abilities[cid] = new Ability(data);
        }
        return Abilities.abilities[cid];
    }
}
