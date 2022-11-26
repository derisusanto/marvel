import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageDetail } from '../../component/detailImage/detailImage';
import { detailCaracter } from '../../helper/service';

import './detailHero.scss';
import { SekeletonDetail } from './sekeleton';

const DetailHero = () => {
	const { id } = useParams();
	const [caracter, setCaracter] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	/* eslint-disable */
	useEffect(() => {
		showCaracter(id);
	}, []);

	const showCaracter = idCaracter => {
		setIsLoading(true);
		detailCaracter(idCaracter).then(res => {
			if (res.status === 200) {
				setCaracter(res.data.data.results[0]);
				setIsLoading(false);
			}
		});
	};

	return (
		<React.Fragment>
			{isLoading ? (
				<SekeletonDetail />
			) : (
				<div id="detail-hero">
					<div className="img-layout">
						<ImageDetail
							image={`${caracter?.thumbnail?.path}.${caracter?.thumbnail?.extension}`}
						/>
					</div>

					<div className="content">
						<div className="name-hero">{caracter.name}</div>
						<div className="description">
							{caracter.description || 'No Descriptions'}
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};
export default DetailHero;
