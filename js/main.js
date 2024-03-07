const swiperBlocks = document.querySelectorAll(".swiper");

const imgsSwiper = ['../img/img-card/1.jpg','../img/img-card/2.jpg','../img/img-card/3.jpg','../img/img-card/4.jpg','../img/img-card/5.jpg','../img/img-card/6.jpg']

const paramSlider = {
    isAnimating : false,
    animationTime : 1000,
    infinityRight : false,
    infinity : false, 
    standart : false,
}

swiperBlocks.forEach(element => {

    if(!checkImgsArr()) return;

    let options = {...paramSlider};

    if(element.classList.contains("swiper--infinity-right")){
        options.infinityRight = true;
    } else if (element.classList.contains("swiper--infinity")){
        options.infinity = true;
    } else {
        options.standart = true;
    }

    renderSwiper(element);
    checkSwiperOption(element,options);  
    swipe(element,options);

})


function renderSwiper(element) {

    let swiperBlocksHTML = '';
    imgsSwiper.forEach((img, index) => {
        swiperBlocksHTML += `<div class="${index === 0  ? 'swiper__card active' : 'swiper__card'}" data-id="${index + 1}" style="background: url('${img}') center no-repeat; background-size: cover; background-clip: content-box"></div>`;
    });
      
    element.innerHTML = 
        `<div class="swiper__block">
            ${swiperBlocksHTML}
        </div>
        <div class="swiper__btn-block">
            <button class="swiper__prev-btn hidden"></button>
            <button class="swiper__next-btn hidden"></button>
        </div>
        `;

}

function checkSwiperOption(element,options) {

    if (imgsSwiper.length > 1) {
        const nextBtn = element.querySelector(".swiper__next-btn.hidden");
        nextBtn.classList.remove('hidden');
    }
    
    if(options.infinity && imgsSwiper.length > 1) {
        const prevBtn = element.querySelector(".swiper__prev-btn.hidden");
        prevBtn.classList.remove('hidden');
    }

}

function swipe(element,options) {

    const swiperImgs = element.querySelector(".swiper__block");
    const buttons = {
        prevBtn: element.querySelector(".swiper__prev-btn"),
        nextBtn: element.querySelector(".swiper__next-btn")
    };

   buttons.nextBtn.addEventListener("click", (event) => {
    target = event.target;
    swipeBtn(target,buttons,swiperImgs,options);
   });

   buttons.prevBtn.addEventListener("click", (event) => {
    target = event.target;
    swipeBtn(target,buttons,swiperImgs,options);
   });

}


function swipeBtn(target, buttons, swiperImgs, options) {
    if (options.isAnimating) return; 
    
    
    const activeImg = swiperImgs.querySelector(".swiper__card.active");
    let index;

    if (target.classList.contains("swiper__next-btn")) {
        index = parseInt(activeImg.dataset.id) + 1;
        if ((options.infinityRight || options.infinity) && index > imgsSwiper.length) {
            index = 1; 
        }
    } else if (target.classList.contains("swiper__prev-btn")) {
        index = parseInt(activeImg.dataset.id) - 1;
        if (options.infinity && index - 1 < 0) {
            index = imgsSwiper.length; 
        }
    }

    let targetImg = swiperImgs.querySelector(`.swiper__card[data-id="${index}"]`);
    
    if (targetImg) {

        options.isAnimating = true; 

        if(options.standart){
            if (index > imgsSwiper.length - 1) {
               buttons.nextBtn.classList.add("hidden");
           } else {
               buttons.nextBtn.classList.remove("hidden");
           }
        }

        if(options.standart || options.infinityRight){
            if (index - 1 === 0) {
                buttons.prevBtn.classList.add("hidden");
            } else {
                buttons.prevBtn.classList.remove("hidden");
            }
        }

        targetImg.classList.add("active");
        activeImg.classList.remove("active");

        if (target.classList.contains("swiper__next-btn")) {
            targetImg.classList.add("left-animation");
            activeImg.classList.add("left-animation");
        } else {
            targetImg.classList.add("right-animation");
            activeImg.classList.add("right-animation");
        }
        
        setTimeout(() => {
            options.isAnimating = false;
            activeImg.classList.remove("left-animation", "right-animation");
            targetImg.classList.remove("left-animation", "right-animation");
        }, options.animationTime);

    }

}

function checkImgsArr() {
    return Array.isArray(imgsSwiper) && imgsSwiper.length  > 0;
}



