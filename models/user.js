const BASE_URL = 'https://murmuring-cove-73426.herokuapp.com/users';

export default class User {

    constructor() {

    }

    /**
     * @param method
     * @param url
     */
    request(method, url, body) {
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

            xhr.send(JSON.stringify(body));
        });
    }

    login(login, password) {

    }

    signup(login, password, passwordRepeat) {

        return new Promise((resolve, reject) => {

            if (password !== passwordRepeat) {
                reject('invalid password repeat');
                return;
            }

            this.request('POST', '/signup', {
                login,
                password,
                passwordRepeat
            }).then(resolve, reject);

        });

    }

}