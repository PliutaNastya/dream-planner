import dreamCategories from "@/shared/config/dreamCategories"

function DreamForm({ formData, onChange, onSubmit, isLoading, emptyInputs, isEdit }) {

	const getButtonName = () => {
		if (isEdit) return isLoading ? 'Редагування...' : 'Редагувати'
		return isLoading ? 'Додавання...' : 'Додати'
	}
	
	return (
		<form onSubmit={onSubmit}>
			<label>
				<span>Назва мрії</span>
				<input type="text" className={emptyInputs.includes("title") ? "error" : ""} name="title" value={formData.title} onChange={onChange} placeholder="Побачити північне сяйво ..." />
			</label>
			<label>
				<span>Опис мрії</span>
				<textarea name="description" className={emptyInputs.includes("description") ? "error" : ""} value={formData.description} onChange={onChange} placeholder="Хочу стояти серед снігу й просто дивитися вгору, відчуваючи магію ..."></textarea>
			</label>
			<label>
				<span>Рік, до якого бажаєте здійснити мрію</span>
				<input type="number" className={emptyInputs.includes("year") ? "error" : ""} value={formData.year} min={2025} name="year" onChange={onChange} placeholder="2027" />
			</label>
			<label>
				<span>З ким бажаєте здійснити мрію</span>
				<input type="text" className={emptyInputs.includes("withWhom") ? "error" : ""} value={formData.withWhom} name="withWhom" onChange={onChange} placeholder="З сім'єю ..." />
			</label>
			<label>
				<span>Категорія мрії</span>
				<select name="category" required className={emptyInputs.includes("category") ? "error" : ""} value={formData.category} onChange={onChange}>
					<option value="" selected>--Оберіть категорію--</option>
					{
						dreamCategories.map(category => (
							<option key={category.id} value={category.label}>{category.label}</option>
						))
					}
				</select>
			</label>
			<button type="submit" className="link" disabled={isLoading}>{getButtonName()}</button>
		</form>
	)
}

export default DreamForm