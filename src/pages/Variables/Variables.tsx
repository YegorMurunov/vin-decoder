import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from 'lucide-react';
import Heading from '../../components/ui/Heading/Heading';
import type { VehicleVariable } from '../../types/index.types';
import { getVariablesList } from '../../api/vin-api';

import styles from './variables.module.scss';
import clsx from 'clsx';

const Variables = () => {
	const [variables, setVariables] = useState<VehicleVariable[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');

	const fetchVariables = async () => {
		try {
			const data = await getVariablesList();
			setVariables(data.Results);
		} catch (err) {
			setError('Failed to load variables. Please try again later.');
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchVariables();
	}, []);

	return (
		<>
			<Helmet>
				<title>Variables Dictionary | VIN Decoder</title>
				<meta
					name='description'
					content="Explore the complete dictionary of vehicle variables used in NHTSA's VIN decoding system."
				/>
			</Helmet>

			<div className={clsx('container', styles.variables)}>
				<Heading fontWeight='bold'>Vehicle Variables</Heading>
				<p className={styles.variables__desc}>
					Dictionary of all {variables.length > 0 ? variables.length : ''} data
					points available in the NHTSA VIN decoding system.
				</p>

				{isLoading ? (
					<div className={styles.variables__loader}>
						<Loader
							className={clsx(styles['variables__loader-icon'], 'animate-spin')}
						/>
					</div>
				) : error ? (
					<div className={styles.variables__error}>{error}</div>
				) : (
					<div className={styles.variables__grid}>
						{variables.map(variable => (
							<Link
								key={variable.ID}
								to={`/variables/${variable.ID}`}
								state={{ variable }}
								className={styles.variables__card}
							>
								<h3 className={styles['variables__card-title']}>
									{variable.Name}
								</h3>
								<div className={styles['variables__card-footer']}>
									<span className={styles['variables__card-group']}>
										{variable.GroupName || 'General'}
									</span>
									<span className={styles['variables__card-type']}>
										{variable.DataType}
									</span>
								</div>
							</Link>
						))}
					</div>
				)}
			</div>
		</>
	);
};

export default Variables;
