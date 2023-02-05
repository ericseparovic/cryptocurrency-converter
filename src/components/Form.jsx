import PropTypes from 'prop-types';

function Form({ data, isLoading, onInputChange, onFromSubmit }) {
	const { Data } = data;

	return (
		<div className='w-3/6 max-sm:w-full max-w-xs'>
			<h1 className='font-bold text-3xl text-white mb-5 text-center border-sky-600 border-b-2'>
				Cryptocurrency Converte
			</h1>
			<form action='' className='flex flex-col gap-10' onSubmit={onFromSubmit}>
				<div className='flex flex-col'>
					<label className='text-white text-xl font-bold' htmlFor='currency'>
						Select Currency
					</label>
					<select
						className='rounded p-2 cursor-pointer'
						name='currency'
						id='currency'
						onChange={onInputChange}>
						<optgroup>
							<option value='' defaultChecked>
								--Select--
							</option>
							<option value='USD'>Dolar</option>
							<option value='EUR'>Euro</option>
							<option value='UYU'>Peso Uruguayo</option>
							<option value='BRL'>Real</option>
						</optgroup>
					</select>
				</div>
				<div className='flex flex-col'>
					<label className='text-white text-xl font-bold' htmlFor='currency'>
						Select Currency
					</label>
					<select
						className='rounded p-2 cursor-pointer'
						name='crypto'
						id='crypto'
						onChange={onInputChange}>
						<optgroup>
							<option value='' defaultChecked>
								--Select--
							</option>
							{!isLoading &&
								Data.map((data) => {
									return (
										<option key={data.CoinInfo.Id} value={data.CoinInfo.Name}>
											{data.CoinInfo.FullName}
										</option>
									);
								})}
						</optgroup>
					</select>
				</div>

				<input
					type='submit'
					value='Calc'
					className='bg-sky-600 rounded text-white p-2 font-bold hover:bg-sky-500 cursor-pointer'
				/>
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
