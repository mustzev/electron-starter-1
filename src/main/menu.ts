import { Menu, MenuItem, MenuItemConstructorOptions, app } from 'electron'

export function createMenu() {
   const template: (MenuItemConstructorOptions | MenuItem)[] = [{
      label: app.name,
      role: 'appMenu'
   }, {
      label: 'Pages',
      submenu: [{
         label: 'Home',
         click: (menuItem, browserWindow, event) => {
            browserWindow.webContents.send('nav-to-home')
         }
      }, {
         label: 'Page 1',
         click: (menuItem, browserWindow, event) => {
            browserWindow.webContents.send('nav-to-page1')
         }
      }, {
         label: 'Page 2',
         click: (menuItem, browserWindow, event) => {
            browserWindow.webContents.send('nav-to-page2')
         }
      }]
   }, {
      role: 'viewMenu'
   }, {
      role: 'windowMenu'
   }]

   const menu = Menu.buildFromTemplate(template)
   Menu.setApplicationMenu(menu)
}
