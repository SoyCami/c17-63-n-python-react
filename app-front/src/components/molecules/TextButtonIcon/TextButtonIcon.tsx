import { ReactElement } from 'react';
import { TextButtonIconM } from './TextButtonIcon.model';

export const TextButtonIcon = ({
	className,
	text,
	icon,
	width,
	height,
	gap,
	color,
	justifyBtn,
	justifyTextBtn,
	fontStyle,
	fontSizeTitle,
	fontWeightBtn,

}: TextButtonIconM): ReactElement => {
	const stylesTextButtonIcon = {
		width,
		height,
		gap,
		color,
		justifyContent: justifyBtn,
		alignItems: justifyTextBtn,
		fontStyle,
		fontSize: fontSizeTitle,
		fontWeight: fontWeightBtn,
	};

	return (
		<div className={`flex items-center gap-${gap} justify-${justifyTextBtn} ${className ?? ''}`}>
			<button className="flex items-center gap-${gap} justify-${justifyTextBtn} bg-none border-none">
				<span className={`text-${color} font-${fontWeightBtn} text-${fontSizeTitle} font-${fontStyle} underline`}>{text}</span>
				<div className="flex items-center gap-${gap}" style={stylesTextButtonIcon}>
					{icon}
				</div>
			</button>
		</div>
	);
};
