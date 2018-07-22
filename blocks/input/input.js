import Block from '../block';
import template from './input.pug';
import style from './input.scss';

export default class Input extends Block {

    get name () {
        return 'input';
    }

    /**
     * Input
     * @param {Object} obj
     * @param {string} obj.placeholder - текст кнопки,
     * @param {string} [obj.type] - тип инпута (по умолчанию text)
     */
    constructor({ placeholder, type = 'text', value='' }) {
        super();

        this.el.classList.toggle('input', true);

        this.el.placeholder=placeholder;
        this.el.value=value;
        this.el.type=type;

        this.el.addEventListener('input', event => this.onInput(event));

    }

    /**
     * @override
     */
    onInput(event) {

    }

    getValue() {
        return this.input.value;
    }

}
