import axios from 'axios';
import type {
	VariablesResponse,
	VinDecodeResponse
} from '../types/index.types';

const BASE_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles';

export const decodeVin = async (vin: string): Promise<VinDecodeResponse> => {
	const response = await axios.get(
		`${BASE_URL}/DecodeVinValues/${vin}?format=json`
	);
	return response.data;
};

export const getVariablesList = async (): Promise<VariablesResponse> => {
	const response = await axios.get(
		`${BASE_URL}/getvehiclevariablelist?format=json`
	);
	return response.data;
};
