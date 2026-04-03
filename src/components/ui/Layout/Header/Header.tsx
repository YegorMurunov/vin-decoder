import clsx from 'clsx';
import styles from './header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import Heading from '../../Heading/Heading';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={clsx('container', styles.header__inner)}>
				<div className={styles.header__logo}>
					{/* <h1>VIN Decoder</h1> */}
					<Link to='/'>
						<Heading level='h1' fontWeight='bold' color='text-white'>
							VIN Decoder
						</Heading>
					</Link>
				</div>
				<nav className={styles.header__nav}>
					<ul>
						<li>
							<NavLink
								to={'/'}
								className={({ isActive }) =>
									clsx(styles.link, isActive && styles.active)
								}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to={'/variables'}
								className={({ isActive }) =>
									clsx(styles.link, isActive && styles.active)
								}
							>
								Variables
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
