import './detailHero.scss';
export const SekeletonDetail = () => {
	return (
		<div id="detail-hero-sekeleton">
			<div className="img-layout-sekeleton">
				<div className="img" />
			</div>

			<div className="content-sekeleton">
				<div className="name-hero-sekeleton"></div>
				<div className="description-sekeleton">
					{/* {caracter.description || 'No Descriptions'} */}
				</div>
			</div>
		</div>
	);
};
