import './cardComponent.scss';
import { useNavigate } from 'react-router-dom';
export const CardCaracter = ({ image, name, id }) => {
	const navigate = useNavigate();
	return (
		<div className="card-item" onClick={() => navigate(`/hero/${id}`)}>
			<img src={image} alt="hero" />
			<div className="name-caracter">
				<span>{name}</span>
			</div>
		</div>
	);
};
