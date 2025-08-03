import Banner from "@/shared/ui/Banner"
import animation from '@/shared/assets/lottie/dream-animation.lottie'
import DreamDetailsCard from "@/features/dream-details/ui/DreamDetailsCard"
import ActionLink from "@/shared/ui/Button"
import frontRoutes from "@/shared/config/frontRoutes"

function DreamDetailsPage() {
	return (
		<section className="page">
			<Banner title="Перегляд мрії" text="Кожна мрія — це напрямок, а не просто пункт призначення. Сьогодні ти ближче до неї, ніж учора." animation={animation} />
			<DreamDetailsCard />
			<ActionLink className="link" path={frontRoutes.navigate.dreamsList} title="Повернутись до списку мрій"/>
		</section>
	)
}

export default DreamDetailsPage