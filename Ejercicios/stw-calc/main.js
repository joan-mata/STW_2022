// This is NodeJS.

const { app } = require('electron')
const { BrowserWindow } = require('electron')

app.on('window-all-closed', app.quit);

app.whenReady().then(() => {
  const win = new BrowserWindow({width: 1200, height: 600, frame: true, resizable: false, });
  win.removeMenu();
  win.loadFile('index.html');
  win.webContents.openDevTools() // Comment this line when done debugging.
});
