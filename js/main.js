
const textBlock = document.querySelector(".block-word");
const banWords =["підманула","підвела","понеділок", "вівторок", "середу", "четвер", "п’ятницю", "суботу", "неділю"];

banOnBadWords();


function banOnBadWords() {
let text = textBlock.innerHTML
const regex = new RegExp(banWords.join("|"), "gi");

let result = text.replaceAll(regex,function(badWord){
    return '*'.repeat(badWord.length);
});

// мій альтернавний метод код працє так само може краще ?

// let result = text;
// let badWord;
// while((badWord = regex.exec(text)) !== null){
//     let changeWord = '*'.repeat(badWord[0].length)
//     result = result.split(badWord).join(changeWord);
// }

textBlock.innerHTML = result;
};