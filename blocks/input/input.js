import Block from '../block';
import template from './input.pug';
import style from './input.scss';

export default class Input extends Block {

    get name () {
        return 'div';
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

        this.el.innerHTML = template({
            placeholder: placeholder,
            value: value,
            type: type
        });

        // TODO поправить по БЭМ
        this.input = this.el.querySelector('input');
        this.input.addEventListener('input', event => this.onInput(event));
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
