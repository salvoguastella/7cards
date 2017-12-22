class Role {

    constructor(name, face, suit) {
        this.joker = "joker";
        this.name = name;
        this.face = face;
        this.suit = suit;
    }

    getCardName() {
        if (this.face == this.joker) return this.getColor() + " " + this.face;
        else return this.face + " of " + this.suit;
    }

    getSuit() {
        if (this.face == this.joker) return this.getColor();
        else return this.suit;
    }

    getColor() {
        if (this.face == this.joker) {
            return this.suit;
        } else {
            if (this.suit == suits.h || this.suit == suits.d) {
                return "red";
            } else return "black"
        }
    }

}

class Card {
    constructor(side1, side2) {
        this.side1 = side1;
        this.side2 = side2;
    }

    getName() {
        return this.side1.name + " / " + this.side2.name;
    }

    getFacePair() {
        return this.side1.getCardName() + " / " + this.side2.getCardName();
    }

    getColorPair() {
        if (this.side1.getColor() === this.side2.getColor()) return "full " + this.side1.getColor();
        else return this.side1.getColor() + " / " + this.side2.getColor();
    }

    isFullFace() {
        if (this.side1.face === this.side2.face) return this.side1.face;
        else return false;
    }

    isFullSuit() {
        if (this.side1.suit === this.side2.suit) return this.side1.suit;
        else return false;
    }
}

class Deck {
    constructor() {
        this.cards = [];
    }

    getCards() {
        console.log("ALL---------------------------");
        for (let card of this.cards) {
            let result = [];
            result.push(card.getName());
            card.name = card.getName();
            result.push(card.getFacePair());
            card.facePair = card.getFacePair();
            result.push(card.getColorPair());
            card.colorPair = card.getColorPair();
            if (card.isFullFace()) result.push("full " + card.isFullFace());
            card.fullFace = card.isFullFace();
            if (card.isFullSuit()) result.push("full " + card.isFullSuit());
            card.fullSuit = card.isFullSuit();
            console.log(result.join(" - "));
        }
        return this.cards;
    }

