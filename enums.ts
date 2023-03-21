enum Membership {
    Simple,
    Standard,
    Premium = "PREMIUM"
}

const membership = Membership.Standard;
const membershipReverse = Membership[0];
console.log(membership);
console.log(membershipReverse);
console.log(Membership.Premium);

