import { useState } from 'react';

const HISTORY_KEY = 'vin_history';

export const useVinHistory = () => {
	const [history, setHistory] = useState<string[]>(() => {
		try {
			const stored = localStorage.getItem(HISTORY_KEY);
			return stored ? JSON.parse(stored) : [];
		} catch (error) {
			console.error('Error parsing history from localStorage', error);
			return [];
		}
	});

	const addVinToHistory = (vin: string) => {
		setHistory(prev => {
			const newHistory = [vin, ...prev.filter(item => item !== vin)].slice(
				0,
				3
			);
			localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
			return newHistory;
		});
	};

	return { history, addVinToHistory };
};
