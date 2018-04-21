import Debug from 'debug';

const debug = Debug('Mr.Papper::Utils::storageLoader');

class StorageLoader {
    constructor() {
        this.dispatch = null;
        this.store = null;
    }

    init(store) {
        this.dispatch = store.thispatch;
        this.store = store;
    }

    saveUserInfo(info) {
        localStorage.setItem('name', info.name);
        localStorage.setItem('dir', info.dir);
    }

    checkUserInfo() {
        const name = localStorage.name;
        if(!name || name === '') return false;
        return true;
    }

    loadUserInfo() {
        return {
            user: localStorage.getItem('name'),
            dir: localStorage.getItem('dir')
        };
    }

    clearUserInfo() {
        localStorage.removeItem('name');
        localStorage.removeItem('dir');
    }
}

const storageLoader = new StorageLoader();
export default storageLoader;
