import React, { useEffect, useState, useContext } from 'react';
import instance from '../api/uso_biblioteca';

export default () => {

	const [results, setResults] = useState([]);

	const [errorMessage, setErrorMessage] = useState('');

	const searchApi = async (searchTerm, tag) => {
		try {
            if(searchTerm){
				const response = await instance.get(`/libRes?itemId=${searchTerm}`);
				setResults(response.data);
            }else{
				const response = await instance.get(`/libRes?itemId=%23NAN`);
				setResults(response.data);
            }
		} catch (err) {
			console.log('Error en searchAPI', err);
			setErrorMessage(err + ' Something went wrong! :( ');
		}
	};

	useEffect(() => {
		searchApi('', '');
	}, []);

	return [searchApi, results, errorMessage];
};
