function formatString(m, n, str) {
    if (typeof n != "number" || typeof m != "number" || !Number.isInteger(n) || !Number.isInteger(m) || n < 1 || m < 1) {
        return 'The first and the second arguments must be a positive number!';
    }

    let subs = [];
    let strLength = str.length;
    let table = '';

    for (let i = 0; i < strLength; i += n) {
        subs.push(str.substring(i, i + n));
    }

    //Create a table
    for (let i = 0; i < m; i++) {    
        table += "+---".repeat(n) + "+\n";
        for (let j = 0; j < n; j++) {
            if (typeof subs[i] != "undefined" && typeof subs[i][j] != "undefined") {
                if (subs[i][j] == ' ')  {
                    table += `|   `; 
                }
                else {
                    table += `| ${subs[i][j]} `;
                }
            }
            else 
            table += `|   `; 
        }
        table += "| \n";
    }
    table += "+---".repeat(n) + "+\n";
    return (table);
}

console.log("Formatting a string to a table: ")
console.log(formatString(4, 4, "Hello World!"));
console.log(formatString(4, 3, "Nice pattern"));
console.log(formatString(3, 4, "Nice pattern"));
console.log(formatString(4, 4, ""));
console.log(formatString(-3, 4, "Nice pattern"));
console.log(formatString(3, -4, "Nice pattern"));
console.log(formatString(-3.5, 4, "Nice pattern"));
console.log(formatString(202, -1, "Nice pattern"));
console.log(formatString(202, 1, "Nice patternfsdfesfsegw4eye5ye5ryhedrt5yeygrd5ye"));
console.log(formatString(1, 50, "Nice patternfsdfesfsegw4eye5ye5ryhedrt5yeygrd5ye"));
console.log("");