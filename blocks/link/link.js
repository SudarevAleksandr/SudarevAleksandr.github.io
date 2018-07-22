import Block from '../block';
import style from './link.scss';
import template from './link.pug';

export default class Link extends Block {

    get name() {
        return 'a';
    }

    /**
     * Кнопка
     * @param {Object} obj
     * @param {string} obj.text - текст кнопки
     * @param {string} [obj.type]
     */

    constructor({ text, href='#', modifier}) {

        super();

        this.el.classList.toggle('link');
        if (modifier) this.el.classList.add(modifier);
        this.el.innerHTML = text;
        this.el.href = href;


    }
}