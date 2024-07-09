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

//testing changes to see if it works