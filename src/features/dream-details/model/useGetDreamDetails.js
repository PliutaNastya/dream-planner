import { useGetDreamByIdQuery } from "@/entities"
import { useParams } from "react-router"

function useGetDreamDetails() {
	const { id } = useParams()
	const { data: dream, isLoading, error } = useGetDreamByIdQuery(id)
	
	return {
		dream,
		isLoading,
		error
	}
}

export default useGetDreamDetails