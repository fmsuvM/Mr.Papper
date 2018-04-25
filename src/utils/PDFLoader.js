import Debug from 'debug';
import fs from 'fs-extra';
import paperlist from '../data/paperList.json';
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

    diffArray(arr1, arr2) {
        return arr1
            .concat(arr2)
            .filter(item => !arr1.includes(item) || !arr2.includes(item));
    }

    async loadDir(_path) {
        const files = await fs.readdir(_path);
        const diff = this.diffArray(
            paperlist['paper-list']['registered'],
            files
        );
        const registered = this.diffArray(files, diff);
        return {
            registered: registered,
            unregistered: diff
        };
    }
}

const loader = new Loader();
export default loader;
