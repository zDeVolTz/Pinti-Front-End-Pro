const catButton = document.querySelector('.cat-button');
const catButtonBlock = document.querySelector('.button-block');
let isAnimating = false;
catButton.addEventListener('click',() => {
    if (!isAnimating) {
        isAnimating = true;

        setTimeout(() => {
            catButton.classList.add('hidden');
            setRandomImage(randomIntFromInterval(1, 9));
        }, 600);

        const catPicture = document.getElementsByClassName('cat-image')[0];

        setTimeout(() => {
            catButton.classList.remove('hidden');
            isAnimating = false;
        }, 1400);

        catPicture.setAttribute("src", './images/cat.gif');
    }
});

function setRandomImage(rndInt){
    const getContainer = document.querySelector(".cat-section");
    let catImgContainer = document.querySelector('.picture-cat--contaier');
    if(!catImgContainer){
        let pictureBlock = document.createElement("div");
        pictureBlock.className = "picture-cat--contaier";
        pictureBlock.innerHTML = `<img src='./images/${rndInt}.jpg' class ='picture-cat'>`;
        getContainer.append(pictureBlock);
    }
    if(catImgContainer){
     catImgContainer.innerHTML = `<img src='./images/${rndInt}.jpg' class ='picture-cat'>`;
    }
   
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


