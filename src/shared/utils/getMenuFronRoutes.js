const getItemsForMainMenu = (routesList, basePath) => {
	const res = []
	routesList.forEach(route => {
		if (route?.handle?.title) {
			res.push({
				path: route.index ? basePath : basePath + route.path,
				title: route.handle.title,
				icon: route.handle?.icon
			})
		}
		if (route.children) res.push(...getItemsForMainMenu(route.children, basePath ? basePath + route.path + '/' : basePath + route.path))
	})

	return res
}

export default getItemsForMainMenu