import Debug from 'debug';
import 'babel-polyfill';

const debug = Debug('Mr.Papper::PDFLoader');

class Loader {
    constructor() {
        this.dispatch = null;
        this.store = null;
    }

    init(store) {
        this.dispatch = store.dispatch;
        this.store = store;
    }

    async loadFolder(text) {
        debug('load paper folder:', text);
        return {
            hoge: 'fuga',
            fuga: 'hoge',
            receive: text
        };
    }
}

const loader = new Loader();
export default loader;
