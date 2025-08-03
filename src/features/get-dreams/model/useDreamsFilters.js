import { useMemo, useState } from "react"

function useDreamsFilters() {
	const [selectedCategory, setSelectedCategory] = useState('')
	const [sortOrder, setSortOrder] = useState('')

	const filters = useMemo(() => {
		return { category: selectedCategory }
	}, [selectedCategory])

	return {
		filters,
		sortOrder,
		setSelectedCategory,
		setSortOrder
	}
}

export default useDreamsFilters
