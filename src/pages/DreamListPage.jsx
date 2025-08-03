import DreamsList from "@/features/get-dreams/ui/DreamsList"
import Banner from "@/shared/ui/Banner"
import animation from '@/shared/assets/lottie/list-animation.lottie'

function DreamListPage() {
	return (
		<div className="page">
			<Banner title="Перегляд мрій" text="Тут ти можеш побачити всі свої мрії, змінити їхній зміст або видалити ті, що втратили актуальність." animation={animation} />
			<DreamsList />
		</div>
		
	)
}

export default DreamListPage