import List from '../../blocks/list/list';
import Button from '../../blocks/button/button';
import View from '../view';
import style from './users.scss';
import template from './users.pug';
import Link from "../../blocks/link/link";

export default class UsersView extends View {

    get bemName() {
        return 'users-view';
    }

    constructor({el}) {
        super({el});
        this.render(template);


        this.link = new Link({
            text: 'Чат ',
            href: '#chat',
            modifier: 'link__header'
        });

        this
            .addBlock('link', this.link)
    }

}