const ladderSeason = '_Spring_2024';
const ladderSeasonName = ladderSeason.replace(/[^a-zA-Z]/g, "");
const ladderSeasonNameLowercase = ladderSeasonName.toLowerCase();
const ladderYear = ladderSeason.replace(/[^0-9]/g, "")
const thisLadder = 'Open';
const laddersOffered = {'Open': {ls: '_72631234864949324717', min: 0, sb: '', url: './'}, 'Womens': {ls: '_24171934123728921239_', min: 0, url: '@Womens/', sb: 'womens-ladder_'}}
const ladderId = laddersOffered[thisLadder]
const protoMap = {'http:': '.html', 'https:': '', 'file:': '.html'}