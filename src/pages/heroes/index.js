import React, { useEffect, useState } from 'react';
import { CardCaracter } from '../../component/cardComponent/cardComponent';
import { SekeletonCard } from '../../component/cardComponent/skeleton';
import { listCaracter } from '../../helper/service';
import './heroes.scss';

const Heroes = () => {
	const [listCaracters, setListCaracters] = useState([]);

	const [isFormFirst, setIsFormFirst] = useState(false);

	let offset = 0;
	/* eslint-disable */
	useEffect(() => {
		getlistCaracter();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleScroll = async e => {
		const scrollHeight = e.target.documentElement.scrollHeight;
		const currentHeight = Math.ceil(
			e.target.documentElement.scrollTop + window.innerHeight
		);

		if (currentHeight + 1 >= scrollHeight) {
			getlistCaracter();
		}
	};
	const getlistCaracter = () => {
		setIsFormFirst(true);
		listCaracter(offset).then(res => {
			if (res.status === 200) {
				setListCaracters(listCaracters => [
					...listCaracters,
					...res.data.data.results
				]);

				offset += 20;
				setIsFormFirst(false);
			}
		});
	};

	return (
		<div id="heroes">
			<div className="logo">
				<h4>MARVEL</h4>
			</div>
			<div>
				<div className="list-card-heroes">
					{listCaracters.map((caracter, index) => {
						return (
							<CardCaracter
								key={index}
								id={caracter.id}
								image={`${caracter.thumbnail.path}.${caracter.thumbnail.extension}`}
								name={caracter.name}
							/>
						);
					})}
					{isFormFirst && <SekeletonCard />}
				</div>
			</div>
		</div>
	);
};
export default Heroes;
