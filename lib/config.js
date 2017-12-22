let faces = require("./shared").faces;
let suits = require("./shared").suits;
let Role = require("../lib/role");

//#ROLES comment one or more ot these line to remove them from the game
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

module.exports = {
    roles: roles,
    defaultHandSize: 6
}