import { DotLottieReact } from "@lottiefiles/dotlottie-react"

function Banner({title, text, animation}) {
	return (
		<div className="banner">
			<div className="banner-content">
				<h2 className="title title-big">{title}</h2>
				<p className="subtitle">{text}</p>
			</div>
			<div className="animation">
				<DotLottieReact autoplay loop src={animation} />
			</div>
		</div>
	)
}

export default Banner