
import { useEffect, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"

function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(() => {
		if (typeof window !== 'undefined' && window.matchMedia) {
			return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
		}
		return 'light'
	})

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme(prev => prev === 'light' ? 'dark' : 'light')
	}
	return (
		<ThemeContext value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext>
	)
}

export default ThemeProvider