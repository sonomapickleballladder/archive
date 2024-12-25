const ladderSeason = '_Fall_2024';
const ladderSeasonName = ladderSeason.replace(/[^a-zA-Z]/g, "");
const ladderSeasonNameLowercase = ladderSeasonName.toLowerCase();
const ladderYear = ladderSeason.replace(/[^0-9]/g, "")
const thisLadder = 'Open';
const laddersOffered = {'Open': {ls: '_44854224859696286339_', min: 0, sb: '', url: './'}, 'Womens': {ls: '_58342948998688589487_', min: 0, url: '@Womens/', sb: 'womens-ladder_'}}
const ladderId = laddersOffered[thisLadder]
const protoMap = {'http:': '.html', 'https:': '', 'file:': '.html'}