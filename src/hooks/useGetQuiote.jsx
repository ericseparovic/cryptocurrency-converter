import axios from 'axios';
import { useState, useEffect } from 'react';

export const useGetQuiote = (URL) => {
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
		quiote: state.data,
		isLoadingQuiote: state.isLoading,
		status: state.status,
	};
};
