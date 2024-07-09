"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likes = void 0;
exports.shortLongShort = shortLongShort;
exports.toJadenCase = toJadenCase;
console.log('Hello, world!');
let age = 30;
function shortLongShort(a, b) {
    return a.length < b.length ? a + b + a : b + a + b;
}
function toJadenCase(str) {
    return str
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
/*String.prototype.toJadenCase  = function () {
    return this.split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}*/
function findOutLier(integers) {
    const odd = integers.filter((number) => number % 2 !== 0);
    const even = integers.filter((number) => number % 2 === 0);
    return odd.length === 1 ? odd[0] : even[0];
}
function oddOrEven(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total % 2 === 0 ? 'even' : 'odd';
    //return array.reduce((acc, number) => acc + number, 0) % 2 === 0 ? 'even' : 'odd';
}
const likes = (names) => {
    switch (names.length) {
        case 0:
            return 'no one likes this';
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
};
exports.likes = likes;
const digitalRoot = (n) => {
    return (n - 1) % 9 + 1;
    //return (n - 1) % 9 + 1;
};
const isIsogram = (str) => {
    return new Set(str.toLowerCase()).size === str.length;
};
//testing changes to see if it works