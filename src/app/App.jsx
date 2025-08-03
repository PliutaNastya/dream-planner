import { RouterProvider } from 'react-router'
import './../../src/App.scss'
import router from './router/routes'
import ThemeProvider from './providers/ThemeProvider'

function App() {
	return (
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	)
}

export default App
