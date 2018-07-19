import Block from '../block';
import style from './a.scss';
import template from './a.pug';

export default class A extends Block {

    get name() {
        return 'a';
    }

    /**
     * Кнопка
     * @param {Object} obj
     * @param {string} obj.text - текст кнопки
     * @param {string} [obj.type]
     */

    constructor({ text, href='#' }) {

        super();

        this.el.classList.toggle('a');
        this.el.innerHTML = text;
        this.el.href = href;


    }
}