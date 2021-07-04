//================динамическое создание Десертов ===================
const cardWrapper=document.querySelector('.cards-container');
//JSON
const desertContentData = [
    {"url": "./img/wedding_cacke.png", "name": "Свадебный торт", "price": "1300 руб./1 кг.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, placeat esse quam error ducimus tempore qui assumenda aspernatur! Esse, iste."},

    {"url": "./img/ChokoladeCacke.jpg", "name": "Шоколадный торт", "price": "1300 руб./1 кг.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, placeat esse quam error ducimus tempore qui assumenda aspernatur! Esse, iste."},

    {"url": "./img/RaspberryCacke.jpg", "name": "Cливочно-малиновый торт", "price": "1300 руб./1 кг.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, placeat esse quam error ducimus tempore qui assumenda aspernatur! Esse, iste."},

    {"url": "./img/SnikersCacke.jpg", "name": 'Торт "Сникерс"', "price": "1300 руб./1 кг.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, placeat esse quam error ducimus tempore qui assumenda aspernatur! Esse, iste."},    

    {"url": "./img/RedVelvetCacke.jpg", "name": 'Торт "Красный бархат"', "price": "1300 руб./1 кг.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, placeat esse quam error ducimus tempore qui assumenda aspernatur! Esse, iste."},    

    {"url": "./img/CarrotCacke.jpg", "name": "Морковный торт", "price": "1300 руб./1 кг.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, placeat esse quam error ducimus tempore qui assumenda aspernatur! Esse, iste."},        

    {"url": "./img/Cupcackes.jpg", "name": "Капкейки", "price": "150 руб./1 шт.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, placeat esse quam error ducimus tempore qui assumenda aspernatur! Esse, iste."},        

    {"url": "./img/Cackepops.jpg", "name": "Кейкпопсы", "price": "60 руб./1 шт.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, placeat esse quam error ducimus tempore qui assumenda aspernatur! Esse, iste."},        

    {"url": "./img/Macarons.jpg", "name": "Макаронс", "price": "60 руб./1 шт.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, placeat esse quam error ducimus tempore qui assumenda aspernatur! Esse, iste."},        

    {"url": "./img/Trifles.jpg", "name": "Трайфлы", "price": "150 руб./1 шт.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, placeat esse quam error ducimus tempore qui assumenda aspernatur! Esse, iste."},        

    {"url": "./img/Trufiles.jpg", "name": "Трюфели", "price": "50 руб./1 шт.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, placeat esse quam error ducimus tempore qui assumenda aspernatur! Esse, iste."},
      
]

// Функция создает шаблон HTML элементов согласно JSON (desertContentData)
const createDesertTemplate = item => { 
    return `
        <div class="card">
            <div class="card__inner">
                <div class="card__face card__face--front">
                    <div class="card__content">
                        <img src=${item.url} alt=${item.name}>
                        <div class="name-container">
                            <h3>${item.name}</h3>
                        </div> 
                        <p class="price">${item.price}</p>
                        <a class="btn" id="desert_btn">Подробнее</a> 
                    </div> 
                </div>
                <div class="card__face card__face--back">
                    <div class="card__content">
                        <p>${item.description}</p>                             
                    </div>
                </div>
            </div>
        </div>        
    `    
}

// Функция вносит accordion-item в HTML
const fillHtmlDesertList = () => {
    desertContentData.forEach(item => {
        cardWrapper.innerHTML += createDesertTemplate(item);
    })
}

fillHtmlDesertList();


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

//==================================================================
//================динамическое создание accordion-item =============

const accordionWrapper=document.querySelector('.accordion-wrapper');
//JSON
const gallaryContentData = [
    {"title": "Свадебные торты", "imagesID": "WeddingCackes", "imageCount": 6 },
    {"title": "Детские торты", "imagesID": "ChildCackes", "imageCount": 5},
    {"title": "Мужские торты", "imagesID": "MaleCackes", "imageCount": 9}    
]

// Функция создает шаблон HTML элементов согласно JSON (gallaryContentData)
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
    gallaryContentData.forEach(item => {
        accordionWrapper.innerHTML += createTemplate(item);
    })
}

fillHtmlList();

//Динамическое создание div с картинками из дерриктории
const fillHtmlListPic = () => {     
    gallaryContentData.forEach(item => {
        let Myimages = document.getElementById(item.imagesID), a = "";;
        for (let i = 1; i <= item.imageCount; ++i) {
            a += `<div class="image-container"><img src="img/gallery/${item.imagesID}/img (${i}).png"></div>`;
            }
        Myimages.innerHTML = a;           
    })
}

fillHtmlListPic();

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
//==========================================================================