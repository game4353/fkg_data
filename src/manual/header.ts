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
    '_enableFlag', // 0x00
    '_enableValue', // 0x01
    '_bookId', // 0x02
    '_name', // 0x03
    '_bookNum', // 0x04
    '_languageOfFlower', // 0x05
    '_secondSceneOpenFlag', // 0x06
    '_secondDateSceneOpenFlag', // 0x07
    '_heartFlag', // 0x08
    '_specialDisplayFlag', //0x09
  ],
  // search "['MasterCharacterData']();" and go down
  masterCharacter: [
    'MasterCharacterID', // 0x00
    'ItemID', // 0x01
    'BreedID', // 0x02
    'NationId', // 0x03
    'MasterCharacterNum', // 0x04
    'Nickname', // 0x05
    'Rarity', // 0x06
    'Material', // 0x07
    'MasterGiftGroupID', // 0x08
    'AbilityID1', // 0x09
    'AbilityID2', // 0x0a
    'AbilityID3', // 0x0b
    'AbilityID4', // 0x0c
    'AbilityID5', // 0x0d
    'AbilityID6', // 0x0e
    'AbilityID7', // 0x0f
    'AbilityID8', // 0x10
    'AbilityID9', // 0x11
    'BattleSkillID', // 0x12
    'BattleSkillID2', // 0x13
    'HPisLV1', // 0x14
    'HPisLV99', // 0x15
    'OffenseisLV1', // 0x16
    'OffenseisLV99', // 0x17
    'DefenseisLV1', // 0x18
    'DefenseisLV99', // 0x19
    'SpeedisLV1', // 0x1a
    'SpeedisLV99', // 0x1b
    'maxHitPointBonus', // 0x1c
    'maxAttackBonus', // 0x1d
    'maxDefenseBonus', // 0x1e
    'secondMaxHitPointBonus', // 0x1f
    'secondMaxAttackBonus', // 0x20
    'secondMaxDefenseBonus', // 0x21
    'SaleGameMoney', // 0x22
    'MasterCharacterLVGroup', // 0x23
    'MasterCharacterSecondLVGroup', // 0x24
    'EvolveCharacterId', // 0x25
    'MaxEvolveFlag', // 0x26
    'PartySetEnableFlag', // 0x27
    'FavorabilityBonusHitPoint', // 0x28
    'FavorabilityBonusOffense', // 0x29
    'FavorabilityBonusDefense', // 0x2a
    'MasterCharacterBookID', // 0x2b
    'MasterCharacterBookOrderNum', // 0x2c
    'FavorabilityEnable', // 0x2d
    'favorabilitySecondBonusHitPoint', // 0x2e
    'favorabilitySecondBonusOffense', // 0x2f
    'favorabilitySecondBonusDefense', // 0x30
    'favorabilitySecondEnableFlag', // 0x31
    'FloweringCharacterID', // 0x32
    'MaxFloweringFlag', // 0x33
    'FloweringEnableFlag', // 0x34
    'Fullname', // 0x35
    'OnlyPerformanceFloweringEnableFlag', // 0x36
    'dressName', // 0x37
    'readingCharacterName', // 0x38
    'samePersonId', // 0x39
    'isImportant', // 0x3a
    'isEventCharacter', // 0x3b
    'createDate', // 0x3c
    'swfVersion', // 0x3d
    'rarityEvolutionTypeId', // 0x3e
    'MaxRarityGlowFlag', // 0x3f
    'RarityGlowEnableFlag', // 0x40
    'specialCharacterType' // 0x41
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
