export default class DataBase {

    constructor() {
        this.db = {};
    }

    /**
     * Добавить новый маршрут
     * @param {string} path - маршрут
     * @param {View} view - вьюха которая должна быть показана по маршруту
     */
    addUser(name, password) {
        this.db[name] = password;
        return this;
    }


    _onRoute(path) {
        path = path.replace('#', '');

        let view = this.routes[path];

        if (this.current) {
            this.current.hide();
        }

        if (view) {
            view.show();
            this.current = view;
        }

    }

    start() {

        window.addEventListener('hashchange', () => {
            this._onRoute(location.hash);
        });

        this._onRoute(location.hash);
    }


}