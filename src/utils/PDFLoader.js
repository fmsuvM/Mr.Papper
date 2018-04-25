import Debug from 'debug';
import fs from 'fs-extra';
import paperInfoFormat from '../data/formatPerPaper.json';
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
        const initpPaperList = await fs.readJson(
            `${__dirname}/../src/data/paperList.json`
        );
        const diff = this.diffArray(initpPaperList.paperList.registered, files);
        const registered = this.diffArray(files, diff);
        return {
            registered: registered,
            unregistered: diff
        };
    }

    async createPaperData(status) {
        const format = paperInfoFormat['paperInfo'];
        const newPaper = Object.assign({}, format, {
            originname: status.originname,
            title: status.title,
            subtitle: status.subtitle,
            tags: status.tags,
            authors: status.authors,
            publishDate: status.publissDate
        });
        const addPaperToList = status.originname;
        const currentPaperList = await fs.readJson(
            `${__dirname}/../src/data/paperList.json`
        );
        const currentPaperListLength =
            currentPaperList.paperList.registered.length;
        currentPaperList.paperList.registered[
            currentPaperListLength
        ] = addPaperToList;
        try{
            await fs.writeJson(`${__dirname}/../src/data/paperList.json`, {
                paperList: {
                    registered: currentPaperList.paperList.registered
                }
            });
        } catch(error) {
            debug('update paper list error: ', error);
        }
        try{
            await fs.writeJson(
                `${__dirname}/../src/data/paper/${status.originname}.json`,
                newPaper
            );
            return 'success';
        } catch(error) {
            debug('create new paper info error: ', error);
            return 'failed';
        }
    }
}

const loader = new Loader();
export default loader;
