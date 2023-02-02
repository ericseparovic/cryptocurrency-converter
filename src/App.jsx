import Image from './components/Image';
import Form from './components/Form';
import { useAxios } from './hooks/useAxios';
import { useForm } from './hooks/useForm';

function App() {
	const { formState, onInputChange } = useForm({
		currency: '',
		crypto: '',
	});

	const { currency, crypto } = formState;

	const URL =
		'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

	const { data, isLoading } = useAxios(URL);

	return (
		<div
			className='container mx-auto flex justify-between items-center h-screen max-w-2xl gap-4 max-sm:flex-col max-sm:h-full max-sm:px-5 max-sm:
    mt-10'>
			<Image />
			<Form data={data} isLoading={isLoading} onInputChange={onInputChange} />
		</div>
	);
}

export default App;
