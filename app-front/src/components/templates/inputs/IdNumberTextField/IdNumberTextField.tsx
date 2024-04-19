import { type ReactElement } from 'react';
import { TextField } from '../../../inputs/TextField/TextField';

interface IdNumberM {
	onChange?: (e: any) => void;
	defaultValue?: string | null;
	name?: string;
	id?: string;
	textLabel?: string;
	placeholder?: string;
	colorLabel?: string;
	colorInput?: string;
	bgTextField?: string;
	fBorderColor?: string;
	borderColor?: string;
	sizeInput?: number;
	minLength?: number;
	maxLength?: number;
}

export const IdNumberTextField = ({
	onChange,
	defaultValue,
	name = 'idNum',
	id = 'idNum',
	textLabel = 'Número de identificación',
	placeholder,
	colorLabel = '#EFEFEF',
	colorInput = '#888888',
	bgTextField = '#262626',
	fBorderColor,
	borderColor = 'transparent',
	sizeInput = 30,
	minLength = 1,
	maxLength = 30,
}: IdNumberM): ReactElement => {
	return (
		<TextField
			colorLabel={colorLabel}
			colorInput={colorInput}
			bg={bgTextField}
			fBorderColor={fBorderColor}
			borderColor={borderColor}
			defaultValue={defaultValue}
			sizeInput={sizeInput}
			minLength={minLength}
			maxLength={maxLength}
			type='number'
			textLabel={textLabel}
			placeholder={placeholder}
			id={id}
			name={name}
			onChange={onChange}
		/>
	);
};
