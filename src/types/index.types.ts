export interface VinVariable {
	VariableId: number;
	Variable: string;
	Value: string | null;
}

export interface VinDecodeResponse {
	Message: string;
	Results: VinVariable[];
}

export interface VariablesResponse {
	Message: string;
	Results: VehicleVariable[];
}

export interface VehicleVariable {
	ID: number;
	Name: string;
	Description: string;
	DataType: string;
	GroupName: string | null;
}
