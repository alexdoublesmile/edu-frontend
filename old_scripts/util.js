// (year, month, day, hour, min, sec, ms)
const now = new Date();
console.log(now);

// 0(sunday) - 6(saturday)
now.getDay();

// unix-time
now.getTime();

Date.now();
const myBirth = Date.parse("12-12-1986");
console.log(myBirth)