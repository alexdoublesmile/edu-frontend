// simple
var str = "Hello";
var str2 = 'Hello';
var str3 = "Hello";
var age = 42;
var num = 42.2;
var num2 = 42e10;
var num3 = 100000;
var num4 = 32;
var num5 = 0x10f0a3;
var isEnabled = false;
var nullValue = null;
var undefinedValue = undefined;
// array type
var cars = ["Mazda", "BMW", "Audi"];
var cars2 = ["Mazda", "BMW", "Audi"];
// tuple type
var values = ["Mazda", 42, true];
// any type
var anyTypeValue = "null";
// complex type
var stringValue = "undefined";
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
