import PropTypes from 'prop-types';
import btnClose from '../assets/close.png';

function Modal({ result, setModal, modal }) {
	const { CHANGEPCT24HOUR, HIGHDAY, LASTUPDATE, LOWDAY, PRICE, IMAGEURL } =
		result;

	const handleClose = () => {
		setModal(false);
	};

	return (
		<>
			{modal && (
				<div>
					<div className='max-sm:w-full max-w-xs h-64 bg-sky-800 absolute top-0 left-0 right-0 bottom-0 m-auto rounded p-4 shadow-2xl text-white'>
						<h1 className='font-bold text-3xl text-white mb-5 text-center border-sky-600 border-b-2'>
							Result
						</h1>

						<div className='flex'>
							<div
								className='absolute w-6 top-3 right-3 cursor-pointer'
								onClick={handleClose}>
								<img src={btnClose} alt='btn-close' />
							</div>
							<div className='leading-loose'>
								<p className='font-bold'>
									Price: <span>{PRICE}</span>
									{''}
								</p>
								<p className='font-bold'>
									Price High Day: <span>{HIGHDAY}</span>{' '}
								</p>
								<p className='font-bold'>
									Price Low Day: <span>{LOWDAY}</span>{' '}
								</p>
								<p className='font-bold'>
									Change 24 Hour: <span>{CHANGEPCT24HOUR}</span>{' '}
								</p>
								<p className='font-bold'>
									Last Update: <span>{LASTUPDATE}</span>{' '}
								</p>
							</div>
							<picture className='w-28 p-3'>
								<img src={`https://cryptocompare.com/${IMAGEURL}`} alt='icon' />
							</picture>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

Modal.propTypes = {
	result: PropTypes.object.isRequired,
	setModal: PropTypes.func.isRequired,
	modal: PropTypes.bool.isRequired,
};

export default Modal;
