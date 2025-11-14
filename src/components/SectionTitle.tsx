interface SectionTitleProps {
    children: React.ReactNode
}

const SectionTitle = ({ children }: SectionTitleProps) => {
    return (
        <div className="flex items-center justify-center my-8 w-full">
            {/* Left decorative lines */}
            <div className="flex flex-col mr-4 w-full">
                <div className="w-full h-1 bg-yellow-300 mb-1"></div>
                <div className="w-full h-1 bg-purple-300"></div>
            </div>
            
            {/* Title text */}
            <h2 className="text-4xl font-bold text-yellow-500 px-4 w-fit">{children}</h2>
            
            {/* Right decorative lines */}
            <div className="flex flex-col ml-4 w-full">
                <div className="w-full h-1 bg-yellow-300 mb-1"></div>
                <div className="w-full h-1 bg-purple-300"></div>
            </div>
        </div>
    )
}

export default SectionTitle; 
