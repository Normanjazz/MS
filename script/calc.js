const productData = [
    {
        "id": "prod0",
        "name": "Выберите продукт",
        "unit": "",
        "qty": "",
        "unitprice": ""
    },
    {
        "id": "prod1",
        "name": "Масло сливочное",
        "unit": "гр",
        "qty": "500",
        "unitprice": "0.19"
    },
    {
        "id": "prod2",
        "name": "Молоко",
        "unit": "мл",
        "qty": "1000",
        "unitprice": "0.05"
    },
    {
        "id": "prod3",
        "name": "Мука",
        "unit": "гр",
        "qty": "2000",
        "unitprice": "0.04"
    },
    {
        "id": "prod4",
        "name": "Разрыхлитель",
        "unit": "уп",
        "qty": "1",
        "unitprice": "12.00"
    },
    {
        "id": "prod5",
        "name": "Сахар-песок",
        "unit": "гр",
        "qty": "5000",
        "unitprice": "0.05"
    },
    {
        "id": "prod6",
        "name": "Сахарная пудра",
        "unit": "гр",
        "qty": "1000",
        "unitprice": "0.12"
    },
    {
        "id": "prod7",
        "name": "Сливки",
        "unit": "гр",
        "qty": "1000",
        "unitprice": "0.28"
    },
    {
        "id": "prod8",
        "name": "Сыр творожный",
        "unit": "гр",
        "qty": "1000",
        "unitprice": "0.94"
    },
    {
        "id": "prod9",
        "name": "Яйца куриные",
        "unit": "шт",
        "qty": "10",
        "unitprice": "7.00"
    }
]

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
        <select class="options" id="product${id_number}">
                   
        </select> 
        <label class="lbl_units" id="unit${id_number}"></label> 
        <input class="qty" placeholder="кол-во" type="number" id="qty${id_number}">
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
}
// --------------------------------------------------------------------  

let total_price = 0;

const calc_btn = document.querySelector('.calc_btn');
calc_btn.addEventListener('click', calcAll);

function calcAll(){
    itemNumber = document.getElementsByClassName('options').length
    // jsonNumber = productData.length
    // console.log('всего элементов:' + itemNumber)
    for (let i = 1; i < itemNumber+1; i++){ 
        let prod=document.getElementById('product' + i).value;     
        
        const units = productData.find(findunits).unit;
        function findunits (item){
            return item.name === prod;
        }
        document.getElementById('unit' + i).textContent = units;

        const unitprice = productData.find(findunitprice).unitprice;
        function findunitprice (item){
            return item.name === prod;
        }

        const item_price = unitprice * document.getElementById('qty' + i).value;
        document.getElementById('cost' + i).textContent = item_price;

        total_price += item_price;
        
    }

 document.querySelector('.total_price').textContent = total_price;


    // console.log(document.getElementById('product' + (id_number-1)).value)
}

// console.log(productData[1].id)