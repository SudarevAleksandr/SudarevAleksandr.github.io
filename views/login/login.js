import Input from '../../blocks/input/input';
import Button from '../../blocks/button/button';

import View from '../view';
import style from './login.scss';
import template from './login.pug';
import A from "../../blocks/a/a";

export default class LoginView extends View {

    get bemName() {
        return 'login-view';
    }

    constructor({el}) {
        super({el});

        this.render(template);

        this.name = new Input({
            placeholder: 'Имя'
        });

        this.pwd = new Input({
            placeholder: 'Пароль',
            type: 'password'
        });


        this.pwd.onInput = function (value) {
            console.log(value);
        };

        this.a = new A({
            text: 'Регистрация',
            href: '#signup'
        });

        this.button = new Button({
            text: 'Войти',
            type: 'submit'
        });

        let self = this;
        this.button.onClick = function () {
            let name = self.name.el.value;
            let password = self.pwd.el.value;
            if (dataBase.db[name] ===  password) location.hash='#chat';
        };


        this
            .addBlock('name', this.name)
            .addBlock('pwd', this.pwd)
            .addBlock('submit', this.button)
            .addBlock('a', this.a);
    }

}