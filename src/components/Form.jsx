function Form() {
	return (
		<div>
			<h1>Cryptocurrency Converter Calculator</h1>
			<form action=''>
				<div>
					<label htmlFor='currency'>Select Currency</label>
					<select name='currency' id='currency'>
						<optgroup>
							<option value='dolar'>Dolar</option>
							<option value='peso-uruguayo'>Peso Uruguayo</option>
							<option value='euro'>Euro</option>
							<option value='real'>Real</option>
						</optgroup>
					</select>
				</div>
				<div>
					<label htmlFor='cryptocurrency'>Select Cryptocurrency</label>
					<select name='cryptocurrency' id='cryptocurrency'>
						<optgroup>
							<option value='dolar'>Dolar</option>
							<option value='peso-uruguayo'>Peso Uruguayo</option>
							<option value='euro'>Euro</option>
							<option value='real'>Real</option>
						</optgroup>
					</select>
				</div>
			</form>
		</div>
	);
}

export default Form;
