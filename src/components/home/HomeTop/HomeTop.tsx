import clsx from 'clsx';
import Heading from '../../ui/Heading/Heading';
import { useCallback, useEffect, useState } from 'react';
import { useClipboard } from '../../../hooks/useClipboard';

import { ClipboardList } from 'lucide-react';
import styles from './home-top.module.scss';
import { useVin } from '../../../context/vin-context';
import { decodeVin } from '../../../api/vin-api';

const HomeTop = () => {
	const [vin, setVin] = useState('');
	const [error, setError] = useState('');
	const { readFromClipboard, error: clipboardError } = useClipboard();

	const {
		setResult,
		setIsLoading,
		addVinToHistory,
		clickedVin,
		setClickedVin
	} = useVin();

	const pasteFromClipboard = async () => {
		const text = await readFromClipboard();
		if (text) {
			setVin(text.toUpperCase());
		} else {
			console.error('Failed to read from clipboard:', clipboardError);
		}
	};

	const validateVin = (val: string) => {
		if (!val) return 'VIN cannot be empty';
		if (val.length > 17) return 'VIN cannot contain more than 17 characters';
		if (/[IOQioq]/.test(val)) return 'VIN cannot contain the letters I, O, Q';
		if (!/^[A-HJ-NPR-Z0-9]+$/i.test(val)) {
			return 'VIN contains invalid characters';
		}
		return '';
	};

	const handleDecode = async (
		vinToDecode: string,
		skipHistory: boolean = false
	) => {
		const validationError = validateVin(vinToDecode);
		if (validationError) {
			setError(validationError);
			return;
		}

		setError('');
		setIsLoading(true);

		try {
			const data = await decodeVin(vinToDecode);

			setResult(JSON.stringify(data));
			if (!skipHistory) addVinToHistory(vinToDecode);
		} catch (err) {
			setError('Error decoding VIN. Please try again later.');
			console.error('Error decoding VIN:', err);
		} finally {
			setIsLoading(false);
		}
	};

	const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleDecode(vin);
	};

	useEffect(() => {
		if (clickedVin) {
			setVin(clickedVin);
			handleDecode(clickedVin, true);
			setClickedVin(null);
		}
	}, [clickedVin]);

	return (
		<section className={styles.homeTop}>
			<div className={'container'}>
				<div className={styles.homeTop__inner}>
					<Heading fontWeight='bold' className={styles.homeTop__title}>
						Decode VIN
					</Heading>
					<form
						action='submit'
						onSubmit={onSubmit}
						className={clsx(styles.homeTop__form, styles.form)}
					>
						<input
							type='text'
							value={vin}
							onChange={useCallback(
								(e: React.ChangeEvent<HTMLInputElement>) =>
									setVin(e.target.value.toUpperCase()),
								[]
							)}
							placeholder='Type a VIN code'
							maxLength={17}
							className={styles.form__input}
						/>
						<button
							type='button'
							className={styles.form__pasteBtn}
							onClick={pasteFromClipboard}
						>
							<ClipboardList />
						</button>
						<button type='submit' className={styles.form__btn}>
							Decode
						</button>
					</form>
					{error && (
						<div className={clsx(styles.homeTop__error, error && 'mb-4')}>
							{error}
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default HomeTop;
