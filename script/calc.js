const productData = [
    {
        "id": "prod1",
        "name": "Масло сливочное",
        "unit": "гр",
        "qty": "500",
        "unitprice": "95.00"
    },
    {
        "id": "prod2",
        "name": "Молоко",
        "unit": "мл",
        "qty": "1000",
        "unitprice": "46.00"
    },
    {
        "id": "prod3",
        "name": "Мука",
        "unit": "гр",
        "qty": "2000",
        "unitprice": "82.99"
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
        "unitprice": "229.95"
    },
    {
        "id": "prod6",
        "name": "Сахарная пудра",
        "unit": "гр",
        "qty": "1000",
        "unitprice": "120.00"
    },
    {
        "id": "prod7",
        "name": "Сливки",
        "unit": "гр",
        "qty": "1000",
        "unitprice": "285.00"
    },
    {
        "id": "prod8",
        "name": "Сыр творожный",
        "unit": "гр",
        "qty": "1000",
        "unitprice": "940.00"
    },
    {
        "id": "prod9",
        "name": "Яйца куриные",
        "unit": "шт",
        "qty": "10",
        "unitprice": "70.00"
    }
]


var id_number = 1;

const add_product_btn = document.querySelector('.add_product');
add_product_btn.addEventListener('click', generate_product_item);

function generate_product_item(){    
    const product_item = document.querySelector('.product-item');
    product_item.innerHTML += `
    <div class="product-content" id=prod${id_number}>    
        <select id="">
            <option></option>                    
            <option>Масло сливочное</option>                    
            <option>Молоко</option>                    
            <option>Сахарная пудра</option>                    
            <option>Разрыхлитель</option>          
        </select> 
        <label class="lbl_units" id=""></label> 
        <input class="qty" placeholder="кол-во" type="number" id="">
        <label class="lbl_total_cost" id=""></label>
    </div>
    `
    id_number +=1  
}   


