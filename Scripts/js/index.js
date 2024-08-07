"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nbYear = exports.likes = void 0;
exports.shortLongShort = shortLongShort;
exports.toJadenCase = toJadenCase;
exports.validBraces2 = validBraces2;
exports.validBracesRecursion = validBracesRecursion;
exports.tribonacci2 = tribonacci2;
exports.rgb = rgb;
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
const nbYear = (p0, percent, aug, p) => {
    let years = 0;
    while (p0 < p) {
        p0 += p0 * percent / 100 + aug;
        years++;
    }
    return years;
};
exports.nbYear = nbYear;
const findUniq = (arr) => {
    const [a, b, c] = arr.slice(0, 3);
    return arr.filter((num) => num !== (a === b ? a : c))[0];
};
function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.slice(0, i).reduce((acc, num) => acc + num, 0) === arr.slice(i + 1).reduce((acc, num) => acc + num, 0)) {
            return i;
        }
    }
    return -1;
}
function validBraces(braces) {
    while (/\(\)|\[\]|\{\}/.test(braces)) {
        braces = braces.replace(/\(\)|\[\]|\{\}/, '');
    }
    return !braces.length;
}
function validBraces2(braces) {
    const stack = [];
    const start = ['(', '[', '{'];
    const end = [')', ']', '}'];
    for (let index = 0; index < braces.length; index++) {
        const char = braces[index];
        if (start.indexOf(char) > -1) {
            stack.push(char);
            continue;
        }
        if (stack.pop() === start[end.indexOf(char)]) {
            continue;
        }
        return false;
    }
    return stack.length === 0;
}
function validBracesRecursion(braces) {
    if (braces.length % 2 !== 0)
        return false;
    let count = braces.length;
    braces = braces.replace('()', '');
    braces = braces.replace('[]', '');
    braces = braces.replace('{}', '');
    if (braces.length === 0)
        return true;
    if (braces.length === count)
        return false;
    return validBracesRecursion(braces);
}
//reverse working from 3 int to n int
function tribonacci(signature, n) {
    if (n === 0)
        return [];
    if (n <= 3)
        return signature.slice(0, n);
    for (let i = 3; i < n; i++) {
        signature.push(signature[i - 1] + signature[i - 2] + signature[i - 3]);
    }
    return signature;
}
//forward working from 0 int to n int
function tribonacci2(s, n) {
    for (let i = 0; s.length < n; i++)
        s.push(s[i] + s[i + 1] + s[i + 2]);
    return s.slice(0, n);
}
const high = (x) => {
    const words = x.split(' ');
    const scores = words.map((word) => word.split('').reduce((acc, char) => acc + char.charCodeAt(0) - 96, 0));
    return words[scores.indexOf(Math.max(...scores))];
};
function rgb(r, g, b) {
    const toHex = (num) => {
        if (num < 0)
            return '00';
        if (num > 255)
            return 'FF';
        return num.toString(16).padStart(2, '0').toUpperCase();
    };
    return [r, g, b].map((num) => toHex(num)).join('');
};
