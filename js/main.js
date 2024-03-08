import { PROTOCOL } from './common.js';
const inputUrl = document.querySelector('.url-block__input');
const inputBtn = document.querySelector('.url-block__input-btn');

inputBtn.addEventListener('click',() => {

    const newValidUrl = createValidUrlHref(inputUrl.value.trim());
    console.log(newValidUrl);
})

function createValidUrlHref(string) {

    if (!string.includes('://')) {
        string = `${PROTOCOL.default}//${string}`;
    } 

    try {

        const url = new URL(string);

        if (url.protocol === PROTOCOL.invalid){
            url.protocol = PROTOCOL.default;
        }

        return url.href;

    } catch (err) {
        console.log('Помилка створювання URL');
        return null;
    }
}