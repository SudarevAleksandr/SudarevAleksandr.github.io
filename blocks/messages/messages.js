import Block from '../block';
import template from './messages.pug';
import style from './messages.scss';

export default class Messages extends Block {

    get name() {
        return 'div';
    }

    /**
     * Кнопка
     * @param {Object} obj
     * @param {string} obj.text - текст сообщения
     * @param {string} obj.style - стиль сообщения received, sent
     * @param {string} obj.user - имя отправителя сообщения
     * @param {string} obj.time - время отправки сообщения
     */
    constructor({ message }) {
        super();
        let list='';
        let scrollDiv=document.createElement('div');
        scrollDiv.classList.toggle('messages__scroll');
        for (let m of message) {
            list+= template({
                user: m.user,
                text: m.text,
                time: m.time,
                style: m.style
            });
        }
        scrollDiv.innerHTML=list;
        this.el.appendChild(scrollDiv);
        this.el.classList.toggle('messages');

    }

}
