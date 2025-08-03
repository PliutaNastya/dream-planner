import { routes } from "@/app/router/routes"
import { NavLink } from "react-router"
import getItemsForMainMenu from "@/shared/utils/getMenuFronRoutes"
import ThemeToggle from "../ThemeToggle"
import Icon from "../Icon"

function Aside() {
	const itemsForMainMenu = getItemsForMainMenu(routes, '')

	return (
		<>
			<nav>
				<ul className="menu-list">
					{itemsForMainMenu.map((route, i) => (
						<li key={i} className="menu-item">
							<NavLink to={route.path} className={({ isActive }) => isActive ? "menu-link active" : "menu-link"} end>
								<Icon name={route.icon} color="currentColor" />
								<span className="menu-link-text">{route.title}</span>
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
			<ThemeToggle />
		</>

	)
}

export default Aside