import dreamCategories from "@/shared/config/dreamCategories"

function DreamsFilterPanel({
	selectedCategory,
	setSelectedCategory,
	sortOrder,
	setSortOrder
}) {
	return (
		<div className="dream-filters">
			<label>
				<span>Фільтр за категорією</span>
				<select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} >
					<option value="">--Усі категорії--</option>
					{dreamCategories.map((category) => (
						<option key={category.id} value={category.label}>
							{category.label}
						</option>
					))}
				</select>
			</label>

			<label>
				<span>Сортування за роком</span>
				<select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="input">
					<option value="">--Оберіть порядок--</option>
					<option value="asc">За зростанням</option>
					<option value="desc">За спаданням</option>
				</select>
			</label>
		</div>
	)
}

export default DreamsFilterPanel
