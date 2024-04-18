import type { ReactElement } from 'react';

export interface TextButtonIconM {
	// general style props
	icon?: ReactElement;
	className?: string;
	text?: string;
	width?: string;
	height?: string;
	margin?: string;
	padding?: string;
	bgColor?: string;
	hBgColor?: string;
	border?: string;
	radius?: string;
	shadow?: string;
	gap?: string;
	flexDirectionBtn?: string;
	justifyBtn?: string;
	justifyTextBtn?: string;

	// general fonts props
	fontWeightBtn?: string;
	fontStyle?: string;
	fontSizeTitle?: string;
	textAlign?: string;
	color?: string;
}
