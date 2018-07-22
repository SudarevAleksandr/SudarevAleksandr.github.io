const BASE_URL = 'https://murmuring-cove-73426.herokuapp.com/users';

export default class User {

    constructor() {

    }

    /**
     * @param method
     * @param url
     * @param body
     * @param headers - массив заголовков, {name, value}
     */
    request(method, url, body, headers) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.open(method, BASE_URL + url);

            xhr.addEventListener('readystatechange', () => {

                if (xhr.readyState !== 4) {
                    return;
                }

                if (xhr.status > 299) {
                    reject(xhr.responseText);
                    return;
                }

                resolve(xhr.responseText);
            });
            for (let h in headers){
                xhr.setRequestHeader(h, headers[h]);
            }

            xhr.send(JSON.stringify(body));
        });
    }

    login(login, password) {
        return new Promise((resolve, reject) => {

            if (password.length<3) {
                reject('пароль меньше 3 символов');
                return;
            }

            this.request('post', '/login', {
                login,
                password
            }).then(resolve, reject);

        });
    }

    signup(login, password, passwordRepeat) {

        return new Promise((resolve, reject) => {

            if (password !== passwordRepeat) {
                reject('invalid password repeat');
                return;
            }

            if (password.length<3) {
                reject('пароль меньше 3 символов');
                return;
            }

            this.request('POST', '/signup', {
                login,
                password,
                passwordRepeat
            }).then(resolve, reject);

        });

    }

    getList(auth) {

        return new Promise((resolve, reject) => {

            this.request('GET', '', '',{
                'Authorization' : auth
            }).then(resolve, reject);

        });

    }


}