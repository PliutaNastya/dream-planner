import { ThemeContext } from "@/app/context/ThemeContext"
import { useContext } from "react"
import Icon from "../Icon/Icon"

function ThemeToggle() {
	const { theme, toggleTheme } = useContext(ThemeContext)

	return (
		<div className="theme-toggle">
			<Icon name='sun-icon' />
			<label className="switch">
				<input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
				<span></span>
			</label>
			<Icon name='moon-icon' />
		</div>
	)
}

export default ThemeToggle