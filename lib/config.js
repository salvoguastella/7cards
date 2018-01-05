let faces = require("./shared").faces;
let suits = require("./shared").suits;
let quantifiers = require("./shared").quantifiers;
let qualities = require("./shared").qualities;
let Role = require("../lib/role");
let wCondition = require("../lib/wCondition");

let roles = {
    "gola" : new Role("Gola", faces.k, suits.c),
    "ira" : new Role("Ira", faces.k, suits.s),
    "accidia" : new Role("Accidia", faces.j, suits.s),
    "lussuria" : new Role("Lussuria", faces.q, suits.s, [
        new wCondition(quantifiers.most, faces.q),
        new wCondition(quantifiers.most, suits.h)
    ]),
    "superbia" : new Role("Superbia", faces.j, suits.c),
    "avarizia" : new Role("Avarizia", faces.joker, suits.b),
    "invidia" : new Role("Invidia", faces.q, suits.c),
    "temperanza" : new Role("Temperanza", faces.k, suits.h),
    "prudenza" : new Role("Prudenza", faces.j, suits.h),
    "clemenza" : new Role("Clemenza", faces.j, suits.d),
    "carita" : new Role("Carita", faces.q, suits.h),
    "diligenza" : new Role("Diligenza", faces.q, suits.d),
    "umilta" : new Role("Umilta", faces.joker, suits.r),
    "giustizia" : new Role("Giustizia", faces.k, suits.d)
};

module.exports = {
    //#ROLES add/remove roles below
    roles: [
        roles.lussuria,
        roles.superbia,
        roles.carita,
        roles.giustizia,
        roles.gola,
        roles.ira,
        roles.accidia,
        roles.avarizia,
        roles.invidia,
        roles.temperanza,
        roles.prudenza,
        roles.clemenza,
        roles.diligenza,
        roles.umilta
    ],
    defaultHandSize: 6
}