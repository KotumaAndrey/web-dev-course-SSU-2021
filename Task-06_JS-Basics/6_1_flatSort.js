console.log("Задание 6.1. Плоский массив");

const flatSort = arr => arr
    .flat(Infinity)
    .sort((a, b) => a - b);

console.log(flatSort([[[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]]))
console.log(flatSort([]))
console.log(flatSort([[], []]))
console.log(flatSort([[], [1]]))
console.log(flatSort([[1, 3, 5], [-100], [2, 4, 6]]))
