console.log('Hello, world!');

let age: number = 30;

export function shortLongShort(a: string, b: string): string {
    return a.length < b.length ? a + b + a : b + a + b;
}


export function toJadenCase(str: string): string {
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

function findOutLier(integers: number[]): number {
    const odd = integers.filter((number) => number % 2 !== 0);
    const even = integers.filter((number) => number % 2 === 0);

    return odd.length === 1 ? odd[0] : even[0];
}

function oddOrEven(array: number[]) {
    let total: number = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total % 2 === 0 ? 'even' : 'odd';
    //return array.reduce((acc, number) => acc + number, 0) % 2 === 0 ? 'even' : 'odd';
}

export const likes = (names: string[]): string => {
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
}

const digitalRoot = (n: number): number => {
    return (n - 1) % 9 + 1;
    //return (n - 1) % 9 + 1;
}

const isIsogram = (str: string): boolean => {
    return new Set(str.toLowerCase()).size === str.length;
}

export const nbYear = (p0: number, percent: number, aug: number, p: number): number => {
    let years: number = 0;
    while (p0 < p) {
        p0 += p0 * percent / 100 + aug;
        years++;
    }
    return years;
}

const findUniq = (arr: number[]): number => {
    const [a, b, c] = arr.slice(0, 3);
    return arr.filter((num) => num !== (a === b ? a : c))[0];
}

function findEvenIndex (arr: number[]): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr.slice(0, i).reduce((acc, num) => acc + num, 0) === arr.slice(i + 1).reduce((acc, num) => acc + num, 0)) {
            return i;
        }
    }
    return -1;
}

function validBraces(braces: string): boolean {
    while (/\(\)|\[\]|\{\}/.test(braces)) {
        braces = braces.replace(/\(\)|\[\]|\{\}/, '');
    }
    return !braces.length;
}

export function validBraces2(braces: string): boolean {
    const stack: string[] = [];
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

export function validBracesRecursion(braces: string): boolean {
    if (braces.length % 2 !== 0) return false;
    let count = braces.length;
    braces = braces.replace('()', '');
    braces = braces.replace('[]', '');
    braces = braces.replace('{}', '');
    if (braces.length === 0) return true;
    if (braces.length === count) return false;
    return validBracesRecursion(braces);
}

//reverse working from 3 int to n int
function tribonacci(signature: number[], n: number): number[] {
    if (n === 0) return [];
    if (n <= 3) return signature.slice(0, n);
    for (let i = 3; i < n; i++) {
        signature.push(signature[i - 1] + signature[i - 2] + signature[i - 3]);
    }
    return signature;
}
 //forwrad working from 0 int to n int
export function tribonacci2(s: Array<number>, n: number): number[] {
    for (let i = 0; s.length < n; i++) s.push(s[i] + s[i + 1] + s[i + 2]);
    return s.slice(0, n);
}
//testing changes to see if it works