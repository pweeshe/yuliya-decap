import { useState, useEffect } from "react"
import HeaderButton from "./HeaderButton"
import Dropdown from "./Dropdown"
import { useNavigate } from "@tanstack/react-router"

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <div className="w-full flex justify-center fixed top-0 left-0 right-0 z-50">
                <div className={`w-[820px] max-mobile:w-full max-mobile:rounded-none rounded-full px-12 max-mobile:px-8 flex flex-row justify-between items-center h-16 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md mt-2" : "mt-0"} max-mobile:mt-0`}>
                    <img src="/images/logo.png" alt="Logo" className="h-8 cursor-pointer" onClick={() => navigate({ to: '/' })} />

                    {/* Desktop menu */}
                    <div className="flex flex-row gap-6 max-mobile:hidden items-center">
                        <HeaderButton onClick={() => navigate({ to: '/' })}>Home</HeaderButton>
                        <Dropdown
                            trigger={<HeaderButton showArrow>Services</HeaderButton>}
                            items={[
                                { label: 'Holistic Body Transformation', href: '/services/holistic-body-transformation' },
                                { label: 'Post-Pregnancy Transformation', href: '/services/post-pregnancy-transformation' }
                            ]}
                        />
                        <HeaderButton onClick={() => navigate({ to: '/mystory' })}>About</HeaderButton>
                        <HeaderButton>Vlog</HeaderButton>
                        <HeaderButton
                            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                        >
                            Contact
                        </HeaderButton>
                        <HeaderButton showArrow>Language</HeaderButton>
                    </div>

                    {/* Mobile burger button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="hidden max-mobile:flex flex-col gap-1.5 w-10 h-10 justify-center items-center rounded-full hover:bg-gray-200 transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile side panel */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-40 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} hidden max-mobile:block`}>
                <div className="flex flex-col gap-4 pt-24 px-6">
                    <HeaderButton
                        onClick={() => navigate({ to: '/' })}
                    >Home</HeaderButton>
                    <Dropdown
                        trigger={<HeaderButton showArrow>Services</HeaderButton>}
                        items={[
                            { label: 'Holistic Body Transformation', href: '/services/holistic-body-transformation' },
                            { label: 'Post-Pregnancy Transformation', href: '/services/post-pregnancy-transformation' }
                        ]}
                    />
                    <HeaderButton>About</HeaderButton>
                    <HeaderButton>Vlog</HeaderButton>
                    <HeaderButton>Contact</HeaderButton>
                    <HeaderButton showArrow>Language</HeaderButton>
                </div>
            </div>

            {/* Overlay */}
            {isMobileMenuOpen && (
                <div
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="fixed inset-0 bg-black/50 z-30 hidden max-mobile:block"
                />
            )}
        </>
    )
}

export default Header 