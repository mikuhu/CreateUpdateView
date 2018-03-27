view();
function add() {
    // Достаём введенные данные
    let bik = document.getElementById('bik').value;
    let name = document.getElementById('name').value;
    let corBil = document.getElementById('corBil').value;
    let adress = document.getElementById('adress').value;
    if (bik != '' && name != '' && corBil != '' && adress != '') {
        // складываем в массив
        let array = new Array(bik, name, corBil, adress);
        console.log(array);
        // складываем в localstorage
        localStorage.setItem(bik, JSON.stringify(array));
    } else {
        alert('Заполните все поля');
    }
    window.location.reload();


}
// функция просмотра
function view() {
    // проверяем, что localStorage не пустой
    if(localStorage.length == 0) return;
    var viewBlock = document.getElementById('viewBlock');
    // пробегаемся по нему
    for (let i in localStorage) {
        // из объекта нам нужна строка
        if (typeof localStorage[i] == 'string') {
            let bank = JSON.parse(localStorage.getItem(i));
            // пробегаемся по 4-м значениям
            for(let j = 0; j < bank.length; j++){
                if(j == 0){ viewBlock.innerHTML = viewBlock.innerHTML +'БИК - '+ bank[j] + '    ';}
                if(j == 1){ viewBlock.innerHTML = viewBlock.innerHTML +'Название - '+ bank[j] + '    ';}
                if(j == 2){ viewBlock.innerHTML = viewBlock.innerHTML +'Корсчет - '+ bank[j] + '    ';}
                if(j == 3){ viewBlock.innerHTML = viewBlock.innerHTML +'Адрес - '+ bank[j] + "<br />";}                
            }            
        }
    }
}

// функция изменения
function change(){
    // Достаём значения
    let bik = document.getElementById('bik').value;
    let name = document.getElementById('name').value;
    let corBil = document.getElementById('corBil').value;
    let adress = document.getElementById('adress').value;
    // достаём необходимое значение из localStorage
    let bank = JSON.parse(localStorage.getItem(bik));
    // если пользователь ввёл новый значения
    if(name != ''){bank[1] = name;}
    if(corBil != ''){bank[2] = corBil;}
    if(adress != ''){bank[3] = adress;}
    // удаляем
    localStorage.removeItem(bik);
    // добавляем заново
    localStorage.setItem(bik, JSON.stringify(bank));
    window.location.reload();
}