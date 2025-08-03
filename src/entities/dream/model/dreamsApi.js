import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import DbOperations from "./api/DbOperations"

// Створення класу бази даних
const db = new DbOperations('dreams')

export const dreamsApi = createApi({
	reducerPath: 'dreamsApi',
	baseQuery: fakeBaseQuery(),
	tagTypes: 'Dreams',
	keepUnusedDataFor: 0,
	refetchOnMountOrArgChange: true,
	endpoints: builder => ({
		// Отримання всіх мрій
		getAllDreams: builder.query({
			async queryFn() {
				try {
					const data = await db.getAll()
					return { data }
				} catch (error) {
					return { error }
				}
			},
			providesTags: ['Dreams']
		}),
		// Пагінація
		getDreamsPagination: builder.query({
			async queryFn({ page = 1, perPage = 5, cursors = [], filters = {}, sortOrder = 'asc' }) {
				try {
					const { data, cursor, hasMore } = await db.getAllPaginated({
						page,
						perPage,
						cursors,
						filters,
						sortOrder,
					});
					return { data: { data, cursor, hasMore } };
				} catch (error) {
					return { error: { status: 500, message: error.message } };
				}
			},
			providesTags: ['Dreams'],
		}),
		// Отримання деталей мрії
		getDreamById: builder.query({
			async queryFn(id) {
				try {
					const data = await db.getById(id)
					return { data }
				} catch (error) {
					return { error }
				}
			}
		}),
		// Додавання нової мрії
		addNewDream: builder.mutation({
			async queryFn(newDream) {
				try {
					await db.add(newDream)
					return { data: true }
				} catch (error) {
					return { error }
				}
			},
			invalidatesTags: ['Dreams']
		}),
		// Оновлення даних про мрію
		updateDream: builder.mutation({
			async queryFn({ id, data }) {
				try {
					await db.update(id, data)
					return { data: true }
				} catch (error) {
					return { error }
				}
			},
			invalidatesTags: ['Dreams']
		}),
		// Видалення конкретної мрії
		deleteDream: builder.mutation({
			async queryFn(id) {
				try {
					await db.delete(id)
					return { data: true }
				} catch (error) {
					return { error }
				}
			},
			invalidatesTags: ['Dreams']
		})
	})
})

export const {
	useGetAllDreamsQuery,
	useGetDreamsPaginationQuery,
	useGetDreamByIdQuery,
	useAddNewDreamMutation,
	useUpdateDreamMutation,
	useDeleteDreamMutation
} = dreamsApi