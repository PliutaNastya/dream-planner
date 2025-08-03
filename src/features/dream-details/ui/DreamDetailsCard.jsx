import Spinner from "@/shared/ui/Spinner"
import useGetDreamDetails from "../model/useGetDreamDetails"

function DreamDetailsCard() {
	const { dream, isLoading, error } = useGetDreamDetails()

	if (isLoading) return <Spinner />
	if(error) return <p></p>
	
	return (
		<div className="dream-details">
			<p><span>Назва:</span> {dream.title}</p>
			<p><span>Опис:</span> {dream.description}</p>
			<p><span>Рік, до якого хочу здійснити мрію:</span> {dream.year}</p>
			<p><span>З ким хочу здійснити мрію:</span> {dream.withWhom}</p>
			<p><span>Категорія:</span> {dream.description}</p>
		</div>
	)
}

export default DreamDetailsCard