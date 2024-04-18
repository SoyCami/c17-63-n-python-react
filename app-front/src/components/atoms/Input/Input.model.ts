import type React from 'react';
import { type ChangeEvent, type ReactNode } from 'react';

export interface InputM {
	// general field props
	children?: ReactNode;
	className?: string;
	invalid?: boolean;

	// -> general field font style props
	fontWeight?: string;
	fontStyle?: string;

	// -> general field styles props
	width?: string;
	height?: string;
	margin?: string;
	padding?: string;
	bg?: string;
	hBg?: string;
	fBg?: string;
	dBg?: string;
	borderTop?: string;
	borderBottom?: string;
	borderLeft?: string;
	borderRight?: string;
	radius?: string;
	borderColor?: string;
	hBorderColor?: string;
	fBorderColor?: string;
	dBorderColor?: string;
	eBorderColor?: string;
	shadow?: string;

	// label props
	textLabel?: string;
	htmlFor?: string;
	onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;

	// -> label font style props
	fontSizeLabel?: string;
	colorLabel?: string;
	hColorLabel?: string;
	fColorLabel?: string;
	dColorLabel?: string;
	centerColorLabel?: string;

	// input props
	type?: string;
	name: string;
	placeholder?: string;
	id: string;
	value?: string;
	defaultValue?: string | null;
	required?: boolean;
	inputMode?:
		| 'email'
		| 'search'
		| 'text'
		| 'tel'
		| 'none'
		| 'url'
		| 'numeric'
		| 'decimal';
	maxLength?: number;
	minLength?: number;
	pattern?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
	sizeInput?: number;
	onlyNumbers?: boolean;

	// -> input font styles props
	textAlignInput?: string;
	fontSizeInput?: string;
	colorInput?: string;
	phColorInput?: string;
	hColorInput?: string;
	fColorInput?: string;
	dColorInput?: string;
}
