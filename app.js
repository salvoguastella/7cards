let Role = require("./lib/role");

let Card = require("./lib/card");

let Deck = require("./lib/deck");

let faces = require("./lib/shared").faces;

let suits = require("./lib/shared").suits;

//comment one or more ot these line to remove them from the game
let roles = [
    new Role("Gola", faces.k, suits.c),
    new Role("Ira", faces.k, suits.s),
    new Role("Accidia", faces.j, suits.c),
    new Role("Lussuria", faces.q, suits.s),
    new Role("Superbia", faces.j, suits.s),
    new Role("Avarizia", faces.joker, suits.b),
    new Role("Invidia", faces.q, suits.c),
    new Role("Temperanza", faces.k, suits.h),
    new Role("Prudenza", faces.j, suits.h),
    new Role("Fede", faces.j, suits.d),
    new Role("Carita", faces.q, suits.h),
    new Role("Diligenza", faces.q, suits.d),
    new Role("Umilta", faces.joker, suits.r),
    new Role("Giustizia", faces.k, suits.d)
];

var combinationRoles = Object.create(roles);

let deck = new Deck();

for (role of roles) {
    combinationRoles.shift();
    for (cRole of combinationRoles) {
        if (role.name != cRole.name) deck.cards.push(new Card(role, cRole));
    }
}

let defaultHandSize = 6;
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