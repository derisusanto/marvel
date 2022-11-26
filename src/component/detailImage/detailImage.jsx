import './detailImage.scss';

export const ImageDetail = ({ image }) => {
	return (
		<div id="detail-image">
			<img src={image} alt="marvel-image-hero" className="img-details" />
		</div>
	);
};
