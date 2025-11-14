import { useState } from "react"
import ServiceCheckout from "./ServiceCheckout"

const ServiceCheckoutFloating = ({
    title,
    description,
    groupPrice,
    oneOnOnePrice,
    checkoutLink,
    checkoutLinkPersonalised,
}: {
    title: string;
    description: React.ReactNode;
    groupPrice: string;
    oneOnOnePrice: string;
    checkoutLink: string;
    checkoutLinkPersonalised: string;
}) => {
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
    
    return (
        <>
            {/* Floating button - visible below 1200px */}
            <button
                onClick={() => setIsCheckoutOpen(!isCheckoutOpen)}
                className="fixed bottom-6 right-6 z-50 bg-secondary text-primary px-6 py-3 shadow-lg hover:bg-secondary/90 transition-all font-semibold"
                aria-label="Toggle checkout"
            >
                Checkout
            </button>
            
            {/* Popover menu overlay */}
            {isCheckoutOpen && (
                <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setIsCheckoutOpen(false)}>
                    <div 
                        className="fixed right-0 top-0 bottom-0 overflow-y-auto animate-slide-in-right"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="h-full flex items-start pt-24">
                            <ServiceCheckout
                                title={title}
                                description={description}
                                groupPrice={groupPrice}
                                oneOnOnePrice={oneOnOnePrice}
                                checkoutLink={checkoutLink}
                                checkoutLinkPersonalised={checkoutLinkPersonalised}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ServiceCheckoutFloating


