import axios from 'axios';
import { useState, useEffect } from 'react';

export const useAxios = (URL) => {
	const [state, setState] = useState({
		data: {},
		isLoading: true,
		hasError: null,
	});

	const getData = async () => {
		try {
			const response = await axios.get(URL);
			const data = await response.data;

			setState({
				data,
				isLoading: false,
				hasError: null,
			});
		} catch (error) {
			setState({
				...state,
				hasError: error,
			});
		}
	};

	useEffect(() => {
		getData();
	}, [URL]);

	return {
		data: state.data,
		isLoading: state.isLoading,
		status: state.status,
	};
};
