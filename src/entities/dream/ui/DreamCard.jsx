import { Fragment } from "react"

function DreamCard({dream, actions}) {
	return (
		<li className="dream-card">
			<span>{dream.title}</span>
			<div className="actions">
				{
					actions && actions.map((action, i) => (
						<Fragment key={i}>{action}</Fragment>
					))
				}
			</div>
		</li>
	)
}

export default DreamCard