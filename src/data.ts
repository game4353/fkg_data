import { DataName } from "."


export enum E_MasterCharacterData {
  MasterCharacterID = 0,
  ItemID = 1,
  BreedID = 2,
  NationId = 3,
  MasterCharacterNum = 4,
  Nickname = 5,
  SelfIntroduction = 6,
  Rarity = 7,
  Material = 8,
  MasterGiftGroupID = 9,
  AbilityID1 = 10,
  AbilityID2 = 11,
  AbilityID3 = 12,
  AbilityID4 = 13,
  AbilityID5 = 14,
  AbilityID6 = 15,
  AbilityID7 = 16,
  AbilityID8 = 17,
  AbilityID9 = 18,
  BattleSkillID = 19,
  BattleSkillID2 = 20,
  HPisLV1 = 22,
  HPisLV99 = 23,
  OffenseisLV1 = 24,
  OffenseisLV99 = 25,
  DefenseisLV1 = 26,
  DefenseisLV99 = 27,
  SpeedisLV1 = 28,
  SpeedisLV99 = 29,
  maxHitPointBonus = 30,
  maxAttackBonus = 31,
  maxDefenseBonus = 32,
  secondMaxHitPointBonus = 33,
  secondMaxAttackBonus = 34,
  secondMaxDefenseBonus = 35,
  SaleGameMoney = 36,
  MasterCharacterLVGroup = 37,
  MasterCharacterSecondLVGroup = 38,
  EvolveCharacterId = 39,
  MaxEvolveFlag = 40,
  PartySetEnableFlag = 41,
  FavorabilityBonusHitPoint = 42,
  FavorabilityBonusOffense = 43,
  FavorabilityBonusDefense = 44,
  MasterCharacterBookID = 45,
  MasterCharacterBookOrderNum = 46,
  FavorabilityEnable = 47,
  favorabilitySecondBonusHitPoint = 48,
  favorabilitySecondBonusOffense = 49,
  favorabilitySecondBonusDefense = 50,
  favorabilitySecondEnableFlag = 51,
  FloweringCharacterID = 52,
  MaxFloweringFlag = 53,
  FloweringEnableFlag = 54,
  Fullname = 55,
  OnlyPerformanceFloweringEnableFlag = 56,
  dressName = 57,
  readingCharacterName = 58,
  samePersonId = 59,
  isImportant = 60,
  isEventCharacter = 61,
  createDate = 62,
  swfVersion = 65,
  rarityEvolutionTypeId = 66,
  MaxRarityGlowFlag = 67,
  RarityGlowEnableFlag = 68,
  publicationDate = 69,
}
type Data = { [id: string]: string[] }

const masterData: {[file in DataName]?: Data} = {}

const files: DataName[] = [
    'masterCharacter',
    'masterCharacterSkill',
    'masterCharacterLeaderSkillDescription',
    'masterKeywords'
]

function getData (tsvName: string): Promise<Data> {
  return new Promise((res, rej) => {
      fetch(`master/${tsvName}.tsv`).then( res => {
          return res.text()
      }).then(data => {
          let dict: Data = {}
          for(let r of data.split('\n')){
              let arr = r.split('\t')
              dict[arr[0]] = arr
          }
          res(dict)
      }).catch(e => {
          rej(e)
      })
  })
}

await Promise.all(files.map(async n => {
  const v = await getData(n)
  masterData[n] = v
}))

export { masterData }