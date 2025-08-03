import useManageDream from "@/features/add-edit-dream/model/useManageDream"
import DreamForm from "@/features/add-edit-dream/ui/DreamForm"
import Banner from "@/shared/ui/Banner"
import animation from '@/shared/assets/lottie/form-animation.lottie'
import Spinner from "@/shared/ui/Spinner"
import { useNavigate } from "react-router"
import { useEffect } from "react"
import frontRoutes from "@/shared/config/frontRoutes"

function AddDreamPage() {
	const { formData, handleChange, handleSubmit, isLoading, isSuccess, error, emptyInputs } = useManageDream()
	const navigate = useNavigate()

	useEffect(() => {
		if (isSuccess) {
			navigate(frontRoutes.navigate.dreamsList)
		}
	}, [isSuccess, navigate])

	if (isLoading) return <Spinner />
	if (error) return <p className="error-text">Помилка: {typeof error === 'string' ? error : 'Щось пішло не так...'}</p>

	return (
		<div className="page">
			<Banner title="Зроби перший крок до мрії" text="Запиши свою мрію, щоб вона була не просто думкою, а першим кроком до її здійснення." animation={animation} />
			<DreamForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} isLoading={isLoading} emptyInputs={emptyInputs} isEdit={false} />
		</div>

	)
}

export default AddDreamPage