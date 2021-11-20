console.log("Задание 6.5. – Изограммы");

function isogram(str) {
    return str.length === new Set(str.toLowerCase()).size
}

console.log(isogram('Dermatoglyphics'));
console.log(isogram('aba'));
console.log(isogram('moOse'));
console.log(isogram('"'));