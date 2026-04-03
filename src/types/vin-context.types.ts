export interface VinContextType {
	isLoading: boolean;
	setIsLoading: (value: boolean) => void;
	result: string | null;
	setResult: (value: string | null) => void;
	history: string[];
	addVinToHistory: (value: string) => void;
	clickedVin: string | null;
	setClickedVin: (value: string | null) => void;
}
