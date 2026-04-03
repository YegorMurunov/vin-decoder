export type THeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TTextAlign = 'left' | 'center' | 'right';
export type TFontWeight =
	| 'normal'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'extrabold';

export interface IHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	level?: THeadingLevel; // HTML tag
	size?: string; // size of the heading
	align?: TTextAlign; // Text alignment
	fontWeight?: TFontWeight; // Font weight
	color?: string; // Text color
}
