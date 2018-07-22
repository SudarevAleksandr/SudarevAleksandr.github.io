import Messages from '../../blocks/messages/messages';
import Textarea from '../../blocks/textarea/textarea';
import Link from '../../blocks/link/link';
import View from '../view';
import style from './chat.scss';
import template from './chat.pug';

export default class ChatView extends View {

    get bemName() {
        return 'chat-view';
    }

    constructor({el}) {
        super({el});

        this.render(template);

        this.messages = new Messages({
            message:[
                {
                    text: 'Тестовый текст',
                    user: 'Маша Петрова',
                    time: '10:30',
                    style: 'received'
                },
                {
                    text: 'Тестовый текст сообщения',
                    user: 'Петя Иванов',
                    time: '12:30',
                    style: 'sent'
                },
                {
                    text: 'Длинный тестовый текст сообщения Длинный тестовый текст сообщения Длинный тестовый текст сообщения ',
                    user: 'Маша Петрова',
                    time: '12:40',
                    style: 'received'
                },
                {
                    text: 'Тест',
                    user: 'Петя Иванов',
                    time: '12:45',
                    style: 'sent'
                },
                {
                    text: 'Тестовый текст сообщения',
                    user: 'Петя Иванов',
                    time: '12:53',
                    style: 'sent'
                }

            ]
        });

        this.textarea = new Textarea({
            placeholder: 'Начните набирать сообщение'
        });

        this.link = new Link({
            text: 'Контакты',
            href: '#users',
            modifier: 'link__header'
        });

        this
            .addBlock('messages', this.messages)
            .addBlock('textarea', this.textarea)
            .addBlock('link', this.link)

    }

}