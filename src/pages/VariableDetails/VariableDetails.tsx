import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Loader } from 'lucide-react';
import clsx from 'clsx';
import Heading from '../../components/ui/Heading/Heading';
import styles from './variable-details.module.scss';
import type { VehicleVariable } from '../../types/index.types';
import { useEffect, useState } from 'react';
import { getVariablesList } from '../../api/vin-api';

const VariableDetails = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { id } = useParams();

	const [variable, setVariable] = useState<VehicleVariable | null>(
		location.state?.variable || null
	);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(!variable);

	const fetchVariables = async () => {
		try {
			const data = await getVariablesList();
			const foundVariable = data.Results.find(
				(item: VehicleVariable) => item.ID === Number(id)
			);
			if (foundVariable) {
				setVariable(foundVariable);
			}
		} catch (err) {
			setError('Failed to load variables. Please try again later.');
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (!variable) {
			fetchVariables();
		}
	}, [id, variable]);

	// While loading...
	if (isLoading) {
		return (
			<>
				<Helmet>
					<title>Loading... | VIN Decoder</title>
				</Helmet>
				<div className='flex w-full justify-center p-20'>
					<Loader className='h-12 w-12 animate-spin' color='#3a3a3a' />
				</div>
			</>
		);
	}

	// if error
	if (error) {
		return (
			<>
				<Helmet>
					<title>Error | VIN Decoder</title>
				</Helmet>
				<div className={clsx('container', styles.notFound)}>
					<div className={styles.error}>{error}</div>
					<br />
					<button
						onClick={() => navigate('/variables')}
						className={styles.notFound__btn}
					>
						Go back to Variables
					</button>
				</div>
			</>
		);
	}

	// if variable not found
	if (!variable) {
		return (
			<>
				<Helmet>
					<title>Variable Not Found | VIN Decoder</title>
				</Helmet>
				<div className={clsx('container', styles.notFound)}>
					<Heading fontWeight='bold'>Variable Not Found</Heading>
					<button
						onClick={() => navigate('/variables')}
						className={styles.notFound__btn}
					>
						Go back to Variables
					</button>
				</div>
			</>
		);
	}

	return (
		<>
			<Helmet>
				<title>{`${variable.Name} | VIN Decoder`}</title>
				<meta
					name='description'
					content={`Details about ${variable.Name || 'Variable'} vehicle variable.`}
				/>
			</Helmet>

			<div className={clsx('container', styles.details)}>
				<button
					onClick={() => navigate('/variables')}
					className={styles.details__back}
				>
					<ArrowLeft size={20} /> Back to list
				</button>

				<div className={styles.details__card}>
					<div className={styles.details__badges}>
						<span
							className={clsx(
								styles.details__badge,
								styles['details__badge--id']
							)}
						>
							ID: {variable.ID}
						</span>
						<span
							className={clsx(
								styles.details__badge,
								styles['details__badge--group']
							)}
						>
							Group: {variable.GroupName || 'General'}
						</span>
						<span
							className={clsx(
								styles.details__badge,
								styles['details__badge--type']
							)}
						>
							Type: {variable.DataType}
						</span>
					</div>

					<Heading level='h2' className={styles.details__title}>
						{variable.Name}
					</Heading>

					<div
						className={styles.details__content}
						dangerouslySetInnerHTML={{ __html: variable.Description }}
					/>
				</div>
			</div>
		</>
	);
};

export default VariableDetails;
