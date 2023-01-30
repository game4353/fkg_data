export const IDHEADERS: Record<DataName, string> = {
  masterCharacterLeaderSkillDescription: 'id',
  masterCharacterSkill: 'MasterBattleSkillID',
  masterKeywords: '_id',
  masterCharacterBook: '_bookId',
  masterCharacter: 'MasterCharacterID'
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
    'description4',
    '0xa' //
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
    'Value4',
    '0xe' //
  ],
  // search '['MasterKeywordsData']=' and go up find 'parse'
  masterKeywords: [
    '_id',
    '_key',
    '_color',
    '_title',
    '_description',
    '0x5' //
  ],
  // search '['MasterCharacterBookData']' and go up find 'parse'
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
  // search '['MasterCharacterData']();' and go down
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
    '0x46' //
  ]
} as const

export type DataName = keyof typeof HEADERS
export type Data<T extends DataName> = Record<typeof HEADERS[T][number], string>
