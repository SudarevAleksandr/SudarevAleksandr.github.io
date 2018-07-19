import Input from '../../blocks/input/input';
import Button from '../../blocks/button/button';
import View from '../view';
import style from './signup.scss';
import template from './signup.pug';
import A from "../../blocks/a/a";

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

        this.a = new A({
            text: 'Логин',
            href: '#login'
        });

        let self = this;
        this.button.onClick = function () {
            let name = self.name.el;
            let password = self.pwd.el;
            let pwdRepeat =  self.pwdRepeat.el;
            if (password.value !== pwdRepeat.value) {
                pwdRepeat.style.borderColor = 'red';
            } else {
                if (!dataBase.db[name.value]) {
                    dataBase.addUser(name.value, password.value);
                    location.hash='#chat';
                } else {
                    if (dataBase.db[name.value] ===  password.value) location.hash='#chat';
                }
            }
        };

        this
            .addBlock('name', this.name)
            .addBlock('pwd', this.pwd)
            .addBlock('pwd-repeat', this.pwdRepeat)
            .addBlock('submit', this.button)
            .addBlock('a', this.a);
    }

}