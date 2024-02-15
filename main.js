
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
    
    const validitionForm = {
        nameInput : {
            title: "ФИО",
            valid : false,
            description : "",
            invalidMessage  : "Неправильно ведено Полное имя: укажите ФИО через пробел"
        },
        cityInput : {
            title: "Адресс",
            valid : false,
            description : "",
            cityId : "",
            invalidMessage  : "Неправильно указан город: выберите город из списка"
        },
        addressPostInput : {
            title: "Отделение",
            valid : false,
            description : "",
            deliveryPostId : "",
            invalidMessage : "Неправильно указан адресс: выберите отделение из списка"
        },
        paid : {
            title : "Ваш способ оплаты",
            valid : false,
            name : "paymentType",
            description: "",
            invalidMessage  : "Не выбран способ оплаты"
        },
        prodQuantityInput : {
            title : "Количество товара",
            valid : false,
            description : "",
            invalidMessage  : "Неверно указано количество укажите цело положительное число"
        },
        commentsTextarea : {
            title : "Комментарий",
            valid : false,
            description : "",
            invalidMessage  : "Неверно указан комментарий"
        }
    }

    const categoryProduct = document.getElementById('category-lists');
    const productsLists = document.querySelector(".product-list");
    const productsTitle = document.querySelector(".product-title");
    const productsBasket = document.querySelector(".products-basket-block");
    const productsBasketPop = document.querySelector(".products-basket-popup");
    const overlayPop = document.querySelector(".overlay");

    // Новый код
    const API = "9f543c3fa0e4f5382f0e14d717d6fa58";
    const url = "https://api.novaposhta.ua/v2.0/json/";
    const popUpBlock = document.querySelector('.buy-form-popup--block')
    const popUpBuyBlock = document.querySelector('.buy-form-popup');
    const popUpBuyOverlay = document.querySelector('.byu-form-overlay');
    const addressList = document.getElementById('addressList');
    const deliveryAdressList = document.getElementById('addressPostList');
    const addressFormList = document.querySelectorAll('.address-form-list');
    const formBuyProduct = document.getElementById('formBuyProduct');
    const postPaidRadio = document.getElementById('postPaid');
    const onlinePaidRadio = document.getElementById('onlinePaid');
    const labelAllPaidForm = document.querySelectorAll('.label-paid-form');
    const btnCloseFormBuy =  document.querySelector('.form-buy--close-pop');
    const inputElements = {
        nameInput: document.getElementById('nameInput'),
        cityInput: document.getElementById('cityInput'),
        addressPostInput: document.getElementById('addressPostInput'),
        paid : document.getElementById('paid'),
        prodQuantityInput : document.getElementById('prodQuantity'),
        commentsTextarea : document.getElementById('comments')
    };
    let loading = false;


    categoryProduct.addEventListener('click', function(event) {
        let target = event.target;
        if (target.tagName === "LI"){
            event.stopPropagation();
            if(productsTitle.querySelector('.order-form-block')){
            cleanerOrderBlock();
            }
            getProductList(target);
        }
    },true);
    
    productsBasket.addEventListener('click',function(event){
        let target = event.target;
        event.stopPropagation();
        if (target.classList.contains("products-basket-btn")){
            if(productsTitle.querySelector('.order-form-block')){
                cleanerOrderBlock();
            }
            renderProductsBusket();
        } else if (target.classList.contains("product-bsk-delete")){
            deleteFromBusket(target);
        } else if (target.classList.contains("product-bsk--close-pop")){
            productsBasketPop.classList.add('hidden');
            overlayPop.classList.add('hidden');
        } else if (target.classList.contains("product-bsk--block") || target.closest('.product-bsk--block')){
            target = target.closest('.product-bsk--block');
            productsBasketPop.classList.add('hidden');
            overlayPop.classList.add('hidden');
            let productEntry  = JSON.parse(localStorage.getItem(target.id));
            const product = products.find(item => item.id === productEntry.id);
            getProductCard(product);
        }
    });
    
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
        divCard.innerHTML += 
                    `<button type="button" class="buy-button"> Купить ${card.price} Грн </button>
                    <h3 class="order-inform-price hidden">Вы купили на сумму ${card.price} Грн<h3>
                    <span class ='buy-product-messeage'>Вы успешно купили товар</span>`;
        productsTitle.append(divCard);
        divCard.addEventListener('click', function(event) {
            let target = event.target;
            if (target.className === "buy-button"){
                event.stopPropagation();
                setProductInStorage(card);
                let buyMessege = document.querySelector(".buy-product-messeage");
                buyMessege.classList.add("visible");
                popUpBlock.id = card.id;
                popUpBuyOverlay.classList.remove('hidden');
                popUpBuyBlock.classList.remove('hidden');
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





    //Новый код 
    cityInput.addEventListener('keyup', function(event) {
        const target = event.target;
        target.setAttribute('autocomplete', 'off');
        const cityName = target.value.trim();
    
        if(isNumber(cityName)){
            return
        }else if (loading) {
            return;
        }
        inputElements.addressPostInput.disabled = true;
        inputElements.addressPostInput.value = '';
        inputElements.cityInput.dataset.cityId = '';
        inputElements.addressPostInput.dataset.deliveryPostId = '';
        
        fetchAddresses(cityName, "cityName")
            .then(data => {
                renderFormAdressList(addressList,data);
            })
            .catch(error => console.error("не удалось получить список городов"))
            .finally(() => {
                loading = false;
                if(isEmptyOrWhitespace(cityName)){
                    addressList.classList.add("hidden");
                    target.setAttribute('autocomplete', 'on'); 
                } 
                else addressList.classList.remove('hidden');
                
            });
    });
    
    addressList.addEventListener('click', function(event) {
        const target = event.target;
        if (target.matches('li.addressList-item')) {
            addressPostInput.disabled = false;
            target.setAttribute('autocomplete', 'off');
            inputElements.cityInput.value = target.textContent;
            inputElements.cityInput.dataset.cityId = target.id;
            addressList.classList.add("hidden");
            const cityRef = target.id;
            fetchAddresses(cityRef,"cityRef")
                .then(data => {
                    renderFormAdressList(deliveryAdressList,data);
                })
                .catch(error => console.error("не удалось получить список отделений"))
        }
         else{
            addressList.classList.add("hidden");
        }
    });
    
    popUpBlock.addEventListener('click', (event) => {
        event.stopPropagation();
        addressFormList.forEach(element => {
            if (!element.classList.contains("hidden")) {
                element.classList.add('hidden');
            }
        });
    });
    
    formBuyProduct.addEventListener('submit', (event) => {
        event.preventDefault();
        let formValue = getFormValueForValid();
        formValue = addTrimToDescription(formValue);
        let validStatusForm = validateFormInput(formValue);
        if (!validStatusForm) {
            renderFormError(formValue, inputElements);
        } else {
            renderOrderBlockCard(formValue);
            cleanerBuyForm();
    
            const filteredFormValue = {};
            for (const key in formValue) {
                filteredFormValue[key] = {
                    title: formValue[key].title,
                    description: formValue[key].description
                };
            }
            const submit = new Promise((resolve, reject) => {
                fetch('https://devolt.free.beeceptor.com/', {
                    method: 'POST',
                    body: JSON.stringify(filteredFormValue),
                })
                .then(response => {
                    if (response.ok) {
                        const contentType = response.headers.get('content-type');
                        if (contentType && contentType.includes('application/json')) {
                            return response.json();
                        } else {
                            return response.text();
                        }
                    } else {
                        throw new Error('Шеф все пропало');
                    }
                })
                .then(data => {
                    resolve(data);
                    console.log("Печеньки успешно ушли на темную сторону!");
                })
                .catch(error => {
                    reject(error);
                });
            });
            
            submit.then(data => console.log(data)).catch(error => {
                console.error(error.message);
            });
            popUpBuyOverlay.classList.add('hidden');
            popUpBuyBlock.classList.add('hidden');
        }
       
    });
    
    addressPostInput.addEventListener('input', function(event) {
      const target = event.target;
      const postContent = target.value.trim().toLowerCase();
      target.setAttribute('autocomplete', 'off');
      if(isEmptyOrWhitespace(postContent) && deliveryAdressList.classList.contains('hidden')){
          target.setAttribute('autocomplete', 'on'); 
      } 
      addressPostInput.dataset.deliveryPostId = '';
      deliveryAdressList.classList.remove('hidden');
      addressPostList.querySelectorAll('li.addressPost-item').forEach(item => {
          const itemText = item.textContent.trim().toLowerCase();
          if (itemText.includes(postContent)) {
              item.classList.remove("hidden");
          } else {
              item.classList.add("hidden");
          }
      });
    });
    
    deliveryAdressList.addEventListener('click',function(event) {
      const target = event.target;
      deliveryAdressList.classList.add("hidden");
      if (target.matches('li.addressPost-item')) {
          addressPostInput.value = target.textContent;
          addressPostInput.dataset.deliveryPostId = target.id;
      } 
    })
    
    inputElements.commentsTextarea.addEventListener('input', () => {
        autoGrow(inputElements.commentsTextarea);
    });
    
    btnCloseFormBuy.addEventListener('click',() =>{
        cleanerBuyForm();
        popUpBuyOverlay.classList.add('hidden');
        popUpBuyBlock.classList.add('hidden');
    })
    
    
    function cleanerBuyForm() {
        const inputElements = formBuyProduct.querySelectorAll('input, textarea');
        const errorDivs = formBuyProduct.querySelectorAll('.error-form-block');
        const radioButtons = formBuyProduct.querySelectorAll('input[type="radio"]');

        popUpBlock.id = '';

        inputElements.forEach(element => {
            element.classList.remove('invalid');
            element.value = '';
            if (element.id === 'cityInput') {
                element.setAttribute('data-city-id', ''); 
            }
            if (element.id === 'addressPostInput'){
                element.setAttribute('data-delivery-post-id', '');
            }
        });
    
        errorDivs.forEach(div => {
            div.remove();
        });
        
        radioButtons.forEach(radio => {
            radio.checked = false;
        });
    }
    
    function cleanerOrderBlock() {
        productsTitle.innerHTML = ''
        productsTitle.classList.remove('order')
    }

    function autoGrow(element) {
      element.style.height = "auto";
      element.style.height = (element.scrollHeight) + "px";
    }
    
    function getFormValueForValid() {
        let currentValiditionForm = JSON.parse(JSON.stringify(validitionForm));
        const prodQuantityInputValue = inputElements.prodQuantityInput.value;
        const quantityValue = prodQuantityInputValue.split(".");
        const protectCityInputValue = protectFromXSS(inputElements.cityInput.value); 
        const protectPostInputValue = protectFromXSS(inputElements.addressPostInput.value);            
        const protectCommentValue = protectFromXSS(inputElements.commentsTextarea.value);
    
        currentValiditionForm.nameInput.description = removeExtraSpaces(inputElements.nameInput.value);
        currentValiditionForm.cityInput.description = protectCityInputValue;
        currentValiditionForm.cityInput.cityId = inputElements.cityInput.dataset.cityId;
        currentValiditionForm.addressPostInput.description = protectPostInputValue;
        currentValiditionForm.addressPostInput.deliveryPostId = inputElements.addressPostInput.dataset.deliveryPostId;
        currentValiditionForm.paid.description = postPaidRadio.checked ? labelAllPaidForm[0].textContent : onlinePaidRadio.checked ? labelAllPaidForm[1].textContent : '';
        currentValiditionForm.prodQuantityInput.description = quantityValue[0];
        currentValiditionForm.commentsTextarea.description = protectCommentValue;
        return currentValiditionForm;
    }
    
    const validateFormInput = (currentValidationForm) => {
        const { nameInput, cityInput, addressPostInput, paid, prodQuantityInput, commentsTextarea } = currentValidationForm;
    
        const isValidName = !isEmptyOrWhitespace(nameInput.description) && !hasSpecialCharacters(nameInput.description, currentValidationForm) && hasSpaceBetweenCharacters(nameInput.description);
        const isValidCity = !isEmptyOrWhitespace(cityInput.description) && !isEmptyOrWhitespace(cityInput.cityId);
        const isValidAddress = !isEmptyOrWhitespace(addressPostInput.description) && !isEmptyOrWhitespace(addressPostInput.deliveryPostId);
        const isValidPaid = !isEmptyOrWhitespace(paid.description);
        const isValidProdQuantity = !isEmptyOrWhitespace(prodQuantityInput.description) && isPositiveInteger(prodQuantityInput.description);
        const isValidComments = !isEmptyOrWhitespace(commentsTextarea.description) && !hasOnlyEnterCharacters(commentsTextarea.description);
    
        nameInput.valid = isValidName;
        cityInput.valid = isValidCity;
        addressPostInput.valid = isValidAddress;
        paid.valid = isValidPaid;
        prodQuantityInput.valid = isValidProdQuantity;
        commentsTextarea.valid = isValidComments;
    
        const validations = Object.values(currentValidationForm);
        const isAllValid = validations.every(element => element.valid);
        return isAllValid;
    };
    
    function fetchAddresses(value,type) {
        const fetchParametrs = {
           "cityName" : {
            apiKey: API,
            modelName: 'Address',
            calledMethod: 'searchSettlements',
            methodProperties: {
                CityName: value,
                Limit: '50',
                Page: '1'
                }
            },
            "cityRef" : {
                apiKey: API,
                modelName: 'Address',
                calledMethod: "getWarehouses",
                methodProperties: {
                    FindByString : "",
                    CityName : "",
                    CityRef : value,
                    Limit: '10000',
                    Language: 'UA',
                    Page: '1'
                }
            }
        }
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(
                    fetchParametrs[type]
                )
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Cервер ушел за печенькой');
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                alert('Не удалось получить данные');
            });
        });
    }
    
    function renderFormAdressList(container,data){
                container.innerHTML = '';
                let addresses;
                let parametrs;
                if(container.id === "addressPostList"){
                    addresses = data.data;
                    parametrs = ["addressPost-item","Number","Description"];
                    
                } else if (container.id === "addressList") {
                    addresses = data.data[0].Addresses;
                    parametrs = ["addressList-item","DeliveryCity","Present"];
                }
                addresses.forEach(address => {
                    container.innerHTML += `<li class=${parametrs[0]} id='${address[parametrs[1]]}'>${address[parametrs[2]]}</li>`;
                });
    }
    
    
    function renderFormError(formValue,inputElements){
    
        for (const key in formValue) {
            const errorElement = inputElements[key].nextElementSibling;
            if(!formValue[key].valid){
                const errorBlock = `<div class="error-form-block">${formValue[key].invalidMessage}</div>`;
                inputElements[key].classList.add('invalid');
                if (!errorElement.classList.contains('error-form-block')) {
                    inputElements[key].insertAdjacentHTML('afterend', errorBlock);
                }
            }else{
                if (errorElement.classList.contains('error-form-block')) {
                    errorElement.remove();
                }
                inputElements[key].classList.remove('invalid');
            }
        }
    }
    
    function renderOrderBlockCard(formValue){
        let content = `<h3>Данные Заказа</h3>`;
        for (const key in formValue) {
            content += `<div><p>${formValue[key].title} :</p><span>${formValue[key].description}</span></div>`;
        }
        
        productsTitle.innerHTML = `<div class="order-form-block">${content}</div>`;
        const product = products.find(item => item.id === +popUpBlock.id);
        getProductCard(product)
        const buyBtn = document.querySelector(".buy-button");
        const orderPrice = document.querySelector('.order-inform-price');
        buyBtn.classList.add("hidden");
        orderPrice.classList.remove("hidden");
        productsTitle.classList.add("order");
    }
    
    function protectFromXSS(input) { 
        let sanitizedInput = input.replace(/&/g,"&amp;");
        sanitizedInput = sanitizedInput.replace(/>/g, "&gt;");
        sanitizedInput = sanitizedInput.replace(/</g, "&lt;");
        return sanitizedInput;
    }
    
    function addTrimToDescription(formValue) {
        for (const key in formValue) {
            if ('description' in formValue[key]) {
                formValue[key].description = formValue[key].description.trim();
            }
        }
        return formValue;
    }
    
    function hasOnlyEnterCharacters(str) {
        str.replace(/\n/g, "").trim(); 
        return  str.length === 0;
    }
    
    function hasSpecialCharacters(input,currentValiditionForm) {
        if (input === currentValiditionForm.nameInput.description) {
            const regex = /[!@#$%^&*()_+=\[\]{};:"\\|,.<>\/?~0-9]/;
            return regex.test(input);
        }
    }
    
    function hasSpaceBetweenCharacters(input) {
        return /.\s.|\s.\s/.test(input);
    }
    
    function removeExtraSpaces(input) {
        return input.replace(/\s+/g, ' ');
    }
    
    function isNumber(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }
    
    function isPositiveInteger(value) {
        return Number.isInteger(+value) && +value > 0;
    }
    
    function isEmptyOrWhitespace(input) {
        return input.trim() === '';
    }


});
