function factorial(n) 
{
    return n ? n * factorial(n - 1n) : 1n;
}

function newton(n) {
    if (typeof n != "number" || !Number.isInteger(n) || n < -200 || n > 200) {
        return 'Invalid input';
    }

    let result = '';
    let isPositive = true;

    if (n < 0) {
        isPositive = false;
        n = Math.abs(n);
    }

    if (n == 0) {
        result = '1'
    } else {
        {
            for (var i = 0; i <= n; i++) {
                var c = factorial(BigInt(n)) / (factorial(BigInt(n - i)) * factorial(BigInt(n) - BigInt(n - i)));
                (c == 1) ? c = "" : result += c.toString();

                if (n - i == 1) {
                    result += 'a';
                }
                if (n - i > 1) {
                    result += 'a^' + (n - i);
                }
                if (i == 1) {
                    result += 'b';
                }
                if (i > 1) {
                    result += 'b^' + (i);
                }
                if (i != n) {
                    result += ' + ';
                }
            }
        }
    }

    return isPositive ? result : '1 / (' + result + ')';

}

console.log("Formulaes for (a+b)^n:")
console.log(newton(0));
console.log(newton(1));
console.log(newton(2));
console.log(newton(-2));
console.log(newton(3));
console.log(newton(5));
console.log(newton(201));
console.log(newton(3.14));