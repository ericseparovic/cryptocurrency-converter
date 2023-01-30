import Image from './components/Image';
import Form from './components/Form';
import { useAxios } from './hooks/useAxios';

function App() {
	const URL =
		'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
	const { data, isLoading, hasError } = useAxios(URL);
	console.log(data, isLoading, hasError);
	return (
		<div className='flex'>
			<Image />
			<Form />
		</div>
	);
}

export default App;
