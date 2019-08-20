const img = ['one', 'two', 'tree', 'four', 'five', 'six', 'seven', 'eit', 'nine'];
let square = document.querySelectorAll('.square');
console.log(square);
// генератор чисел
function random(min, max){
    return Math.round(min - 0.5+Math.random()*(max-min+1));
}

square.forEach(function(element){
    // перебираем цифры в массиве
    let randNum = random(0, img.length -1);
    console.log(randNum);
    element.style.backgroundImage = 'url(img/'+img[randNum]+'.jpg)';
    // индекс изображения
    element.dataset.data = randNum;
    element.onclick = changeImage;

});
// проверка изображений при клике
function changeImage(){
    document.querySelector('#out').innerHTML = '';
    let data = this.dataset.data
    console.log(data);
    if(+data+1 < img.length){
        data++;
    }
    else{
        data = 0;
    }
    this.dataset.data = data;
    this.style.backgroundImage = 'url(img/'+img[data]+'.jpg)';
    checkPrize();
}

function checkPrize() {
    // проверка массивных цифр всех трёх изображений
    let res = [];
    square.forEach(function(element){
        res.push(element.dataset.data);
    });
    console.log(res);
    // еиволсу еондебоп
    if (res.join('') == '8888'){
        document.querySelector('#out').innerHTML = "Мо";
    } else if (res.join('') == '3156'){
        document.querySelector('#out').innerHTML = "ло";
    } else if (res.join('') == '7584'){
        document.querySelector('#out').innerHTML = "дец";
    }
}