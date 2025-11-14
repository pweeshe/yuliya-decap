import ArrowDown from "./ArrowDown"

interface HeaderButtonProps {
    children: React.ReactNode;
    showArrow?: boolean;
    onClick?: () => void;
}

const HeaderButton = ({ children, showArrow, onClick }: HeaderButtonProps) => {
    return (
        <button className="cursor-pointer text-xs font-medium text-primary hover:text-secondary flex items-center gap-1"
            onClick={onClick}
        >
            <span>{children}</span>
            {showArrow && <ArrowDown fill="currentColor" width={10} height={10} />}
        </button>
    )
}

export default HeaderButton 
