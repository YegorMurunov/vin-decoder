import { Loader } from 'lucide-react';

import styles from './page-loader.module.scss';
import clsx from 'clsx';

const PageLoader = () => {
	return (
		<div className={styles.container}>
			<Loader className={clsx(styles.icon, 'animate-spin')} color='#3a3a3a' />
		</div>
	);
};

export default PageLoader;
