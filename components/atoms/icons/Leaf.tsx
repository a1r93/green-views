import BaseIcon, { BaseIconProps } from './BaseIcon';

const LeafIcon = (props: BaseIconProps) => (
    <BaseIcon {...props}>
        <path d="M12 21.5V16M12 16L7.5 12V7L12 2.5L16.5 7V12L12 16Z" stroke="white" strokeOpacity="0.5" />
    </BaseIcon>
);

export default LeafIcon;
