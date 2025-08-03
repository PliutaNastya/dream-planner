import { useGetDreamsPaginationQuery } from "@/entities"
import { useEffect, useState } from "react"

function useGetDreams({ filters = {}, sortOrder = 'asc' }) {
	const [page, setPage] = useState(1)
	const [cursors, setCursors] = useState([])
	const perPage = 5

	const { data, isLoading } = useGetDreamsPaginationQuery({
		page,
		perPage,
		cursors,
		filters,
		sortOrder
	})

	const dreams = data?.data || []
	const hasMore = data?.hasMore
	
	useEffect(() => {
		setPage(1)
		setCursors([])
	}, [filters, sortOrder])

	useEffect(() => {
		if (data?.cursor && cursors.length < page) {
			setCursors(prev => [...prev, data.cursor])
		}
		if (data?.data.length === 0 && page > 1) {
			setPage(p => p - 1)
		}
	}, [data, cursors, page])



	return {
		dreams,
		hasMore,
		isLoading,
		page,
		setPage
	}
}

export default useGetDreams