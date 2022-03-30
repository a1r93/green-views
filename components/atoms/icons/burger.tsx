interface IBaseIconProps {
    className?: string;
    scale?: number;
}

const BurgerIcon = ({ className, scale = 1 }: IBaseIconProps) => (
    <svg
        width={scale * 24}
        height={scale * 24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <line y1="4" x2="24" y2="4" stroke="white" stroke-width="3" />
        <line y1="12" x2="24" y2="12" stroke="white" stroke-width="3" />
        <line y1="20" x2="24" y2="20" stroke="white" stroke-width="3" />
    </svg>
);

export default BurgerIcon;
