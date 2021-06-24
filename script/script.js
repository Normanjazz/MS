// На каждый класс '.card__inner' в документе вешается класс 'is-flipped'
var cards = document.querySelectorAll('.card__inner');
for(var i=0; i< cards.length; i++){
    cards[i].addEventListener('click', function(){
        this.classList.toggle('is-flipped');
    });
}

