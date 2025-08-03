import Icon from "../Icon"

function PaginationBlock({ currentPageNumber, onPageChange, hasMore }) {

	return (
		<div className="pagination">
			<button type="button" disabled={currentPageNumber === 1} onClick={() => onPageChange(currentPageNumber - 1)}>
				<Icon name='prev-icon'/>
				<span>Назад</span>
			</button>

			<strong>{String(currentPageNumber).padStart(2, '0')}</strong>
			
			<button type="button" disabled={!hasMore} onClick={() => onPageChange(currentPageNumber + 1)}>
				<span>Далі</span>
				<Icon name='next-icon' />
			</button>
		</div>
	)
}

export default PaginationBlock