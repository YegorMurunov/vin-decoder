import { createContext, useContext } from 'react';
import type { VinContextType } from '../types/vin-context.types';

export const VinContext = createContext<VinContextType | undefined>(undefined);

export const useVin = () => {
	const context = useContext(VinContext);
	if (!context) {
		throw new Error('useVin must be used within an VinProvider');
	}
	return context;
};
