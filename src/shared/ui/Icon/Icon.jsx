function Icon({ name, color = 'currentColor' }) {
	
	return (
		<svg className="icon" color={color}>
			<use href={`/sprite.svg#${name}`} />
		</svg>
	)
}

export default Icon
