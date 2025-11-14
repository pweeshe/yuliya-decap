import { useEffect, useRef, useState } from "react"
import Button from "./Button"

const HeroText = () => {
    const [isVisible, setIsVisible] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const scrollToServices = () => {
        const servicesSection = document.getElementById('services')
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            {
                threshold: 0.2,
                rootMargin: '0px'
            }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
            }
        }
    }, [])

    return (
        <div 
            ref={containerRef}
            className="w-[290px]  flex flex-col gap-4 h-full justify-center hero-text-container relative"
        >
            <div className="flex flex-col max-mobile:pt-32">
                <p 
                    className={`text-primary hero-text-scaled-extra-small md:hero-text-scaled-small transition-all duration-700 ease-out ${
                        isVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '0ms' }}
                >
                    EMPOWERING
                </p>
                <p 
                    className={`text-primary hero-text-scaled transition-all duration-700 ease-out ${
                        isVisible 
                            ? 'opacity-100 translate-y-0 scale-100' 
                            : 'opacity-0 translate-y-8 scale-95'
                    }`}
                    style={{ transitionDelay: '150ms' }}
                >
                    YOU
                </p>
            </div>
            <p 
                className={`text-gray-500 text-xs max-w-[30vw] hidden md:block transition-all duration-700 ease-out ${
                    isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '300ms' }}
            >
                I guide individuals toward a balanced, healthy, and fulfilling life by integrating holistic wellness, mindful movement, and nourishing nutrition.
            </p>
            <div 
                className={` flex flex-row gap-4 max-mobile:flex-col transition-all duration-700 ease-out ${
                    isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '450ms' }}
            >
                <Button onClick={scrollToServices}>BEGIN JOURNEY</Button>
                <Button variant="outline" withArrow>Contact Me</Button>
            </div>

        </div>
    )
}

export default HeroText
