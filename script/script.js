// По клику на карточку -  на каждый класс '.card__inner' в документе вешается класс 'is-flipped'
var cards = document.querySelectorAll('.card__inner');
for(var i=0; i< cards.length; i++){
    cards[i].addEventListener('click', function(){
        this.classList.toggle('is-flipped');
    });
}


// создает из div c id = "into" изображения из папки img/gallery/ 
let into = document.getElementById("into"), s = "";
// Здесь нужна переменная для кол-ва фото в папке для i (написать!!!)
for (let i = 1; i <= 18; ++i) {
    s += `<div class="image-container"><img src="img/gallery/img (${i}).png"></div>`;
    }
into.innerHTML = s;


//