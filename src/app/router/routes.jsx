import { createBrowserRouter } from "react-router"
import MainLayout from "@/shared/ui/MainLayout/MainLayout"
import DreamDetailsPage from "@/pages/DreamDetailsPage"
import frontRoutes from "@/shared/config/frontRoutes"
import DreamListPage from "@/pages/DreamListPage"
import EditDreamPage from "@/pages/EditDreamPage"
import AddDreamPage from "@/pages/AddDreamPage"
import HomePage from "@/pages/HomePage"

export const routes = [
	{
		path: frontRoutes.pages.home,
		Component: MainLayout,
		// errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				Component: HomePage,
				handle: {
					title: 'Головна',
					icon: 'home-icon'
				}
			},
			{
				path: frontRoutes.pages.addDream,
				Component: AddDreamPage,
				handle: {
					title: 'Додавання мрії',
					icon: 'plus-icon'
				}
			},
			{
				path: frontRoutes.pages.dreamsList,
				Component: DreamListPage,
				handle: {
					title: 'Перегляд мрій',
					icon: 'eye-icon'
				}
			},
			{
				path: frontRoutes.pages.dreamDetails,
				Component: DreamDetailsPage
			},
			{
				path: frontRoutes.pages.dreamEdit,
				Component: EditDreamPage
			}
		],
	},
]

const router = createBrowserRouter(routes)

export default router