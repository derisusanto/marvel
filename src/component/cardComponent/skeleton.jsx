import './cardComponent.scss';
export const SekeletonCard = () => {
	const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<>
			{data.map(idex => {
				return <div id="skeleton" key={idex}></div>;
			})}
		</>
	);
};
