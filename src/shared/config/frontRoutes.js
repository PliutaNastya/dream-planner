const frontRoutes = {
	pages: {
		home: '/',
		addDream: 'add-dream',
		dreamsList: 'dreams',
		dreamDetails: 'dreams/:id',
		dreamEdit: 'dreams/:id/edit',
	},

	navigate: {
		home: '/',
		addDream: '/add-dream',
		dreamsList: '/dreams',
		getDreamDetails: (id) => `/dreams/${id}`,
		getDreamEdit: (id) => `/dreams/${id}/edit`,
	},
}

export default frontRoutes
