class Deck {
    constructor() {
        this.cards = [];
    }

    getCards() {
        console.log("ALL---------------------------");
        for (let [index, card] of this.cards.entries()) {
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
            console.log((index+1)+") "+result.join(" - "));
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

module.exports = Deck;