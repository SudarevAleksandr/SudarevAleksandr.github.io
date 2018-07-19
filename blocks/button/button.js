import Block from '../block';
import style from './button.scss';
import template from './button.pug';

export default class Button extends Block {

    get name() {
        return 'div';
    }

    /**
     * Кнопка
     * @param {Object} obj
     * @param {string} obj.text - текст кнопки
     * @param {string} [obj.type]
     */

    constructor({ text, style='button__default', type='button' }) {

        super();

        this.el.classList.toggle('button');

        this.el.innerHTML = template({
            text: text,
            type: type,
            style: style
        });

        this.button = this.el.querySelector('button');
        this.button.addEventListener('click', event => this.onClick(event));

    }

    onClick(event){

    }
}
