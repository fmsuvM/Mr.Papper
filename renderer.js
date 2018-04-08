const electron = require('electron');
const loadDevtool = require('electron-load-devtool');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 800
    });

    mainWindow.loadURL(`file://${__dirname}/build/index.html`);
    loadDevtool(loadDevtool.REACT_DEVELOPER_TOOLS);
    // mainWindow.openDevTools();

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function() {
    if(mainWindow === null) {
        createWindow();
    }
});
