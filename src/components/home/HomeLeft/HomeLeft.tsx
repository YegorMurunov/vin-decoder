import { useVin } from '../../../context/vin-context';
import Heading from '../../ui/Heading/Heading';

import styles from './home-left.module.scss';

const HomeLeft = () => {
	const { history, setClickedVin } = useVin();

	return (
		<aside className={styles.homeLeft}>
			<Heading className={styles.homeLeft__title} fontWeight='bold' level='h2'>
				Last Requests
			</Heading>
			<ul className={styles.homeLeft__lastRequests}>
				{history.map((item, index) => {
					return (
						<li key={index}>
							<a
								href={`#${item}`}
								onClick={e => {
									e.preventDefault();
									setClickedVin(item);
								}}
							>
								{item}
							</a>
						</li>
					);
				})}
			</ul>
		</aside>
	);
};

export default HomeLeft;
