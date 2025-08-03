import PaginationBlock from "@/shared/ui/PaginationBlock"
import useGetDreams from "../model/useGetDreams"
import DreamCard from "@/entities/dream/ui/DreamCard"
import Spinner from "@/shared/ui/Spinner"
import ActionLink from "@/shared/ui/Button"
import frontRoutes from "@/shared/config/frontRoutes"
import DeleteDreamButton from "@/features/delete-dream/ui/DeleteDreamButton"
import useDreamsFilters from "../model/useDreamsFilters"
import DreamsFilterPanel from "./DreamsFilterPanel"

function DreamsList() {
	const { filters, sortOrder, setSelectedCategory, setSortOrder } = useDreamsFilters()
	const { dreams, hasMore, isLoading, page, setPage } = useGetDreams({
		filters,
		sortOrder
	})

	if (isLoading) return <Spinner />

	return (
		<div className="dreams-list">
			<DreamsFilterPanel
				selectedCategory={filters.category}
				setSelectedCategory={setSelectedCategory}
				sortOrder={sortOrder}
				setSortOrder={setSortOrder}
			/>
			<ul>
				{dreams.map(dream => (
					<DreamCard key={dream.id} dream={dream} actions={[
						<ActionLink key={`details-${dream.id}`} path={frontRoutes.navigate.getDreamDetails(dream.id)} iconName="details-icon" title="Деталі" className="link link-icon" />,
						<ActionLink key={`edit-${dream.id}`} path={frontRoutes.navigate.getDreamEdit(dream.id)} iconName="edit-icon" title="Редагування" className="link link-icon" />,
						<DeleteDreamButton id={dream.id} />
					]} />
				))}
			</ul>
			<PaginationBlock currentPageNumber={page} onPageChange={setPage} hasMore={hasMore} />
		</div>
	)
}

export default DreamsList