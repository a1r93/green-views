import { ReactElement } from 'react';

interface IBaseIconProps {
    children: ReactElement | ReactElement[];
    id?: string;
    className?: string;
    scale?: number;
    style?: React.CSSProperties;
}

export type BaseIconProps = Pick<IBaseIconProps, 'className' | 'scale' | 'id'>;

const BaseIcon = ({ className, scale = 1, children, id, style }: IBaseIconProps) => (
    <svg
        width={scale * 24}
        height={scale * 24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        id={`${id}-svg`}
        style={style}
    >
        {children}
        <g id={`${id}-group`}></g>
    </svg>
);

export default BaseIcon;
