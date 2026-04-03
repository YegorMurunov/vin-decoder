import clsx from 'clsx';
import { useVin } from '../../../context/vin-context';
import Heading from '../../ui/Heading/Heading';

import styles from './home-right.module.scss';
import { Loader } from 'lucide-react';

const HomeRight = () => {
	const { result, isLoading } = useVin();

	const carData = result ? JSON.parse(result)?.Results?.[0] : null;

	const ignoredKeys = [
		'ErrorCode',
		'ErrorText',
		'AdditionalErrorText',
		'VIN',
		'SuggestedVIN',
		'VehicleDescriptor',
		'PossibleValues'
	];

	const allVariables = carData
		? Object.entries(carData)
				.filter(([key, value]) => {
					return (
						value !== null &&
						value !== '' &&
						value !== 'Not Applicable' &&
						!ignoredKeys.includes(key)
					);
				})
				.map(([key, value]) => {
					const readableKey = key.replace(/([a-z])([A-Z])/g, '$1 $2');

					return {
						variable: readableKey,
						value: String(value)
					};
				})
		: null;

	const tableEmptyRows = (
		<>
			<tr>
				<td>Make</td>
				<td>-</td>
			</tr>
			<tr>
				<td>Model</td>
				<td>-</td>
			</tr>
			<tr>
				<td>Model Year</td>
				<td>-</td>
			</tr>
			<tr>
				<td>Body Class</td>
				<td>-</td>
			</tr>
			<tr>
				<td>Plant Manufacture</td>
				<td>-</td>
			</tr>
			<tr>
				<td>Engine</td>
				<td>-</td>
			</tr>
		</>
	);

	return (
		<section className={styles.homeRight}>
			<Heading className={styles.homeRight__title} fontWeight='bold' level='h2'>
				Decode Results
			</Heading>
			<div className={styles.homeRight__inner}>
				{isLoading ? (
					<div className={styles.homeRight__loaderContainer}>
						<Loader
							className={clsx(styles.homeRight__loaderIcon, 'animate-spin')}
							color='#3a3a3a'
						/>
					</div>
				) : (
					<div className={styles.homeRight__tableWrapper}>
						<table className={styles.homeRight__table}>
							<thead>
								<tr>
									<th>Variable</th>
									<th>Value</th>
								</tr>
							</thead>
							<tbody>
								{allVariables
									? allVariables.map((item, index) => {
											return (
												<tr key={index}>
													<td>{item.variable}</td>
													<td>{item.value}</td>
												</tr>
											);
										})
									: tableEmptyRows}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</section>
	);
};

export default HomeRight;
