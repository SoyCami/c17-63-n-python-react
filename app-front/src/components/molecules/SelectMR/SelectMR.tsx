'use client';



import { IconClose } from '@/components/svgs/IconClose';
import { type SelectMRM, type SelectOptionM } from './SelectMR.model';
import styles from './SelectMR.module.css';
import React, { type ReactElement, useEffect, useRef, useState } from 'react';
import { IconArrow } from '@/components/svgs/IconArrow';

export const SelectMR = ({
	// field general props
	// children,
	className,
	invalid,
	optionList,
	onSelect,

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

	// -> font label props
	fontSizeLabel,
	colorLabel,
	hColorLabel,
	fColorLabel,
	dColorLabel,
	centerColorLabel,

	// input props
	name,
	placeholder = 'Buscar...',
	id,
	valueOption,
	defaultOption,
	required,
	maxLength,
	pattern,
	disabled,
	sizeInput,

	// -> font Input props
	textAlignInput,
	fontSizeInput,
	colorInput,
	phColorInput,
	hColorInput,
	fColorInput,
	dColorInput,
	iconSize,

	// option list props
	widthOptionList,
}: SelectMRM): ReactElement => {
	const selectStyles = {
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
		'--center-color-label': centerColorLabel, // "var(--primary-gray)

		// input styles
		// -> input font styles
		'--text-align-input': textAlignInput,
		'--font-size-input': fontSizeInput,
		'--color-input': colorInput,
		'--ph-color-input': phColorInput,
		'--h-color-input': hColorInput ?? colorInput,
		'--f-color-input': fColorInput ?? colorInput,
		'--d-color-input': dColorInput,

		// option list styles
		'--width-option-list': widthOptionList,
	};

	const [filteredOptions, setFilteredOptions] = useState<SelectOptionM[]>([]);
	const [selectedOption, setSelectedOption] = useState<SelectOptionM | null>(null);
	const [inputValue, setInputValue] = useState('');
	useEffect(() => {
		const initialOption = optionList.find(
			(option) => option.value === (valueOption ?? defaultOption),
		);
		setFilteredOptions(optionList);
		setSelectedOption(initialOption ?? null);
		setInputValue(initialOption?.formatField ?? '');
	}, [valueOption, defaultOption, optionList]);

	const [trigger, setTrigger] = useState('');
	const [openOptions, setOpenOptions] = useState(false);

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		// console.log('select');
		if (trigger === 'optionSelected') {
			setInputValue(selectedOption?.formatField ?? '');
			setTrigger('');
			setOpenOptions(false);
			onSelect?.(selectedOption ? { ...selectedOption, fieldName: name } : null);
		}
	}, [name, onSelect, selectedOption, trigger]);

	return (
		<div
			onMouseDown={(e) => {
				e.preventDefault();
			}}
			
			className={`${className ?? ''} ${styles.selectBox}`}
		>
			<div
				className={[
					styles.selectContentWrap,
					openOptions ? styles.open : '',
					disabled ? styles.disabled : '',
				]
					.filter((str) => str.trim() !== '')
					.join(' ')}
				onClick={(e) => {
					const clickedElement = e.target as HTMLElement;
					const closestSvgElement = clickedElement.closest('svg');
					if (!closestSvgElement?.classList.contains(styles.arrowIcon)) {
						inputRef.current?.focus();
						setOpenOptions(true);
						selectedOption !== null && setFilteredOptions(optionList);
					}
				}}
			>
				<div className={styles.labelFieldWrap}>
					{textLabel && (
						<label className={styles.labelWrap} htmlFor={htmlFor ?? id}>
							<span
								className={[
									styles.label,
									disabled ? styles.disabled : '',
									!inputValue ? styles.centerLabel : '',
									openOptions ? styles.open : styles.noOpen,
								]
									.filter((str) => str.trim() !== '')
									.join(' ')}
							>
								{textLabel}
								{required && <span style={{ color: 'red' }}>*</span>}
							</span>
							<span className={`${styles.labelHidden}`}>.</span>
						</label>
					)}
					<div className={styles.flagInputWrap}>
						<input
							className={[
								styles.input,
								disabled ? styles.disabled : '',
								openOptions ? styles.open : '',
							]
								.filter((str) => str.trim() !== '')
								.join(' ')}
							type={'text'}
							id={id}
							name={name}
							required={required}
							maxLength={maxLength}
							size={sizeInput}
							pattern={pattern}
							ref={inputRef}
							autoComplete={'off'}
							disabled={disabled}
							placeholder={placeholder}
							onChange={
								!valueOption
									? (e) => {
											setOpenOptions(true);
											const value = e.target.value;
											setInputValue(value);
											const filteredOptions = optionList.filter((option) => {
												return option.formatField
													.toLowerCase()
													.includes(value.toLowerCase());
											});
											setFilteredOptions(filteredOptions);
											setSelectedOption(null);
											onSelect?.(null);
										}
									: undefined
							}
							onFocus={() => {
								setOpenOptions(true);
							}}
							onBlur={(event) => {
								setOpenOptions(false);
							}}
							value={inputValue}
						/>
					</div>
				</div>
				{!disabled && !valueOption && (
					<div className={styles.iconsBox}>
						{inputValue && (
							<IconClose
								className={styles.clearIcon}
								size={'10'}
								onClick={() => {
									setOpenOptions(true);
									setInputValue('');
									setFilteredOptions(optionList);
									setSelectedOption(null);
									onSelect?.(null);
								}}
							/>
						)}
						<IconArrow
							size={iconSize}
							className={[styles.arrowIcon, openOptions ? styles.rotate : '']
								.filter((str) => str.trim() !== '')
								.join(' ')}
							onClick={() => {
								if (!openOptions) {
									inputRef.current?.focus();
									selectedOption !== null && setFilteredOptions(optionList);
								} else {
									inputRef.current?.blur();
								}
								setOpenOptions(!openOptions);
							}}
						/>
					</div>
				)}
			</div>
			{!disabled && !valueOption && (
				<ul
					className={[styles.optionList, openOptions ? styles.show : '']
						.filter((str) => str.trim() !== '')
						.join(' ')}
				>
					{filteredOptions.length === 0 ? (
						<li className={styles.noOptions}>
							<span className={styles.textOption}>No se encontraron resultados</span>
						</li>
					) : (
						filteredOptions?.map((option) => (
							<li
								className={styles.option}
								key={option.value}
								value={option.formatField}
								onClick={() => {
									setTrigger('optionSelected');
									setSelectedOption(option);
								}}
							>
								<span className={styles.textOption}>{option.formatField}</span>
							</li>
						))
					)}
				</ul>
			)}
		</div>
	);
};
