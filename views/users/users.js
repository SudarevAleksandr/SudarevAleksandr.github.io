import List from '../../blocks/list/list';
import Button from '../../blocks/button/button';
import View from '../view';
import style from './users.scss';
import template from './users.pug';
import A from "../../blocks/a/a";

export default class UsersView extends View {

    get bemName() {
        return 'users-view';
    }

    constructor({el}) {
        super({el});
        this.render(template);

        this.list = new List({
            user:[
                {name: 'Света Иванова', id: 1},
                {name: 'Коля Петров', id: 2},
                {name: 'Вася Сидоров', id: 3},
                {name: 'Маша Лебедев', id: 4}
            ]
        });

        this.a = new A({
            text: 'Чат ',
            href: '#chat'
        });

        this
            .addBlock('list', this.list)
            .addBlock('a', this.a)
    }

}