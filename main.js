const smileImg = document.querySelectorAll('.smile-gif');
const smileBlock = document.querySelector('.smile-gif-container');

smileImg.forEach((element) => {
    const divCount = document.createElement('div');
    divCount.className = "count-block";
    divCount.innerHTML = `<p class="count">0</p>`;
    divCount.insertBefore(element, divCount.firstChild);
    smileBlock.append(divCount);
    element.addEventListener('click', () => {
        const count = element.nextElementSibling;
        let value = +count.innerHTML;
        count.innerHTML = `${value + 1}`;
    });
});



