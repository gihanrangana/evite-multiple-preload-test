import { BrowserWindow, Menu } from "electron";

const generateMenu = (win: BrowserWindow) => {

    const menu = Menu.buildFromTemplate([
        {
            label: "📋 Copy",
            role: "copy"
        },
        {
            label: "📄 Paste",
            role: "paste"
        },
        {
            label: "✂️ Cut",
            role: "cut"
        },
        { type: "separator" },
        {
            label: "🔄️ Reload",
            click: () => win?.reload(),
            accelerator: "CmdOrCtrl+R"
        },
        {
            label: "🔧 Inspect Elements",
            click: () => win?.webContents.openDevTools(),
            accelerator: "CmdOrCtrl+Shift+I"
        }
    ])

    return menu;

}

export default generateMenu;