"use strict";
// simple
const str = "Hello";
const str2 = 'Hello';
const str3 = `Hello`;
const age = 42;
const num = 42.2;
const num2 = 42e10;
const num3 = 100000;
const num4 = 0b100000;
const num5 = 0x10f0a3;
const isEnabled = false;
const nullValue = null;
const undefinedValue = undefined;
// array type
const cars = ["Mazda", "BMW", "Audi"];
const cars2 = ["Mazda", "BMW", "Audi"];
// tuple type
const values = ["Mazda", 42, true];
// any type
let anyTypeValue = "null";
// complex type
const stringValue = "undefined";
console.log(str);
// function
function sayName(name) {
    console.log(name);
}
// never function
function throwError() {
    throw new Error();
}
function doAlways() {
    while (true)
        ;
}
