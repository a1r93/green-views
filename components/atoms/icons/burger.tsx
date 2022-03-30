import BaseIcon, { BaseIconProps } from './BaseIcon';

const BurgerIcon = (props: BaseIconProps) => (
    <BaseIcon {...props}>
        <line y1="4" x2="24" y2="4" stroke="white" stroke-width="3" />
        <line y1="12" x2="24" y2="12" stroke="white" stroke-width="3" />
        <line y1="20" x2="24" y2="20" stroke="white" stroke-width="3" />
    </BaseIcon>
);

export default BurgerIcon;
