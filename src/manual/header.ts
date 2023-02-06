// https://dugrqaqinbtcq.cloudfront.net/product/ynnFQcGDLfaUcGhp/index.js

export const IDHEADERS: Record<DataName, string> = {
  masterCharacterLeaderSkillDescription: 'id',
  masterCharacterSkill: 'MasterBattleSkillID',
  masterKeywords: '_id',
  masterCharacterBook: '_bookId',
  masterCharacter: 'MasterCharacterID',
  masterCharacterEquipment: 'MasterEquipID',
  masterFlowerMemory: 'id',
  masterFlowerMemorysAbilitys: 'id',
  masterAbility: 'id',
  masterFlowerMemoryGrowthType: 'id',
  masterFlowerMemoryMaterial: 'id',
  masterFlowerMemoryRarity: 'id'
} as const

export const HEADERS = {
  // search "'masterCharacterLeaderSkillDescription'" and go down
  masterCharacterLeaderSkillDescription: [
    'id',
    'characterId',
    'iconType1',
    'description1',
    'iconType2',
    'description2',
    'iconType3',
    'description3',
    'iconType4',
    'description4'
  ],
  // search "masterCharacterSkill" and go down  
  masterCharacterSkill: [
    'MasterBattleSkillID',
    'strName',
    'Effect',
    'Value1',
    'Value2',
    'Value3',
    'strExplanation',
    'BootPossibility',
    'BootCoefficient',
    'BootMagnification',
    'MarriageDamageBonus',
    '0xb', //
    '0xc', //
    'Value4'
  ],
  // search "['MasterKeywordsData']=" and go up find 'parse'
  masterKeywords: [
    '_id',
    '_key',
    '_color',
    '_title',
    '_description'
  ],
  // search "['MasterCharacterBookData']" and go up find 'parse'
  masterCharacterBook: [
    '_enableFlag',
    '_enableValue',
    '_bookId',
    '_name',
    '_bookNum',
    '_languageOfFlower',
    '_secondSceneOpenFlag',
    '_secondDateSceneOpenFlag',
    '_heartFlag',
    '0x9', // timestamp
    '0xa', // timestamp
    '_deleteFlag',
    '0xc', // empty, timestamp
    '0xd' // timestamp
  ],
  // search "['MasterCharacterData']();" and go down
  masterCharacter: [
    'MasterCharacterID',
    'ItemID',
    'BreedID',
    'NationId',
    'MasterCharacterNum',
    'Nickname',
    'SelfIntroduction',
    'Rarity',
    'Material',
    'MasterGiftGroupID',
    'AbilityID1',
    'AbilityID2',
    'AbilityID3',
    'AbilityID4',
    'AbilityID5',
    'AbilityID6',
    'AbilityID7',
    'AbilityID8',
    'AbilityID9',
    'BattleSkillID',
    'BattleSkillID2',
    '0x15', // 
    'HPisLV1',
    'HPisLV99',
    'OffenseisLV1',
    'OffenseisLV99',
    'DefenseisLV1',
    'DefenseisLV99',
    'SpeedisLV1',
    'SpeedisLV99',
    'maxHitPointBonus',
    'maxAttackBonus',
    'maxDefenseBonus',
    'secondMaxHitPointBonus',
    'secondMaxAttackBonus',
    'secondMaxDefenseBonus',
    'SaleGameMoney',
    'MasterCharacterLVGroup',
    'MasterCharacterSecondLVGroup',
    'EvolveCharacterId',
    'MaxEvolveFlag',
    'PartySetEnableFlag',
    'FavorabilityBonusHitPoint',
    'FavorabilityBonusOffense',
    'FavorabilityBonusDefense',
    'MasterCharacterBookID',
    'MasterCharacterBookOrderNum',
    'FavorabilityEnable',
    'favorabilitySecondBonusHitPoint',
    'favorabilitySecondBonusOffense',
    'favorabilitySecondBonusDefense',
    'favorabilitySecondEnableFlag',
    'FloweringCharacterID',
    'MaxFloweringFlag',
    'FloweringEnableFlag',
    'Fullname',
    'OnlyPerformanceFloweringEnableFlag',
    'dressName',
    'readingCharacterName',
    'samePersonId',
    'isImportant',
    'isEventCharacter',
    'createDate',
    '0x3f', //
    '0x40', //
    'swfVersion',
    'rarityEvolutionTypeId',
    'MaxRarityGlowFlag',
    'RarityGlowEnableFlag',
    'publicationDate',
    'specialCharacterType'
  ],
  // search "'masterCharacterEquipment'" and go down
  masterCharacterEquipment: [
    'MasterEquipID',
    'name', // manual
    'iMasterItemID', // manual
    'MasterEquipHP',
    'MasterEquipOffense',
    'MasterEquipDefense',
    'MasterEquipSpeed',
    'MasterMaxEquipOffense',
    'MasterMaxEquipDefense',
    'iSell',
    'MasterEquipEffectID',
    'MasterEquipEffectValueA',
    'MasterEquipEffectValueB',
    'MasterEquipEffectValueC',
    'MasterEquipEffect2ID',
    'MasterEquipEffect2ValueA',
    'MasterEquipEffect2ValueB',
    'MasterEquipEffect2ValueC',
    '0x12', //
    'MasterEquipCategoryID',
    'MasterEquipExclusiveTypeID',
    'MasterEquipExclusiveValue',
    'MasterCharacterEquipmentLevelGroupId',
    'MasterAvailableSynthesisBaseFlag',
    'MasterEquipSynthesisMaterialFlag',
    'MasterEquipDescription',
    'MasterEquipmentPlus',
    'EvolveEquipmentId',
    'MasterEquipmentEvolveId',
    'MasterMaxEvolveFlag',
    'WorldFlowerPowerType',
    'EquipmentType',
    'EffectType'
  ],
  // "['MasterFlowerMemorys']=" ^parse
  masterFlowerMemory: [    
    'id',
    'itemId',
    'name',
    'readingName',
    'rarity',
    'orderNum',
    'growthType',
    'initHitPoint',
    'hitPointPerLevel',
    'initAttack',
    'attackPerLevel',
    'initDefense',
    'defensePerLevel',
    'description'
  ],
  masterFlowerMemorysAbilitys: [
    'id',
    'flowerMemoryId',
    'overLimitStep',
    'abilityId'
  ],
  masterFlowerMemoryRarity: [
    'id',
    'rarity',
    'maxOverLimitStep',
    'saleGameMoney',
    'synthesisGameMoneyPerLevel',
    'synthesisExperience',
    'expPerLevel',
    'baseMaxLevel',
    'releaselimitGameMoneyPerStep'
  ],
  masterFlowerMemoryMaterial: [
    'id',
    'itemId',
    'rarity',
    'saleGameMoney',
    'synthesisExperience',
    'categoryId',
    'description'
  ],
  masterFlowerMemoryGrowthType: [
    'id',
    'growthType',
    'toLevel',
    'coefficient'
  ],
  masterAbility: [
    'id',
    'name',
    'effectId',
    'optionId',
    'description',
    'value1',
    'value2',
    'value3',
    'value4'
  ]
} as const

export type DataName = keyof typeof HEADERS
export type Data<T extends DataName> = Record<typeof HEADERS[T][number], string>
