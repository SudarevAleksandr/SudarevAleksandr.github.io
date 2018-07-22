import Input from '../../blocks/input/input';
import Button from '../../blocks/button/button';
import View from '../view';
import style from './signup.scss';
import template from './signup.pug';
import Link from "../../blocks/link/link";
import User from '../../models/user';

export default class SignupView extends View {

    get bemName() {
        return 'signup-view';
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

        this.pwdRepeat = new Input({
            placeholder: 'Повтор пароля',
            type: 'password-repeat'
        });

        this.button = new Button({
            text: 'Войти',
            type: 'submit'
        });


        this.link = new Link({
            text: 'Логин',
            href: '#login'
        });


        this.user = new User();


        this
            .addBlock('name', this.name)
            .addBlock('pwd', this.pwd)
            .addBlock('pwd-repeat', this.pwdRepeat)
            .addBlock('submit', this.button)
            .addBlock('link', this.link);



        this.el.querySelector('form').addEventListener('submit', event => {
            event.preventDefault();

            this.user.signup(
                this.name.el.value,
                this.pwd.el.value,
                this.pwdRepeat.el.value
            ).then(user => {
                let result = JSON.parse(user);
                location.hash = '#chat';
                console.log(result.auth);
                return this.user.getList(result.auth);
            }).then(
                list => {
                    console.log(list);
                }
            ).catch(error => {
                alert(error);
            });

        });

    }

}