    getDataCount() {
        let n = {
            sideFaces: {
                j: 0,
                q: 0,
                k: 0,
                joker: 0
            },
            sideSuits: {
                h: 0,
                d: 0,
                c: 0,
                s: 0
            },
            sideColor: {
                r: 0,
                b: 0
            },
            fullFaces: {
                j: 0,
                q: 0,
                k: 0,
                joker: 0
            },
            fullSuits: {
                h: 0,
                d: 0,
                c: 0,
                s: 0
            },
            fullColor: {
                r: 0,
                b: 0
            }
        };

        for (let card of this.cards) {
            switch (card.side1.face) {
                case "jack":
                    {
                        n.sideFaces.j++;
                        break;
                    }
                case "queen":
                    {
                        n.sideFaces.q++;
                        break;
                    }
                case "king":
                    {
                        n.sideFaces.k++;
                        break;
                    }
                case "joker":
                    {
                        n.sideFaces.joker++;
                    }
            }
            switch (card.side2.face) {
                case "jack":
                    {
                        n.sideFaces.j++;
                        break;
                    }
                case "queen":
                    {
                        n.sideFaces.q++;
                        break;
                    }
                case "king":
                    {
                        n.sideFaces.k++;
                        break;
                    }
                case "joker":
                    {
                        n.sideFaces.joker++;
                    }
            }
            switch (card.side1.getSuit()) {
                case "hearts":
                    {
                        n.sideSuits.h++;
                        break;
                    }
                case "diamonds":
                    {
                        n.sideSuits.d++;
                        break;
                    }
                case "clubs":
                    {
                        n.sideSuits.c++;
                        break;
                    }
                case "spades":
                    {
                        n.sideSuits.s++;
                    }
            }
            switch (card.side2.getSuit()) {
                case "hearts":
                    {
                        n.sideSuits.h++;
                        break;
                    }
                case "diamonds":
                    {
                        n.sideSuits.d++;
                        break;
                    }
                case "clubs":
                    {
                        n.sideSuits.c++;
                        break;
                    }
                case "spades":
                    {
                        n.sideSuits.s++;
                    }
            }
            if (card.side1.face == "jack" && card.side2.face == "jack") n.fullFaces.j++;
            if (card.side1.face == "queen" && card.side2.face == "queen") n.fullFaces.q++;
            if (card.side1.face == "king" && card.side2.face == "king") n.fullFaces.k++;
            if (card.side1.face == "joker" && card.side2.face == "joker") n.fullFaces.joker++;

            if (card.side1.suit == "hearts" && card.side2.suit == "hearts") n.fullSuits.h++;
            if (card.side1.suit == "diamonds" && card.side2.suit == "diamonds") n.fullSuits.d++;
            if (card.side1.suit == "clubs" && card.side2.suit == "clubs") n.fullSuits.c++;
            if (card.side1.suit == "spades" && card.side2.suit == "spades") n.fullSuits.s++;

            if (card.side1.getColor() == "red") n.sideColor.r++;
            else n.sideColor.b++;
            if (card.side2.getColor() == "red") n.sideColor.r++;
            else n.sideColor.b++;
            if (card.side1.getColor() == "red" && card.side2.getColor() == "red") n.fullColor.r++;
            if (card.side1.getColor() == "black" && card.side2.getColor() == "black") n.fullColor.b++;
        }

        console.log("SIDES--------------------------------");
        console.log("JACKS/QUEENS/KINGS/JOKERS");
        console.log(`${n.sideFaces.j}  /  ${n.sideFaces.q}  /  ${n.sideFaces.k}  /  ${n.sideFaces.joker}`);
        console.log("HEARTS/DIAMONDS/CLUBS/SPADES");
        console.log(`${n.sideSuits.h}  /  ${n.sideSuits.d}  /  ${n.sideSuits.c}  /  ${n.sideSuits.s}`);
        console.log("REDS/BLACKS");
        console.log(`${n.sideColor.r}  /  ${n.sideColor.b}`);

        console.log("FULL CARDS---------------------------");
        console.log("JACKS/QUEENS/KINGS/JOKERS");
        console.log(`${n.fullFaces.j}  /  ${n.fullFaces.q}  /  ${n.fullFaces.k}  /  ${n.fullFaces.joker}  =  ${n.fullFaces.j+n.fullFaces.q+n.fullFaces.k+n.fullFaces.joker}`);
        console.log("HEARTS/DIAMONDS/CLUBS/SPADES");
        console.log(`${n.fullSuits.h}  /  ${n.fullSuits.d}  /  ${n.fullSuits.c}  /  ${n.fullSuits.s}  =  ${n.fullSuits.h+n.fullSuits.d+n.fullSuits.c+n.fullSuits.s}`);
        console.log("REDS/BLACKS");
        console.log(`${n.fullColor.r}  /  ${n.fullColor.b}  =  ${n.fullColor.r+n.fullColor.b}`);

        return n;
    }
};

const suits = {
    "h": "hearts",
    "d": "diamonds",
    "c": "clubs",
    "s": "spades",
    "r": "red",
    "b": "black"
}
const faces = {
    "j": "jack",
    "q": "queen",
    "k": "king",
    "joker": "joker"
}


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

let hand = deck.cards.length / roles.length;

let cDifference = (deck.cards.length) * 6 / hand - deck.cards.length;

let data = {
    cards: deck.getCards(),
    numbers: deck.getDataCount()
}

console.log("TOTALS ------------------------------");
console.log(`${roles.length} roles`);
console.log(`${deck.cards.length} combinations`);
if (hand < 6) console.log(`${hand} cards in hand. You need ${cDifference} more combinations to bring this to 6`);
else console.log(`${hand} cards in hand`);
//console.log(JSON.stringify(data));