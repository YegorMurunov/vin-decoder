import clsx from 'clsx';
import type {
	IHeadingProps,
	TFontWeight,
	THeadingLevel,
	TTextAlign
} from '../../../types/ui/heading.types';
import { memo } from 'react';

// default sizes for each heading level
const levelSizes: Record<THeadingLevel, string> = {
	h1: 'text-4xl',
	h2: 'text-3xl',
	h3: 'text-2xl',
	h4: 'text-xl',
	h5: 'text-lg',
	h6: 'text-base'
};

// Maping for text alignment
const alignClasses: Record<TTextAlign, string> = {
	left: 'text-left',
	center: 'text-center',
	right: 'text-right'
};

// Mapping for font weights
const weightClasses: Record<TFontWeight, string> = {
	normal: 'font-normal',
	medium: 'font-medium',
	semibold: 'font-semibold',
	bold: 'font-bold',
	extrabold: 'font-extrabold'
};

const Heading = ({
	level = 'h2',
	size,
	align = 'left',
	fontWeight = 'normal',
	color = 'text-sky-800',
	className,
	children,
	...props
}: IHeadingProps) => {
	const Tag = level;
	const appliedSize = size ? size : levelSizes[level];

	return (
		<Tag
			{...props}
			className={clsx(
				appliedSize,
				weightClasses[fontWeight],
				alignClasses[align],
				color,
				'leading-tight tracking-tight',
				className
			)}
		>
			{children}
		</Tag>
	);
};

export default memo(Heading);
