"use strict";
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership["Premium"] = "PREMIUM";
})(Membership || (Membership = {}));
const membership = Membership.Standard;
const membershipReverse = Membership[0];
console.log(membership);
console.log(membershipReverse);
console.log(Membership.Premium);
