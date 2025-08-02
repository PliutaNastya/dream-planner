import { RouterProvider } from 'react-router'
import './../../src/App.scss'
import router from './router/routes'

function App() {
	return <RouterProvider router={router} />
}

export default App
