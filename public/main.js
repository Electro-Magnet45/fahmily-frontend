const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

const createWindow = () => {
  const mainWin = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    icon: __dirname + "./favicon.ico",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWin.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  ipcMain.on("minimizeApp", () => {
    mainWin.minimize();
  });
  ipcMain.on("maximizeRestoreApp", () => {
    if (mainWin.isMaximized()) return mainWin.restore();
    mainWin.maximize();
  });
  ipcMain.on("closeApp", () => {
    mainWin.close();
  });
};

app.on("ready", createWindow);

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
