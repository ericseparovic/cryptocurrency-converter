import PropTypes from 'prop-types';

function Select({ label, onInputChange, Data, isLoading, name }) {
	return (
		<div className='flex flex-col'>
			<label className='text-white text-xl font-bold' htmlFor='currency'>
				{label}
			</label>
			<select
				className='rounded p-2 cursor-pointer'
				name={name}
				id={name}
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
	);
}
Select.propTypes = {
	Data: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired,
	onInputChange: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};
export default Select;
