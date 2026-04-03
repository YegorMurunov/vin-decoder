import clsx from 'clsx';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import PageLoader from '../PageLoader/PageLoader';
import Header from './Header/Header';

import styles from './layout.module.scss';

const Layout = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<main className={clsx(styles.page)}>
				{
					<Suspense fallback={<PageLoader />}>
						<Outlet />
					</Suspense>
				}
			</main>
			<footer className={styles.footer}>
				<p>&copy; Yegor Murunov. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default Layout;
