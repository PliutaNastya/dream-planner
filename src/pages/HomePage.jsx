import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import animation from '@/shared/assets/lottie/dreams-animation.lottie'
import frontRoutes from '@/shared/config/frontRoutes';
import ActionLink from '@/shared/ui/Button';

function HomePage() {
	return (
		<section className="home">
			<div className='home-content'>
				<h1 className="title title-big">Планувальник мрій</h1>
				<p className="subtitle">Записуй, візуалізуй та реалізуй свої найзаповітніші мрії!</p>
				<ActionLink className="link" path={frontRoutes.navigate.addDream} title='Додати мрію' />
			</div>
			<div className="animation">
				<DotLottieReact autoplay loop src={animation} />
			</div>
		</section>
	)
}

export default HomePage