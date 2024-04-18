import { InputM } from "@/components/atoms/Input/Input.model";

export interface SelectMRM extends InputM {
	// general props
	onSelect?: (option: (SelectOptionM & { fieldName: string }) | null) => void;
	optionList: SelectOptionM[];
	widthOptionList?: string;
	valueOption?: string;
	defaultOption?: string;
	iconSize?: string;
}

export interface SelectOptionM {
	value: string;
	formatField: string;
}
