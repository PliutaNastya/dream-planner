
import { dreamsApi } from '@/entities/dream/model/dreamsApi'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {
		[dreamsApi.reducerPath]: dreamsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(dreamsApi.middleware),
})

export default store