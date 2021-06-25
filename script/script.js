// По клику на карточку -  на каждый класс '.card__inner' в документе вешается класс 'is-flipped'
var cards = document.querySelectorAll('.card__inner');
for(var i=0; i< cards.length; i++){
    cards[i].addEventListener('click', function(){
        this.classList.toggle('is-flipped');
    });
}


// создает из div c id = "into" изображения из папки img/gallery/ с классом "image"
let into = document.getElementById("into"), s = "";
for (let i = 1; i <= 14; ++i) {
    s += `<div class="image"><img src="img/gallery/img (${i}).png"></div>`;
    }
into.innerHTML = s;


//