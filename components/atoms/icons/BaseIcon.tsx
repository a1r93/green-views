import { ReactElement } from 'react';

interface IBaseIconProps {
    className?: string;
    scale?: number;
    children: ReactElement | ReactElement[];
}

export type BaseIconProps = Pick<IBaseIconProps, 'className' | 'scale'>;

const BaseIcon = ({ className, scale = 1, children }: IBaseIconProps) => (
    <svg
        width={scale * 24}
        height={scale * 24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        {children}
    </svg>
);

export default BaseIcon;
