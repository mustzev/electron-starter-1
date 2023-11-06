import { useState } from 'react'

export default function Home() {
   const [versions] = useState(window.electron.process.versions)

   function showMessageDialog() {
      window.electron.ipcRenderer.send('show-message-dialog', 'Message box showed')
   }

   function showErrorDialog() {
      window.electron.ipcRenderer.send('show-error-dialog', 'Error title', 'Error box showed')
   }

   return (
      <div className="">
         Home!
         <div className="">
            Versions<br />
            Node: {versions.node}<br />
            Chrome: {versions.chrome}<br />
            Electron: {versions.electron}
         </div>
         <div className="">
            <button onClick={showMessageDialog}>
               Show message
            </button>
            <button onClick={showErrorDialog}>
               Show error
            </button>
         </div>
      </div>
   )
}
