const ladderSeason = "_Fall_2025";
const ladderSeasonName = ladderSeason.replace(/[^a-zA-Z]/g, "");
const ladderSeasonNameLowercase = ladderSeasonName.toLowerCase();
const ladderYear = ladderSeason.replace(/[^0-9]/g, "");
const laddersOffered = {
  Open: {
    ls: "_41790668026985195813_",
    min: 0,
    url: "./",
    sb: "",
    nRounds: 7,
    startDate: new Date(2025, 8, 18),
    roundLengths: [11 / 7, 10 / 7, 11 / 7, 10 / 7, 11 / 7, 10 / 7, 11 / 7],
  },
  Womens: {
    ls: "_16454903853195626804_",
    min: 0,
    url: "@Womens/",
    sb: "womens-ladder_",
    nRounds: 7,
    startDate: new Date(2025, 8, 29),
    roundLengths: [10 / 7, 11 / 7, 10 / 7, 11 / 7, 10 / 7, 11 / 7, 10 / 7],
  },
};
const thisLadder = location.href.indexOf("@Womens") > -1 ? "Womens" : "Open";
const ladderId = laddersOffered[thisLadder];
const protoMap = { "http:": ".html", "https:": "", "file:": ".html" };
