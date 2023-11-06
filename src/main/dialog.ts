import { BrowserWindow, dialog } from 'electron'

export function showDialogs(window: BrowserWindow) {
   window.webContents.ipc.on('show-message-dialog', (event, message) => {
      dialog.showMessageBox({ message })
   })

   window.webContents.ipc.on('show-error-dialog', (event, title, content) => {
      dialog.showErrorBox(title, content)
   })
}
