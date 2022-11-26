import './banner.scss';
import IMG_BANNER from '../../assets/images/marvel-universe.png';
export const Banner = () => {
	return (
		<div id="banner">
			<img src={IMG_BANNER} alt="" className="img-banner" />
		</div>
	);
};
