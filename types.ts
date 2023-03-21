// simple
const str: string = "Hello";
const str2: string = 'Hello';
const str3: string = `Hello`;
const age: number = 42;
const num: number = 42.2;
const num2: number = 42e10;
const num3: number = 100_000;
const num4: number = 0b100000;
const num5: number = 0x10f0a3;
const isEnabled: boolean = false;   
const nullValue: null = null;
const undefinedValue: undefined = undefined;

// array type
const cars: string[] = ["Mazda", "BMW", "Audi"];
const cars2: Array<string> = ["Mazda", "BMW", "Audi"];

// tuple type
const values: [string, number, boolean] = ["Mazda", 42, true];

// any type
let anyTypeValue: any = "null";

// complex type
const stringValue: string | null | undefined = "undefined";

console.log(str);

// function
function sayName(name: string): void {
    console.log(name);
}

// never function
function throwError(): never {
    throw new Error();
}

function doAlways(): never {
    while(true);
}

// custom type
type Login = string;
type Some = string | number;
type NullableString = string | null | undefined;