//Счетчик для создания и удаления элементов по ID
var id_number = 1;

//---------Создаем элемент по нажатию на кнопку "+""--------------------
// И добавляет его в product_item, не заменяя старые (как это делает innerHTML +=. 
const add_product_btn = document.querySelector('.add_product');

add_product_btn.addEventListener('click', generate_product_item);

function generate_product_item(){    
    const product_item = document.querySelector('.product-items');
    var newproduct_item = `
    <div class="product-content" id="proditem${id_number}">    
        <select onchange="calcAll()" class="options" id="product${id_number}">
                   
        </select> 
        <label class="lbl_units" id="unit${id_number}"></label> 
        <input onchange="calcAll()" class="qty" placeholder="кол-во" type="number" id="qty${id_number}">
        <label class="lbl_total_cost" id="cost${id_number}"></label>
    </div>
    `
    // Добавляем новый элемент в DOM
    product_item.insertAdjacentHTML('beforeend', newproduct_item);

    // -----Создаем dropDownList в <select class="options">---
    const createOptionsTemplate = item => { 
        return `<option>${item.name}</option>`    
    }
    const optionItem = document.getElementById(`product${id_number}`); 

// productData - массив, находящийся в подключенном файле "productData.js"
    productData.forEach(item => {
        optionItem.innerHTML += createOptionsTemplate(item);
        })
    // --------------------------------------------------------

    id_number +=1;
}
// --------------------------------------------------------------------  
// ----------Удаляем элемент по нажатию на кнопку "-""-----------------
const remove_product_btn = document.querySelector('.remove_product');
remove_product_btn.addEventListener('click', remove_product_item);

function remove_product_item(){
    document.getElementById('proditem' + (id_number-1)).remove();
    id_number -=1 
    calcAll()   
}
// --------------------------------------------------------------------  

// Вводим переменную для подсчета итоговой стоимости
let total_price = 0;

//--------- Функция, вызывается при изменении значений в select и input-------
function calcAll(){
    // определяем кол-во добавленных пользователем элементов
    itemNumber = document.getElementsByClassName('options').length 
    // и обходим все эти элементы циклом   
    for (let i = 1; i < itemNumber+1; i++){ 
        // Получавем значение из поля продукты
        let prod=document.getElementById('product' + i).value;

        // ищем это значение в массиве productData и получаем соответствующее ему значение Е.И.
        const units = productData.find(findunits).unit;
        function findunits (item){
            return item.name === prod;
        }
        //Вставляем полученные Е.И. в лейбл
        document.getElementById('unit' + i).textContent = units;

         // опять ищем это значение в массиве productData и получаем соответствующее ему значение цены за единицу.    
        const unitprice = productData.find(findunitprice).unitprice;        
        function findunitprice (item){
            return item.name === prod;
        }
        // Умножаем полученную цену за единицу на кол-во товара, введенное пользователем
        const item_price = unitprice * document.getElementById('qty' + i).value;
        //Вставляем полученную цену в лейбл
        document.getElementById('cost' + i).textContent = item_price.toFixed(2);

        // Складываем значения стоимости у всех добавленных продуктов
        total_price += item_price;   
        // Вставляем итоговую стоимость в необходимое "поле" 
        document.querySelector('.total_price').textContent = total_price.toFixed(2);
        
    }
// ---------------------------------------------------------------------------
// Сбрасываем итоговую стоимость, чтобы не задваивать ее при следующем пересчете
total_price = 0
}

