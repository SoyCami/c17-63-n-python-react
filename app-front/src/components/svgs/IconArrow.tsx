import { type ReactElement } from 'react';
import { IconM } from './Icon.model';

export const IconArrow = ({
	className,
	width,
	height,
	transform,
	fill,
	size,
	color,
	onClick,
}: IconM): ReactElement => {
	return (
		<svg
			className={className}
			width={width ?? size ?? '13'}
			height={height ?? size ?? '8'}
			transform={transform}
			onClick={onClick}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 17 17'
			fill='none'
		>
			<path
				d='M10.5001 14.28C10.3734 14.28 10.2467 14.2333 10.1467 14.1333L5.80008 9.78668C5.46055 9.44453 5.27002 8.98204 5.27002 8.50001C5.27002 8.01799 5.46055 7.5555 5.80008 7.21335L10.1467 2.86668C10.3401 2.67335 10.6601 2.67335 10.8534 2.86668C11.0467 3.06001 11.0467 3.38001 10.8534 3.57335L6.50674 7.92001C6.18674 8.24001 6.18674 8.76001 6.50674 9.08001L10.8534 13.4267C11.0467 13.62 11.0467 13.94 10.8534 14.1333C10.7534 14.2267 10.6267 14.28 10.5001 14.28Z'
				fill={color ?? 'white'}
			/>
		</svg>
	);
};
