export type DataName = 
  'masterCharacter' |
  'masterCharacterSkill' |
  'masterCharacterLeaderSkillDescription' |
  'masterKeywords'

export namespace Raw {
  export interface Chara {
    MasterCharacterID: number
    ItemID: number
    BreedID: number
    NationId: number
    MasterCharacterNum: number
    Nickname: string
    SelfIntroduction: string
    Rarity: number
    Material: number
    MasterGiftGroupID: number
    AbilityID1: number
    AbilityID2: number
    AbilityID3: number
    AbilityID4: number
    AbilityID5: number
    AbilityID6: number
    AbilityID7: number
    AbilityID8: number
    AbilityID9: number
    BattleSkillID: number
    BattleSkillID2: number
    HPisLV1: number
    HPisLV99: number
    OffenseisLV1: number
    OffenseisLV99: number
    DefenseisLV1: number
    DefenseisLV99: number
    SpeedisLV1: number
    SpeedisLV99: number
    maxHitPointBonus: number
    maxAttackBonus: number
    maxDefenseBonus: number
    secondMaxHitPointBonus: number
    secondMaxAttackBonus: number
    secondMaxDefenseBonus: number
    SaleGameMoney: number
    MasterCharacterLVGroup: number
    MasterCharacterSecondLVGroup: number
    EvolveCharacterId: number
    MaxEvolveFlag: boolean
    PartySetEnableFlag: number
    FavorabilityBonusHitPoint: number
    FavorabilityBonusOffense: number
    FavorabilityBonusDefense: number
    MasterCharacterBookID: number
    MasterCharacterBookOrderNum: number
    FavorabilityEnable: boolean
    favorabilitySecondBonusHitPoint: number
    favorabilitySecondBonusOffense: number
    favorabilitySecondBonusDefense: number
    favorabilitySecondEnableFlag: boolean
    FloweringCharacterID: number
    MaxFloweringFlag: boolean
    FloweringEnableFlag: boolean
    Fullname: string
    OnlyPerformanceFloweringEnableFlag: boolean
    dressName: string
    readingCharacterName: string
    samePersonId: number
    isImportant: boolean
    isEventCharacter: boolean
    createDate: string
    swfVersion: string
    rarityEvolutionTypeId: number
    MaxRarityGlowFlag: boolean
    RarityGlowEnableFlag: boolean
    publicationDate: string
  }
}