import Image from './components/Image';
import Form from './components/Form';
import { useAxios } from './hooks/useAxios';
import { useState, useEffect } from 'react';

function App() {
	const URL =
		'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
	const { data, isLoading } = useAxios(URL);

	return (
		<div
			className='container mx-auto flex justify-between items-center h-screen max-w-2xl gap-4 max-sm:flex-col max-sm:h-full max-sm:px-5 max-sm:
    mt-10'>
			<Image />
			<Form data={data} isLoading={isLoading} />
		</div>
	);
}

export default App;
