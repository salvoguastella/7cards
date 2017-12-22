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

module.exports = Card;