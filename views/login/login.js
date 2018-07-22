import Input from '../../blocks/input/input';
import Button from '../../blocks/button/button';

import View from '../view';
import style from './login.scss';
import template from './login.pug';
import Link from "../../blocks/link/link";
import User from "../../models/user";
import List from "../../blocks/list/list";

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

        this.link = new Link({
            text: 'Регистрация',
            href: '#signup'
        });

        this.button = new Button({
            text: 'Войти',
            type: 'submit'
        });



        this
            .addBlock('name', this.name)
            .addBlock('pwd', this.pwd)
            .addBlock('submit', this.button)
            .addBlock('link', this.link)


        this.user = new User();

        this.el.querySelector('form').addEventListener('submit', event => {
            event.preventDefault();

            this.user.login(
                this.name.el.value,
                this.pwd.el.value
            ).then(user => {
                let result = JSON.parse(user);
                location.hash = '#chat';
                return this.user.getList(result.auth);
            }).then(list => {
                let result = JSON.parse(list);
                let ul = new List({
                    user: result
                });
                (document.querySelector('.users-view__list')).appendChild(ul.el);
               }).catch(error => {
                alert(error);
            });

        });

    }

}