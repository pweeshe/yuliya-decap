import ArrowDown from "./ArrowDown"

type ButtonProps = {
    children: React.ReactNode
    withArrow?: boolean
    variant?: "filled" | "outline"
    className?: string
    style?: React.CSSProperties
    onClick?: () => void
}

const Button = ({ children, withArrow, variant = "filled", className, style, onClick }: ButtonProps) => {
    const baseClasses = "cursor-pointer text-sm rounded-xs px-4 py-2 w-fit transition-colors"

    const variantClasses = {
        filled: "bg-secondary text-primary hover:bg-primary hover:text-secondary",
        outline: "bg-transparent text-primary hover:text-secondary"
    }

    return (
        <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} style={style} onClick={onClick}>
            {children}
            {withArrow && (
                <span className="ml-2 inline-block -rotate-90">
                    <ArrowDown fill="currentColor" width={10} height={10} />
                </span>
            )}
        </button>
    )
}

export default Button
