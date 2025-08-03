import Icon from "@/shared/ui/Icon"
import useDeleteDream from "../model/useDeleteDream"

function DeleteDreamButton({id}) {
	const { handleDelete, isLoading } = useDeleteDream()
	
	const handleClick = async () => {
		await handleDelete(id)
	}
	return (
		<button type="button" className="link link-icon" disabled={isLoading} onClick={handleClick}>
			<span>{isLoading ? 'Видалення...' : 'Видалити'}</span>
			<Icon name="delete-icon"/>
		</button>
	)
}

export default DeleteDreamButton