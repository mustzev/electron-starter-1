import { createHashRouter } from 'react-router-dom'
import Home from '../pages/home/home'
import Page1 from '../pages/page1/page1'
import Page2 from '../pages/page2/page2'

const router = createHashRouter([{
   path: '/',
   element: <Home />
}, {
   path: '/page1',
   element: <Page1 />
}, {
   path: '/page2',
   element: <Page2 />
}])

window.electron.ipcRenderer.on('nav-to-home', () => {
   router.navigate('/')
})

window.electron.ipcRenderer.on('nav-to-page1', () => {
   router.navigate('/page1')
})

window.electron.ipcRenderer.on('nav-to-page2', () => {
   router.navigate('/page2')
})

export default router
