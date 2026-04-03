import { useState, useCallback } from 'react';

export const useClipboard = () => {
	const [error, setError] = useState<string | null>(null);

	const readFromClipboard = useCallback(async (): Promise<string | null> => {
		setError(null);

		if (!navigator?.clipboard) {
			const errMsg = 'The browser does not support the Clipboard API.';
			setError(errMsg);
			console.warn(errMsg);
			return null;
		}

		try {
			const text = await navigator.clipboard.readText();
			return text;
		} catch (err) {
			// User may have denied permission or an error occurred
			const errMsg = 'Error accessing clipboard. Please check permissions.';
			setError(errMsg);
			console.error(err);
			return null;
		}
	}, []);

	return { readFromClipboard, error };
};
