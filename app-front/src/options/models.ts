interface SelectOptionM {
	value: string;
	formatField: string;
}

export const documents: SelectOptionM[] = [
	{
		value: 'ID',
		formatField: 'ID',
	},
	{
		value: 'PA',
		formatField: 'Pasaporte',
	},
	{
		value: 'DE',
		formatField: 'Documento extranjero',
	},
];
