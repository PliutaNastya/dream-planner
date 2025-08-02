import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import DbOperations  from "./api/DbOperations"

// Створення класу бази даних
const db = new DbOperations('dreams')

export const dreamsApi = createApi({
	reducerPath: 'dreamsApi',
	baseQuery: fakeBaseQuery(),
	tagTypes: 'Dreams',
	endpoints: builder => ({})
})
