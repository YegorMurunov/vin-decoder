import { Route, Routes } from 'react-router-dom';
import Layout from './components/ui/Layout/Layout';
import { lazy } from 'react';

// lazy import pages
const Home = lazy(() => import('./pages/Home/Home'));
const Variables = lazy(() => import('./pages/Variables/Variables'));
const VariableDetails = lazy(
	() => import('./pages/VariableDetails/VariableDetails')
);

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					{/* Home page */}
					<Route path='/' element={<Home />} />
					{/* Variables page */}
					<Route path='/variables' element={<Variables />} />
					{/* Dynamic variable details page */}
					<Route path='/variables/:id' element={<VariableDetails />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
