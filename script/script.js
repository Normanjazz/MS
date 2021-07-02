// По клику на карточку -  на каждый класс '.card__inner' в документе вешается класс 'is-flipped'
function cardFlipper(){
    var cards = document.querySelectorAll('.card__inner');
    for(var i=0; i< cards.length; i++){
        cards[i].addEventListener('click', function(){
            this.classList.toggle('is-flipped');
        });
    }
}
cardFlipper()

//================динамическое создание accordion-item =============
const accordionWrapper=document.querySelector('.accordion-wrapper');
//JSON
const contentData = [
    {"title": "Свадебные торты", "imagesID": "WeddingCackes", "imageCount": 6 },
    {"title": "Детские торты", "imagesID": "ChildCackes", "imageCount": 5},
    {"title": "Мужские торты", "imagesID": "MaleCackes", "imageCount": 6}    
]

// Функция создает шаблон HTML элементов согласно JSON (contentData)
const createTemplate = item => { 
    return `
        <div class="accordion-item">
            <button class="accordion-item--trigger">${item.title}</button>
            <div class="accordion-item--content">
                <div class="images" id="${item.imagesID}"></div> 
            </div>   
        </div>
    `    
}

// Функция вносит accordion-item в HTML
const fillHtmlList = () => {
    contentData.forEach(item => {
        accordionWrapper.innerHTML += createTemplate(item);
    })
}

fillHtmlList();

//Динамическое создание div с картинками из дерриктории
// ID изображения должны совпадать с именем подпапки, где лежат картинки
// imageCount - кол-во изображений в папке (???сделать автоматически???)
function createGalleryPart(imageID, imageCount){
    let Myimages = document.getElementById(imageID), a = "";
    for (let i = 1; i <= imageCount; ++i) {
        a += `<div class="image-container"><img src="img/gallery/${imageID}/img (${i}).png"></div>`;
        }
    Myimages.innerHTML = a;
}
createGalleryPart("WeddingCackes", 6)
createGalleryPart("ChildCackes", 5)
createGalleryPart("MaleCackes", 9)

//==========================================================================

// Accordion
function Accordion(){
    var accordions = document.querySelectorAll('.accordion-item--trigger');
    for(item of accordions) {
        item.addEventListener('click', function()  {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                this.nextElementSibling.classList.remove("show");
            } else {
                for(el of accordions) {
                    el.classList.remove('active')
                    el.nextElementSibling.classList.remove('show')
                }
                this.classList.add('active');
                this.nextElementSibling.classList.add("show");
            }   
        })    
    }
}
Accordion()
