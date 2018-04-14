import Debug from 'debug';
import 'babel-polyfill';

const debug = Debug('Mr.Papper::ODFLoader');

class Loader {
    constructor() {
        this.dispatch = null;
        this.store = null;
    }

    init(store) {
        this.dispatch = store.dispatch;
        this.store = store;
    }

    async loadFolder() {
        debug('load paper folder');
        return 1;
    }
}

const loader = new Loader();
export default loader;
