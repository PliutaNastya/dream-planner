import { Link } from "react-router"
import Icon from "../Icon"

function ActionLink({path, title, iconName, className}) {
	return (
		<Link to={path} className={className}>
			<span>{title}</span>
			{iconName && <Icon name={iconName} />}
		</Link>
	)
}

export default ActionLink