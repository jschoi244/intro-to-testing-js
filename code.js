// helloWorld function
const helloWorld = function() {
    return "Hello, World!";
}

const sayHello = (name) => {
    if (!name) {
        return "Hello, noname!";
    } else if (parseInt(name) || typeof(name) === 'number') {
        return "A number is not a name!";
    } else if (typeof(name) === "string") {
        return `Hello, ${name}!`;
    } else {
        return `The type of this is ${typeof(name)}`;
    }
}

const isFive = (num) => parseInt(num) === 5;

const isEven = (num) => num % 2 === 0;

const isVowel = (char) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (typeof(char) !== "string") return false;
    if (vowels.includes(char.toLowerCase())) {
        return true;
    }
    return false;
}

const add = (a,b) => {
    return Number(a) + Number(b);
}