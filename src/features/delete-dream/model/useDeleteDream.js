import { useDeleteDreamMutation } from "@/entities"

function useDeleteDream() {
	const [deleteDream, { isLoading, error }] = useDeleteDreamMutation()
	
	const handleDelete = async (id) => {
		if (window.confirm('Ви впевнені, що бажаєте видалити мрію?')) {
			try {
				await deleteDream(id).unwrap()
				return true
			} catch (e) {
				console.log(e)
				return false
			}
		}
		return false
	}

	return {
		handleDelete,
		isLoading,
		error
	}
}

export default useDeleteDream