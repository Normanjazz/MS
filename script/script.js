// По клику на карточку -  на каждый класс '.card__inner' в документе вешается класс 'is-flipped'
var cards = document.querySelectorAll('.card__inner');
for(var i=0; i< cards.length; i++){
    cards[i].addEventListener('click', function(){
        this.classList.toggle('is-flipped');
    });
}


// создает из div c id = "into" изображения из папки img/gallery/ 
let WeddingCacke = document.getElementById("WeddingCacke"), a = "";
for (let i = 1; i <= 6; ++i) {
    a += `<div class="image-container"><img src="img/gallery/WeddingCackes/img (${i}).png"></div>`;
    }
WeddingCacke.innerHTML = a;

let ChildCacke = document.getElementById("ChildCacke"), b = "";
for (let i = 1; i <= 5; ++i) {
    b += `<div class="image-container"><img src="img/gallery/ChildCackes/img (${i}).png"></div>`;
    }
ChildCacke.innerHTML = b;

let MaleCacke = document.getElementById("MaleCacke"), c = "";
for (let i = 1; i <= 9; ++i) {
    c += `<div class="image-container"><img src="img/gallery/MaleCackes/img (${i}).png"></div>`;
    }
MaleCacke.innerHTML = c;


// Accordion

document.querySelectorAll('.accordion-item--trigger').forEach((item) =>)

