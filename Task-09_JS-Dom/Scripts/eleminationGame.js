function eleminate(counter, steper) {
    if (typeof counter != "number" || typeof steper != "number" || !Number.isInteger(counter) || !Number.isInteger(steper) || counter < 1 || steper < 1) {
        return 'The first and the second arguments must be a positive number!';
    }
    let queue = Array.from({ length: counter }, (_, i) => i + 1);
    for (let step = 1; queue.length > 1; step++) {
        let cur = queue.shift();
        if (step % steper == 0) {
            step = 0;
            continue;
        }
        queue.push(cur);
    }
    return queue.shift().toPrecision();
}

function play(){
    var val1 = document.getElementById('input1').value;
    var val2 = document.getElementById('input2').value;
    document.getElementsByClassName("output")[0].innerHTML = eleminate(val1, val2);
}

function clearInput1(){
    document.getElementById('input1').value = "";
    document.getElementById('input2').value = "";
}

function eleminationGame() {
    var game1 = eleminate(7, 3);
    var game2 = eleminate(11, 19);
    var game3 = eleminate(1, 300);
    var game4 = eleminate(14, 2);
    var game5 = eleminate(100, 1);

    document.getElementsByClassName("results")[0].innerHTML = `
    <h2>Игра на выбывание</h2>
    <p>Каждый раунд функция исключает одного участника и продолжает определять выбывших по кругу 
    до тех пор, пока круг не сократится до одного победителя. 
    Например, вызов с аргументами (7, 3) означает, что в круге 7 участников и выбывает каждый третий.</p>
    
    <input id="input1" type="text" placeholder="Введите число n">
    <input id="input2" type="text" placeholder="Введите число k">
    <button onclick="clearInput1()">Очистить вводимые значения</button>
    <button onclick="play()">Играть</button>
    
    <div class="output"></div><br/>

    <div class="template">
        Примеры ввода-вывода: <br/>
        7, 3: ${game1} <br/>                                                            
        11, 19: ${game2} <br/>                                                     
        1, 300: ${game3} <br/>                                                             
        14, 2: ${game4} <br/>                                                             
        100, 1: ${game5}
    </div>`;
}