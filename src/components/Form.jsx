import PropTypes from 'prop-types';
import Button from './Button';
import Select from './Select';
import { getCurrency } from '../hooks/getCurrency';

function Form({ data, isLoading, onInputChange, onFromSubmit }) {
	const { Data } = data;
	const currency = getCurrency();

	return (
		<div className='w-3/6 max-sm:w-full max-w-xs'>
			<h1 className='font-bold text-3xl text-white mb-5 text-center border-sky-600 border-b-2'>
				Cryptocurrency Converte
			</h1>
			<form action='' className='flex flex-col gap-10' onSubmit={onFromSubmit}>
				<Select
					label='Select Currency'
					onInputChange={onInputChange}
					Data={currency}
					isLoading={isLoading}
					name='currency'
				/>

				<Select
					label='Select Crypto'
					onInputChange={onInputChange}
					Data={Data}
					isLoading={isLoading}
					name='crypto'
				/>

				<Button />
			</form>
		</div>
	);
}

Form.propTypes = {
	data: PropTypes.object.isRequired,
	isLoading: PropTypes.bool.isRequired,
	onInputChange: PropTypes.func.isRequired,
	onFromSubmit: PropTypes.func.isRequired,
};

export default Form;
