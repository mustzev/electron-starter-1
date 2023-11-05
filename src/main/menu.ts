import { Menu, MenuItem, MenuItemConstructorOptions, ipcMain } from 'electron'

const template: (MenuItemConstructorOptions | MenuItem)[] = [{
   label: 'Pages',
   submenu: [{
      label: 'Home',
      click: () => ipcMain.emit('nav-to-home')
   }, {
      label: 'Page 1',
      click: () => ipcMain.emit('nav-to-page1')
   }, {
      label: 'Page 2',
      click: () => ipcMain.emit('nav-to-page2')
   }]
}]

const menu = Menu.buildFromTemplate(template)

function createMenu() {
   // to do
}

export default menu
