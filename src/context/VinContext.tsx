import { useState } from 'react';
import type { ReactNode } from 'react';
import { VinContext } from './vin-context';
import { useVinHistory } from '../hooks/useVinHistory';

export const VinProvider = ({ children }: { children: ReactNode }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [result, setResult] = useState<string | null>(null);
	const { history, addVinToHistory } = useVinHistory();
	const [clickedVin, setClickedVin] = useState<string | null>(null);

	return (
		<VinContext.Provider
			value={{
				isLoading,
				setIsLoading,
				result,
				setResult,
				history,
				addVinToHistory,
				clickedVin,
				setClickedVin
			}}
		>
			{children}
		</VinContext.Provider>
	);
};
