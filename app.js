let Card = require("./lib/card");

let Deck = require("./lib/deck");

let faces = require("./lib/shared").faces;

let suits = require("./lib/shared").suits;

let config = require("./lib/config");

let roles = config.roles;

var combinationRoles = Object.create(roles);

let deck = new Deck();

for (role of roles) {
    combinationRoles.shift();
    for (cRole of combinationRoles) {
        if (role.name != cRole.name) deck.cards.push(new Card(role, cRole));
    }
}

let defaultHandSize = config.defaultHandSize;
let hand = deck.cards.length / roles.length;

let cardDifference = (deck.cards.length) * defaultHandSize / hand - deck.cards.length;

let data = {
    cards: deck.getCards(),
    numbers: deck.getDataCount()
}

console.log("TOTALS ------------------------------");
console.log(`${roles.length} roles`);
console.log(`${deck.cards.length} combinations`);
if (hand < defaultHandSize) console.log(`${hand} cards in hand. You need ${cardDifference} more combinations to bring this to ${defaultHandSize}`);
else console.log(`${hand} cards in hand`);
//console.log(JSON.stringify(data));