
document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            id : 36667,
            imgUrl: 'https://content1.rozetka.com.ua/goods/images/big/366948863.jpg',
            name: 'Монитор 23.8" Acer Nitro VG240YM3bmiipx',
            desck: {
                "Диагональ дисплея": "23.8",
                "Максимальное разрешение дисплея": "1920x1080 (FullHD)",
                "Время реакции матрицы": "1 мс (GtG) / 0.5 мс (GtG, Min.)",
                "Яркость дисплея": "250 кд/м²",
                "Тип матрицы": "IPS",
                "Контрастность дисплея": "1000:1",
                "Особенности": "Безрамочный (Сinema screen)"
              },
            price : "5999",
            category : "monitor"
        },
        {
            id : 36668,
            imgUrl: 'https://content.rozetka.com.ua/goods/images/big/382796874.jpg',
            name: 'Монитор 23.8" Asus TUF Gaming VG246H1A',
            desck: {
                "Диагональ дисплея": "23.8",
                "Максимальное разрешение дисплея": "1920x1080 (FullHD)",
                "Время реакции матрицы": "0.5 мс MPRT",
                "Яркость дисплея": "300 кд/м²",
                "Тип матрицы": "IPS",
                "Контрастность дисплея": "13001",
                "Особенности": "Безрамочный (Сinema screen)"
              },
            price : "4999",
            category : "monitor"
        },
        {
            id : 36669,
            imgUrl: 'https://content.rozetka.com.ua/goods/images/big/344504228.jpg',
            name: 'Монитор 27" MSI Gaming Quantum Dot G274QPF QD',
            desck: {
                "Диагональ дисплея": "27",
                "Максимальное разрешение дисплея": "2560x1440 (2K QHD)",
                "Время реакции матрицы": "1ms GtG",
                "Яркость дисплея": "300 кд/м²",
                "Тип матрицы": "300 (Typ.) 400 (HDR Peak)",
                "Особенности": "Безрамочный (Сinema screen)"
              },
            price : "12599",
            category : "monitor"
        },
        {
            id : 36700,
            imgUrl: 'https://content.rozetka.com.ua/goods/images/big/374343935.jpg',
            name: 'Ноутбук Lenovo IdeaPad 3 15IAU7 (82RK011NRA) Arctic Grey',
            desck: {
                "Диагональ дисплея": "15.6",
                "Максимальное разрешение дисплея": "1920x1080 (FullHD)",
                "Процессор": "Intel Core i5-1235U (0.9 - 4.4 ГГц)",
                "Оперативная память": "RAM 16 ГБ",
                "Жестыйкий диск": " SSD 512 ГБ",
                "Видеокарта": "Iris Xe Graphics",
                "Вес": "1.63 кг",
                "Цвет": "Серый",
                "Особенности": " без ОС"
              },
            price : "23500",
            category : "laptop"
        },
        {
            id : 36701,
            imgUrl: 'https://content2.rozetka.com.ua/goods/images/big/362592851.jpg',
            name: 'Ноутбук Acer Aspire 7 A715-76G-560W',
            desck: {
                "Диагональ дисплея": "15.6",
                "Максимальное разрешение дисплея": "1920x1080 (FullHD)",
                "Процессор": "Intel Core i5-12450H (2.0 - 4.4 ГГц)",
                "Оперативная память": "RAM 16 ГБ",
                "Жестыйкий диск": " SSD 512 ГБ",
                "Видеокарта": "nVidia GeForce RTX 3050, 4 ГБ",
                "Вес": "2.1 кг",
                "Цвет": "Черный",
                "Особенности": " без ОС"
              },
            price : "33999",
            category : "laptop"
        },
        {
            id : 36800,
            imgUrl: 'https://content2.rozetka.com.ua/goods/images/big/398085804.jpg',
            name: 'Мобильный телефон Samsung Galaxy S24 Ultra',
            desck: {
                "Диагональ дисплея": "6.8, Dynamic AMOLED 2X",
                "Максимальное разрешение дисплея": "3120x1440",
                "Процессор": "Qualcomm Snapdragon 8 Gen 3 for Galaxy",
                "Основная камера": "200 Мп + 50 Мп + 12 Мп + 10 Мп",
                "Фронтальная камера" : "12 Мп",
                "Оперативная память": "RAM 12 ГБ",
                "Встроенная пямять": "1Т",
                "Операционная система": "Android 14",
                "Емкость баттареии": "5000 мА*ч"
              },
            price : "61199",
            category : "mobile"
        }, 
        {
            id : 36801,
            imgUrl: 'https://content1.rozetka.com.ua/goods/images/big/364834195.jpg',
            name: 'Мобильный телефон Apple iPhone 15 Pro Max',
            desck: {
                "Диагональ дисплея": "6.7, OLED (Super Retina XDR)",
                "Максимальное разрешение дисплея": "2796x1290",
                "Процессор": "Apple A17 Pro",
                "Основная камера": "248 Мп + 12 Мп + 12 Мп + 12 Мп",
                "Фронтальная камера" : "12 Мп",
                "Оперативная память": "RAM 8 ГБ",
                "Встроенная пямять": "256 ГБ",
                "Операционная система": "iOS 17",
                "Емкость баттареии": "3274 мА*ч"
              },
            price : "59999",
            category : "mobile"
        },
        {
            id : 36802,
            imgUrl: 'https://content2.rozetka.com.ua/goods/images/big/366846770.jpg',
            name: 'Мобильный телефон Motorola G54 Power',
            desck: {
                "Диагональ дисплея": "6.5, IPS",
                "Максимальное разрешение дисплея": "2400x1080",
                "Процессор": "MediaTek Dimensity 7020 (2.2 ГГц + 2.0 ГГц)",
                "Основная камера": "50 Мп + 8 Мп",
                "Фронтальная камера" : "16 Мп",
                "Оперативная память": "RAM 12 ГБ",
                "Встроенная пямять": "256 ГБ + microSD (до 1 ТБ)",
                "Операционная система": "Android 13",
                "Емкость баттареии": "6000 мА*ч"
              },
            price : "8499",
            category : "mobile"
        },
        {
            id : 36803,
            imgUrl: 'https://content.rozetka.com.ua/goods/images/big/328132324.jpg',
            name: 'Мобильный телефон Samsung Galaxy A24',
            desck: {
                "Диагональ дисплея": "6.5, Super AMOLED",
                "Максимальное разрешение дисплея": "2340x1080",
                "Процессор": "Mediatek Helio G99 (2 x 2.6 ГГц + 6 x 2.0 ГГц)",
                "Основная камера": "50 Мп + 5 Мп + 2 Мп",
                "Фронтальная камера" : "13 Мп",
                "Оперативная память": "RAM 6 ГБ",
                "Встроенная пямять": "128 ГБ встроенной памяти + microSD (до 1 ТБ)",
                "Операционная система": "Android 13",
                "Емкость баттареии": "5000 мА*ч"
              },
            price : "8299",
            category : "mobile"
        },
    ]
    
    const categoryProduct = document.getElementById('category-lists');
    const productsLists = document.querySelector(".product-list");
    const productsTitle = document.querySelector(".product-title");
    const productsBasket = document.querySelector(".products-basket-block");
    const productsBasketPop = document.querySelector(".products-basket-popup");
    const overlayPop = document.querySelector(".overlay");
    
    categoryProduct.addEventListener('click', function(event) {
        let target = event.target;
        if (target.tagName === "LI"){
            event.stopPropagation();
            getProductList(target);
        }
    },true);
    
    productsBasket.addEventListener('click',function(event){
        let target = event.target;
        if (target.classList.contains("products-basket-btn")){
            event.stopPropagation();
            renderProductsBusket();
        } else if (target.classList.contains("product-bsk-delete")){
            event.stopPropagation();
            deleteFromBusket(target);
        } else if (target.classList.contains("product-bsk--close-pop")){
            event.stopPropagation();
            productsBasketPop.classList.add('hidden');
            overlayPop.classList.add('hidden');
        } else if (target.classList.contains("product-bsk--block") || target.closest('.product-bsk--block')){
            event.stopPropagation();
            target = target.closest('.product-bsk--block');
            productsBasketPop.classList.add('hidden');
            overlayPop.classList.add('hidden');
            let productEntry  = JSON.parse(localStorage.getItem(target.id));
            const product = products.find(item => item.id === productEntry.id);
            getProductCard(product);
        }
    },true);
    
    function getProductList(category){
        let filterCategory;
        const productCards = document.querySelectorAll(".product-cards");
        let dataNameValue = category.getAttribute('data-name');
        filterCategory = products.filter(product => product.category === dataNameValue);
    
        if(productCards){
            productCards.forEach(element => {
                element.parentNode.removeChild(element);
            });
        }
    
        const divCards = document.createElement('div');
        divCards.className = "product-cards"
        filterCategory.forEach(element => {
            const divCards = document.createElement('div');
            divCards.className = "product-cards";
            divCards.innerHTML = `<img src="${element.imgUrl}"><h3 class ="title-card">${element.name}</h3>`
            productsLists.append(divCards);
            divCards.addEventListener('click', () => {
                getProductCard(element);
            });
        });
    };
    
    function getProductCard(card) {
        const productCard = document.querySelector(".product-card");
        const divCard = document.createElement('div');
        const ulElement = document.createElement('ul');
        const arrValue = Object.entries(card.desck);
        divCard.className = "product-card";
        if (productCard) {
            productsTitle.removeChild(productCard);
        }
    
        divCard.innerHTML = `<img src="${card.imgUrl}"><h3 class ="title-card">${card.name}</h3>`;
        
        arrValue.forEach(([key,value]) => {
            ulElement.innerHTML += `<li>${key}: ${value}</li>`;
        })
        divCard.append(ulElement);
        divCard.innerHTML += `<button type="button" class="buy-button"> Купить ${card.price} Грн </button>`;
        divCard.innerHTML += `<span class ='buy-product-messeage'>Вы успешно купили товар</span>`;
        productsTitle.append(divCard);
        divCard.addEventListener('click', function(event) {
            let target = event.target;
            if (target.className === "buy-button"){
                event.stopPropagation();
                setProductInStorage(card);
                let buyMessege = document.querySelector(".buy-product-messeage");
                buyMessege.classList.add("visible");
                setTimeout(() => {
                    productsTitle.removeChild(divCard);
                    const productCards = document.querySelectorAll(".product-cards");
                    productCards.forEach(element => {
                        element.parentNode.removeChild(element);
                    });
                },1400)
            }
        },true);
    }
    
    function setProductInStorage(product){
        const currentTime = new Date().getTime();
        const productInfo = {
            id: product.id,
            price: product.price,
            time: currentTime
        };
        localStorage.setItem(`productInfo_${currentTime}`, JSON.stringify(productInfo));
    }
    
    
    function renderProductsBusket() {
        const productEntries = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('productInfo_')) {
                const productInfo = JSON.parse(localStorage.getItem(key));
                
                productEntries.push({key,productInfo});
            }
        }
        productEntries.sort((a, b) => {
            return parseInt(a.productInfo.time) - parseInt(b.productInfo.time);
        });
        productsBasketPop.innerHTML = `<button type="button" class="product-bsk--close-pop">Закрыть</button>`;
        productEntries.forEach(element => {
            const formattedDateTime = getFormatedTime(element.productInfo.time);
            const product = products.find(item => item.id === element.productInfo.id);
            productsBasketPop.innerHTML += `
                    <div class="product-bsk--block" id="${element.key}">
                        <button type="button" class="product-bsk-delete">Удалить</button>
                        <div class="product-bsk--block-info">
                            <h3 class="product-title-bsk">${product.name}</h3>
                            <p class="product-price-bsk">Цена: ${element.productInfo.price} Грн.</p>
                            <p class="product-time-bsk">Время покупки: ${formattedDateTime}</p>
                        </div>
                    </div>
                `;
        })
        productsBasketPop.classList.remove('hidden');
        overlayPop.classList.remove('hidden');
    }
    
    function getFormatedTime(time){
        const date = new Date(time);
        const formattedTime = `
        ${String(date.getDate()).padStart(2,'0')}.${String(date.getMonth() + 1).padStart(2,'0')}.${date.getFullYear()} 
        ${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}:${String(date.getSeconds()).padStart(2,'0')}`
        return formattedTime;
    }
    
    function deleteFromBusket(target) {
        const deleteBlock = target.parentNode;
        localStorage.removeItem(deleteBlock.id);
        productsBasketPop.removeChild(deleteBlock);
    }
});
