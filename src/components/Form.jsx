function Form() {
	return (
		<div className='w-3/6 max-sm:w-full max-w-xs'>
			<h1 className='font-bold text-3xl text-white mb-5 text-center border-sky-600 border-b-2'>
				Cryptocurrency Converte
			</h1>
			<form action='' className='flex flex-col gap-10'>
				<div className='flex flex-col'>
					<label className='text-white text-xl font-bold' htmlFor='currency'>
						Select Currency
					</label>
					<select
						className='rounded p-2 cursor-pointer'
						name='currency'
						id='currency'>
						<optgroup>
							<option value='dolar'>Dolar</option>
							<option value='peso-uruguayo'>Peso Uruguayo</option>
							<option value='euro'>Euro</option>
							<option value='real'>Real</option>
						</optgroup>
					</select>
				</div>
				<div className='flex flex-col'>
					<label className='text-white text-xl font-bold' htmlFor='currency'>
						Select Currency
					</label>
					<select
						className='rounded p-2 cursor-pointer'
						name='currency'
						id='currency'>
						<optgroup>
							<option value='dolar'>Dolar</option>
							<option value='peso-uruguayo'>Peso Uruguayo</option>
							<option value='euro'>Euro</option>
							<option value='real'>Real</option>
						</optgroup>
					</select>
				</div>
				<input
					type='submit'
					className='bg-sky-600 rounded text-white p-2 font-bold hover:bg-sky-500 cursor-pointer'
				/>
			</form>
		</div>
	);
}

export default Form;
