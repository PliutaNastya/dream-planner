function Spinner() {
	return (
		<div className="spinner">
			<svg
				width="72"
				height="72"
				viewBox="0 0 44 44"
				xmlns="http://www.w3.org/2000/svg"
				stroke="currentColor"
			>
				<g fill="none" fillRule="evenodd" strokeWidth="4">
					<circle cx="22" cy="22" r="20" strokeOpacity=".2" />
					<path d="M42 22c0-11.046-8.954-20-20-20">
						<animateTransform
							attributeName="transform"
							type="rotate"
							from="0 22 22"
							to="360 22 22"
							dur="0.9s"
							repeatCount="indefinite"
						/>
					</path>
				</g>
			</svg>
		</div>
	)
}
export default Spinner