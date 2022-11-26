import FETCH from './config';

export const listCaracter = page => {
	return FETCH.get(
		`/v1/public/characters?offset=${page}&ts=1&apikey=${process.env.REACT_APP_API_PUBLIC_KEY}&hash=${process.env.REACT_APP_API_KEY}`
	);
};

export const detailCaracter = id => {
	return FETCH.get(
		`/v1/public/characters/${id}?&ts=1&apikey=${process.env.REACT_APP_API_PUBLIC_KEY}&hash=${process.env.REACT_APP_API_KEY}`
	);
};
