import useManageDream from "@/features/add-edit-dream/model/useManageDream"
import frontRoutes from "@/shared/config/frontRoutes"
import Banner from "@/shared/ui/Banner"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import animation from '@/shared/assets/lottie/edit-animation.lottie'
import DreamForm from "@/features/add-edit-dream/ui/DreamForm"

function EditDreamPage() {
	const { formData, handleChange, handleSubmit, isLoading, isSuccess, error, emptyInputs } = useManageDream()
	const navigate = useNavigate()

	useEffect(() => {
		if (isSuccess) {
			navigate(frontRoutes.navigate.dreamsList)
		}
	}, [isSuccess, navigate])

	return (
		<div className="page">
			<Banner title="Редагування мрії" text="Іноді мрії змінюються — і це нормально. Відкоригуйте деталі, щоб вони краще відповідали вашому сьогоднішньому баченню." animation={animation} />
			{error && <p>Помилка: {error}</p>}
			<DreamForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} isLoading={isLoading} emptyInputs={emptyInputs} isEdit={true} />
		</div>
	)
}

export default EditDreamPage