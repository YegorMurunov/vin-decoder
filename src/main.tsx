import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { VinProvider } from './context/VinContext.tsx';

import App from './App.tsx';

import './global.scss';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HelmetProvider>
			<BrowserRouter>
				<VinProvider>
					<App />
				</VinProvider>
			</BrowserRouter>
		</HelmetProvider>
	</StrictMode>
);
