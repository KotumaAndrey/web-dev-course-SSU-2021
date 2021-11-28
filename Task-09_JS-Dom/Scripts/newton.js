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

function formula(){
    var val1 = document.getElementById('input1').value;
    document.getElementsByClassName("output")[0].innerHTML = newton(parseInt(val1));
}

function clearInput3(){
    document.getElementById('input1').value = "";
}

function newtonGame(){
    var num1 = newton( 0 );
    var num2 = newton( 1 );
    var num4 = newton( -2 );
    var num5 = newton( 3 );
    var num7 = newton( 2018 );
    var num8 = newton( 3.15 );

    document.getElementsByClassName("results")[0].innerHTML = `
    <h2>Формула квадрата суммы</h2>
    <p>Функция принимает на вход число n и возвращает 
    строку с формулой квадрата суммы для этого числа.</p>
    
    <input id="input1" type="number" placeholder="Введите n">
    <button onclick="clearInput3()">Очистить ввод</button>
    <button onclick="formula()">Выполнить</button>
    
    <div class="output"></div><br/>

    <div class="template">
        Примеры ввода-вывода: <br/>
        0: ${num1} <br/>                                                               
        1: ${num2} <br/>                                                              
        -2: ${num4} <br/>                                                               
        3: ${num5} <br/>                                                                
        2018: ${num7} <br/>                                 
        3.15: ${num8} <br/>
    </div>`;
}