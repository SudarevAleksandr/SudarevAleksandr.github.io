import Router from './modules/router';
import DataBase from './modules/dataBase';


import LoginView from './views/login/login';
import SignupView from './views/signup/signup';
import ChatView from './views/chat/chat';
import UsersView from './views/users/users';



window.addEventListener('DOMContentLoaded', function () {
    let router = new Router();

    let loginView = new LoginView({
        el: document.querySelector('.view-container.js-login')
    });

    let signupView = new SignupView({
        el: document.querySelector('.view-container.js-signup')
    });

    let chatView = new ChatView({
        el: document.querySelector('.view-container.js-chat')
    });

    let usersView = new UsersView({
        el: document.querySelector('.view-container.js-users')
    });

    window.dataBase = new DataBase();

    router
        .route('login', loginView)
        .route('signup', signupView)
        .route('chat', chatView)
        .route('users', usersView);

    router.start();
});
