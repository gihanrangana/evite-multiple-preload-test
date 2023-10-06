/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserWindow, ipcMain } from "electron"
import path from 'node:path'


const ipcMainHandler = () => {

	ipcMain.on("open-mobile-view", (_event, params) => {

		let win: BrowserWindow | null = new BrowserWindow({
			width: params.width,
			height: params.height,
			webPreferences: {
				nodeIntegration: true, // Enable Node.js integration
				webviewTag: true, // Enable webview tag
				contextIsolation: true,
				preload: path.join(__dirname, 'childPreload.js')
			}
		})

		win.loadURL(params.url)

		win.on('close', () => {
			win = null
		})
	})

}


export default ipcMainHandler