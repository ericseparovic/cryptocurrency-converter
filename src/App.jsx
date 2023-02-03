import Image from './components/Image';
import Form from './components/Form';
import { useGetCtypos } from './hooks/useGetCtypos';
import { useGetQuiote } from './hooks/useGetQuiote';
import { useForm } from './hooks/useForm';

function App() {
	// Get data form
	const { formState, onInputChange } = useForm({
		currency: '',
		crypto: '',
	});

	// API Cryptos
	const URLCRYPTOS =
		'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

	// Get data api cryptos
	const { data, isLoading } = useGetCtypos(URLCRYPTOS);

	const { currency, crypto } = formState;

	// API quite
	const URLQUIOTE = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;

	// Get data quiote
	const { quiote, isLoadingQuiote } = useGetQuiote(URLQUIOTE);

	// Get quiote
	const onFromSubmit = (e) => {
		e.preventDefault();

		console.log(quiote, isLoadingQuiote);
	};

	return (
		<div
			className='container mx-auto flex justify-between items-center h-screen max-w-2xl gap-4 max-sm:flex-col max-sm:h-full max-sm:px-5 max-sm:
    mt-10'>
			<Image />
			<Form
				data={data}
				isLoading={isLoading}
				onInputChange={onInputChange}
				onFromSubmit={onFromSubmit}
			/>
		</div>
	);
}

export default App;
