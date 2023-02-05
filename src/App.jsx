import Image from './components/Image';
import Form from './components/Form';
import Modal from './components/Modal';
import Spinner from './components/Spinner';
import Error from './components/Error';
import { useGetCtypos } from './hooks/useGetCtypos';
import { useGetQuiote } from './hooks/useGetQuiote';
import { useForm } from './hooks/useForm';
import { useState } from 'react';

function App() {
	const [result, setResult] = useState({});
	const [modal, setModal] = useState(false);
	const [error, setError] = useState(false);

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
	const { quiote } = useGetQuiote(URLQUIOTE);

	// Get quiote
	const onFromSubmit = (e) => {
		e.preventDefault();

		if (Object.entries(quiote).length === 0) {
			setError(true);
			return;
		}

		if (quiote.Response === 'Error') {
			setError(true);
			return;
		}

		try {
			setResult(quiote.DISPLAY[crypto][currency]);
		} catch {
			setError(true);
			return;
		}

		if (result === undefined) {
			setError(true);
			return;
		}
		setError(false);
		setModal(true);
	};

	if (isLoading) {
		return <Spinner />;
	} else {
		return (
			<>
				{modal && result && (
					<div className='bg-slate-500 h-screen w-screen fixed top-0 opacity-80'></div>
				)}
				{error && <Error />}
				<div
					className='container mx-auto flex justify-between items-center  h-screen max-w-2xl gap-4 max-sm:flex-col max-sm:h-full max-sm:px-5 max-sm:
    '>
					<Image />

					<Form
						data={data}
						isLoading={isLoading}
						onInputChange={onInputChange}
						onFromSubmit={onFromSubmit}
					/>
					{result && (
						<Modal
							result={result}
							setModal={setModal}
							modal={modal}
							crypto={crypto}
						/>
					)}
				</div>
			</>
		);
	}
}

export default App;
