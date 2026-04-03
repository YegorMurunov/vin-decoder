import { Helmet } from 'react-helmet-async';
import HomeTop from '../../components/home/HomeTop/HomeTop';
import HomeLeft from '../../components/home/HomeLeft/HomeLeft';
import HomeRight from '../../components/home/HomeRight/HomeRight';

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Home | VIN Decoder</title>
				<meta
					name='description'
					content="Fast and accurate VIN decoding. Decode your vehicle's VIN to get detailed information about its make, model, year, and more. Try it now!"
				/>
			</Helmet>
			<HomeTop />
			<div className='container mt-8 flex flex-wrap items-start gap-6 md:flex-nowrap'>
				<HomeLeft />
				<HomeRight />
			</div>
		</>
	);
};

export default Home;
