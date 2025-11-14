import { useLocation } from "@tanstack/react-router"
import { useState } from "react"
import WhatsappButton from "./WhatsappIcon"

const ServicesFloatingMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const currentHollisticBodyTransformation = useLocation().pathname === "/services/holistic-body-transformation"
    const currentPostPregnancyTransformation = useLocation().pathname === "/services/post-pregnancy-transformation"
    
    return (
        <>
            {/* Floating button - visible below 1200px */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="fixed bottom-6 left-6 z-50 bg-primary text-white px-6 py-3 shadow-lg hover:bg-primary/90 transition-all font-semibold"
                aria-label="Toggle services menu"
            >
                My Services
            </button>
            
            {/* Popover menu overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setIsMenuOpen(false)}>
                    <div 
                        className="fixed left-0 top-0 bottom-0 overflow-y-auto animate-slide-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col mt-24">
                            <div className="flex flex-col gap-8 bg-primary w-80 p-10 pl-12 h-fit">
                                <h1 className="text-white text-2xl font-bold">My Services</h1>
                                <div className="flex flex-col gap-6">
                                    <Option 
                                        isCurrent={currentHollisticBodyTransformation} 
                                        title="Holistic Body Transformation" 
                                        href="holistic-body-transformation"
                                        onClick={() => setIsMenuOpen(false)}
                                    />
                                    <Option 
                                        isCurrent={currentPostPregnancyTransformation} 
                                        title="Post-Pregnancy Transformation" 
                                        href="post-pregnancy-transformation"
                                        onClick={() => setIsMenuOpen(false)}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-8 bg-[#F2EEF6] w-80 p-10 pl-12 h-fit">
                                <h1 className="text-primary text-2xl font-bold">Custom Inquiry?</h1>
                                <div className="flex flex-col gap-6">
                                    <p className="text-sm text-primary">
                                        Contact me directly Via whatsApp for custom inquiry. I will reply as soon as possible
                                    </p>
                                    <WhatsappButton />  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

const Option = ({ title, href, isCurrent, onClick }: { 
    isCurrent: boolean, 
    title: string, 
    href: string,
    onClick: () => void 
}) => {
    return (
        <div className="flex flex-col gap-2 text-sm cursor-pointer">
            <a 
                href={href} 
                onClick={onClick} 
                className={`${isCurrent ? 'text-secondary' : 'text-white'}`}
            >
                {title}
            </a>
        </div>
    )
}

export default ServicesFloatingMenu


