const ladderSeason = "_Spring_2026";
const ladderPath = "/spring_season";
const ladderSeasonName = ladderSeason.replace(/[^a-zA-Z]/g, "");
const ladderSeasonNameLowercase = ladderSeasonName.toLowerCase();
const ladderYear = ladderSeason.replace(/[^0-9]/g, "");
const laddersOffered = {
  Open: {
    ls: "_98283948273849283849_",
    min: 0,
    url: "./",
    sb: "",
    class: "opl",
    nRounds: 6,
    startDate: new Date(2026, 1, 9),
    roundLengths: [14 / 7, 14 / 7, 14 / 7, 14 / 7, 14 / 7, 14 / 7],
  },
  Womens: {
    ls: "_47298279917263523746_",
    min: 0,
    url: "@Womens/",
    sb: "womens-ladder_",
    class: "wml",
    nRounds: 6,
    startDate: new Date(2026, 1, 9),
    roundLengths: [14 / 7, 14 / 7, 14 / 7, 14 / 7, 14 / 7, 14 / 7],
  },
};
const thisLadder = location.href.indexOf("@Womens") > -1 ? "Womens" : "Open";
const ladderId = laddersOffered[thisLadder];
const protoMap = { "http:": ".html", "https:": "", "file:": ".html" };
