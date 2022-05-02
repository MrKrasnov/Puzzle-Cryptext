const img = ['one', 'two', 'tree', 'four', 'five', 'six', 'seven', 'eit', 'nine'];
let photo = document.querySelectorAll('.square');
let winnerDiv = document.querySelector('#out');

function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

photo.forEach(function (element) {
    let int = random(0, img.length - 1);

    element.style.backgroundImage = 'url(img/' + img[int] + '.jpg)';
    element.dataset.data = int;

    element.onclick = changeImage;
});

function changeImage() {
    winnerDiv.innerHTML = 'Всё ещё комбинация не правильная!';
    winnerDiv.style.fontSize = '16px';

    let data = this.dataset.data

    if (+data + 1 < img.length) {
        data++;
    }
    else {
        data = 0;
    }
    this.dataset.data = data;
    this.style.backgroundImage = 'url(img/' + img[data] + '.jpg)';

    checkPrize();
}

function checkPrize() {
    let res = [];
    photo.forEach(function (element) {
        res.push(element.dataset.data);
    });

    if (res.join('') == '7584') {
        winnerDiv.style.fontSize = '25px';
        winnerDiv.innerHTML = "Ты подобрал комбинацию!";
    }
}