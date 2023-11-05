import { useEffect, useState } from 'react'

export default function Home() {
   const [versions] = useState(window.electron.process.versions)

   useEffect(() => {
      window.electron.ipcRenderer.on('nav-to-home', (e) => {
         console.log(e)
      })
   }, [])

   return (
      <div className="">
         Home!
         <div className="">
            Versions<br />
            Node: {versions.node}<br />
            Chrome: {versions.chrome}<br />
            Electron: {versions.electron}
         </div>
      </div>
   )
}
