import AddDreamPage from "@/pages/AddDreamPage"
import DreamListPage from "@/pages/DreamListPage"
import HomePage from "@/pages/HomePage"
import frontRoutes from "@/shared/config/frontRoutes"
import { createBrowserRouter } from "react-router"

export const routes = [
	{
		path: frontRoutes.pages.home,
		// Component: MainLayout,
		// errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				Component: HomePage,
				handle: {
					title: 'Домашня'
				}
			},
			{
				path: frontRoutes.pages.addDream,
				Component: AddDreamPage,
				handle: {
					title: 'Додавання нової мрії'
				}
			},
			{
				path: frontRoutes.pages.dreamsList,
				Component: DreamListPage,
				handle: {
					title: 'Перегляд мрій'
				}
			}
		],
	},
]

const router = createBrowserRouter(routes)

export default router