let suits = require("./shared").suits;

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

module.exports = Role;