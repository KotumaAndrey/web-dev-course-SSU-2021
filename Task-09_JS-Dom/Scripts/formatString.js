function format(m, n, str) {
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
        table += "+---".repeat(n);
        table += `+<br/>`;
        for (let j = 0; j < n; j++) {
            if (typeof subs[i] != "undefined" && typeof subs[i][j] != "undefined") {
                if (subs[i][j] == ' ')  {
                    `|<span>\u00A0\u00A0\u00A0<span>`; 
                }
                else {
                    table += `| ${subs[i][j]} `;
                }
            }
            else 
            table += `|<span>\u00A0\u00A0\u00A0<span>`; 
        }
        table += "|  <br/>";
    }
    table += "+---".repeat(n);
    table += "|  <br/>";
    return (table);
}


function formatter(){
    var val1 = document.getElementById('input1').value;
    var val2 = document.getElementById('input2').value;
    var val3 = document.getElementById('input3').value;
    document.getElementsByClassName("output")[0].innerHTML = format(parseInt(val1), parseInt(val2), val3);
}

function clearInput2(){
    document.getElementById('input1').value = "";
    document.getElementById('input2').value = "";
    document.getElementById('input3').value = "";
}

function formatString(){
    var str1 = format( 4, 4, "Hello world!" );
    var str2 = format( 4, 3, "Nice pattern" );
    var str3 = format( 3, 4, "Nice pattern" );

    document.getElementsByClassName("results")[0].innerHTML = `
    <h2>Форматирование строки в таблицу</h2>
    <p>Первое число – количество строк в таблице, второе число – количество столбцов, 
    строка – сообщение, которое нужно поместить в таблицу. Таблица заполняется символами 
    слева направо и сверху вниз. Если в строке больше символов, чем ячеек в таблице, 
    то лишние символы обрезаются. Если меньше – лишние ячейки остаются пустыми.</p>
    
    <input id="input1" type="number" placeholder="Введите y">
    <input id="input2" type="number" placeholder="Введите x">
    <input id="input3" type="text" placeholder="Введите строку">
    <button onclick="clearInput2()">Очистить ввод</button>
    <button onclick="formatter()">Выполнить</button>
    
    <div class="output"></div><br/>

    <div class="template">
        Примеры ввода-вывода: <br/>
        15, 7, "Hello world!": <br/> ${str1} <br/>                                                         
        12, 3, "Nice pattern": <br/> ${str2} <br/>                                      
        3, 5, "Nice pattern": <br/> ${str3} <br/>
    </div>`;
}