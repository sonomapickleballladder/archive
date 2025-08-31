const ladderSeason = '_Summer_2025';
const ladderSeasonName = ladderSeason.replace(/[^a-zA-Z]/g, "");
const ladderSeasonNameLowercase = ladderSeasonName.toLowerCase();
const ladderYear = ladderSeason.replace(/[^0-9]/g, "")
const thisLadder = 'Open';
const laddersOffered = {'Open': {ls: '_78861197648102125559_', min: 0, sb: '', url: './'}, 'Womens': {ls: '_40027679862622084137_', min: 0, url: '@Womens/', sb: 'womens-ladder_'}}
const ladderId = laddersOffered[thisLadder]
const protoMap = {'http:': '.html', 'https:': '', 'file:': '.html'}
