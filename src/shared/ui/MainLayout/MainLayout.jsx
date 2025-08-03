import { Outlet } from "react-router"
import Aside from "../Aside"

function MainLayout() {
	return (
		<>
			<aside className="scrollable">
				<Aside />
			</aside>
			<main className="main-layout">
				<Outlet />
			</main>
		</>
	)
}

export default MainLayout