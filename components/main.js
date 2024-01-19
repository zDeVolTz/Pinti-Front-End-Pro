const data = [
    {
        id : 36667,
        avatar: './img/Elrond.jpg',
        name: 'Элронд',
        text: 'Чужестранцы из дальних краёв, старые друзья... вас позвали сюда, чтобы ответить на угрозу Мордора. Средиземье на грани уничтожения. Никому не избежать этого. Вы или объединитесь или погибнете. У каждого народа своя судьба, но это общий рок. Покажи им кольцо, Фродо'
    },
    {
        id : 36668,
        name: 'Фродо',
        avatar: './img/Frodo.jpg',
        text: '',
        image: './img/Ring.jpg'
    },
    {
        id : 36669,
        name: 'Боромир',
        avatar: './img/Boromir.jpg',
        text: 'Это... дар врагам Мордора. Почему не использовать кольцо? Мой отец, наместник в Гондоре, долго сдерживал натиск Мордора. Ценой крови нашего народа уцелели ваши земли! Дайте Гондору оружие врага, позвольте использовать против него!'
    },
]

class MessageManager {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.container.className = 'users__testimonials';
        this.userMessagesLists = document.createElement('ul');
        this.userMessagesLists.className = 'users__messages';
    }
    addMessages() {
        data.forEach((message) => {
            if (message.image) {
                this.userMessagesLists.innerHTML += `<li class="users__message"><img class="users__avatar" src='${message.avatar}'><div class="users__message-block"><h3>${message.name}</h3><img class='users__image' src='${message.image}'></div></li>`;
            } else {
                this.userMessagesLists.innerHTML += `<li class="users__message"><img class="users__avatar" src='${message.avatar}'><div class="users__message-block"><h3>${message.name}</h3><p>${message.text}</p></div></li>`;
            }   
        });
        this.container.append(this.userMessagesLists);
    }
    showMessagesWithDelay(delay) {
        const liList = this.userMessagesLists.querySelectorAll('.users__message');
        liList.forEach((li,index) => {
            setTimeout(() => {
                li.classList.add('show');
            },delay * index);
        });
    }
}

const messageManager = new MessageManager('testimonials');
messageManager.addMessages();
messageManager.showMessagesWithDelay(1500);
