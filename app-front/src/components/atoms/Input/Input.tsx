'use client';

import styles from './InputMR.module.css';
import { type InputM } from './Input.model';
import React, {
	type ChangeEvent,
	type ReactElement,
	useEffect,
	useRef,
	useState,
} from 'react';

export const InputMR = ({
	// field general props
	// children,
	className,
	invalid,

	// -> font field general props
	fontWeight,
	fontStyle,

	// -> style field general props
	width,
	height,
	padding,
	margin,
	bg,
	hBg,
	fBg,
	dBg,
	borderTop,
	borderBottom,
	borderRight,
	borderLeft,
	radius,
	borderColor,
	hBorderColor,
	fBorderColor,
	dBorderColor,
	eBorderColor,
	shadow,

	// label props
	textLabel,
	htmlFor,
	onBlur,

	// -> font label props
	fontSizeLabel,
	colorLabel,
	hColorLabel,
	fColorLabel,
	dColorLabel,
	centerColorLabel,

	// input props
	type,
	name,
	placeholder,
	id,
	value,
	defaultValue,
	required,
	minLength,
	maxLength,
	inputMode,
	pattern,
	onChange,
	disabled,
	sizeInput,
	onlyNumbers,

	// -> font Input props
	textAlignInput,
	fontSizeInput,
	colorInput,
	phColorInput,
	hColorInput,
	fColorInput,
	dColorInput,
}: InputM): ReactElement => {
	const TextInputStyles = {
		// general field styles
		//  -> general field font styles
		'--font-weight': fontWeight,
		'--font-style': fontStyle,

		// -> general field styles
		'--width': width,
		'--height': height,
		'--margin': margin,
		'--padding': padding,
		'--bg': bg,
		'--h-bg': hBg ?? bg,
		'--f-bg': fBg ?? bg,
		'--d-bg': dBg,
		'--border-top': borderTop,
		'--border-bottom': borderBottom,
		'--border-right': borderRight,
		'--border-left': borderLeft,
		'--radius': radius,
		'--border-color': invalid ? eBorderColor ?? 'var(--primary-red)' : borderColor,
		'--h-border-color': hBorderColor ?? borderColor,
		'--f-border-color': fBorderColor ?? borderColor,
		'--d-border-color': dBorderColor,
		'--e-border-color': eBorderColor,
		'--shadow': shadow,

		// label styles
		// -> label font styles
		'--font-size-label': fontSizeLabel,
		'--color-label': colorLabel,
		'--h-color-label': hColorLabel ?? colorLabel,
		'--f-color-label': fColorLabel ?? colorLabel,
		'--d-color-label': dColorLabel,
		'--center-color-label': centerColorLabel ?? colorLabel,

		// input styles
		// -> input font styles
		'--text-align-input': textAlignInput,
		'--font-size-input': fontSizeInput,
		'--color-input': colorInput,
		'--ph-color-input': phColorInput,
		'--h-color-input': hColorInput ?? colorInput,
		'--f-color-input': fColorInput ?? colorInput,
		'--d-color-input': dColorInput,

		// -> input style
	};

	const [inputValue, setInputValue] = useState<string>('');
	useEffect(() => {
		setInputValue(value ?? defaultValue ?? '');
	}, [value, defaultValue]);

	const inputRef = useRef<HTMLInputElement>(null);

	const onFieldClick = (): void => {
		inputRef.current?.focus();
	};

	const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
		if (onlyNumbers) {
			const numericValue = e.target.value.replace(/[^0-9]/g, '');
			setInputValue(numericValue);
			onChange?.({ ...e, target: { ...e.target, value: numericValue } });
		} else {
			setInputValue(e.target.value);
			onChange?.(e);
		}
	};

	const handlePasswordIcon = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	): void => {
		const input = inputRef.current;
		if (input) {
			if (input.type === 'password') {
				input.type = 'text';
			} else {
				input.type = 'password';
			}
		}
	};

	return (
		<div
			className={`${className ?? ''} ${styles['field-box']} ${
				value ? styles['fixed-value'] : ''
			} ${disabled ? styles.disabled : ''}`}
			onClick={onFieldClick}
		>
			<div className={styles['field-content']}>
				<div className={styles['input-field-box']}>
					<input
						inputMode={inputMode}
						onBlur={onBlur}
						autoComplete={'off'}
						className={`${styles['input-field']}`}
						type={type ?? 'text'}
						id={id}
						name={name}
						placeholder={placeholder}
						required={required}
						minLength={minLength}
						maxLength={maxLength}
						size={sizeInput}
						pattern={pattern}
						onChange={onInputChange}
						disabled={disabled}
						value={value ?? inputValue}
						ref={inputRef}
					/>
					{type === 'password' && (
						<div className={styles.iconEye} onClick={handlePasswordIcon}>
							{/* <IconLockEye size={'10'} /> */}
						</div>
					)}
				</div>
				{textLabel && (
					<label className={`${styles['label-field-box']}`} htmlFor={htmlFor ?? id}>
						<span
							className={` ${styles['label-field']} ${disabled ? styles.disabled : ''} ${
								value ?? inputValue ? '' : styles['center-label']
							} `}
						>
							{textLabel}
							{required && <span style={{ color: 'red' }}>*</span>}
						</span>
						<span className={`${styles['label-hidden']}`}>.</span>
					</label>
				)}
			</div>
		</div>
	);
};
