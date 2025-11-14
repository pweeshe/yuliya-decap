import { useEffect, useRef, useState } from "react"
import Button from "./Button"
import { useNavigate } from "@tanstack/react-router"
const AboutMeText = () => {
    const [isVisible, setIsVisible] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()
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
            className="w-[300px] max-mobile:w-[150px] flex flex-col gap-4 h-full justify-center about-me-text-container relative"
        >
            <div className="flex flex-col overflow-visible">
                <h2
                    className={`text-primary about-me-text-scaled max-[700px]:about-me-text-two-lines transition-all duration-1000 ease-out ${isVisible
                        ? 'opacity-100 translate-x-0 rotate-0'
                        : 'opacity-0 translate-x-12 -rotate-3'
                        }`}
                >
                    <span
                        className={`max-[700px]:hidden inline-block transition-all duration-700 ease-out ${isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                            }`}
                        style={{ transitionDelay: '0ms' }}
                    >
                        About me
                    </span>
                    <span
                        className={`hidden max-[700px]:block transition-all duration-700 ease-out ${isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                            }`}
                        style={{ transitionDelay: '0ms' }}
                    >
                        About
                    </span>
                    <span
                        className={`hidden max-[700px]:block transition-all duration-700 ease-out ${isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                            }`}
                        style={{ transitionDelay: '100ms' }}
                    >
                        me
                    </span>
                </h2>
            </div>
            <p
                className={`text-gray-500 text-xs max-w-[30vw] hidden md:block transition-all duration-700 ease-out ${isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                    }`}
                style={{ transitionDelay: '200ms' }}
            >
                From struggling with low energy and emotional eating to discovering the power of movement, yoga, and strength training — my path has been one of transformation and growth. Today, I bring those lessons to help others feel strong, balanced, and empowered.
            </p>
            <div
                className={`flex flex-row gap-4 max-mobile:flex-col transition-all duration-700 ease-out ${isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                    }`}
                style={{ transitionDelay: '350ms' }}
            >
                <Button style={{ padding: 0 }} variant="outline" withArrow
                    onClick={() => navigate({ to: '/mystory' })}
                >
                    Read My Full Story
                </Button>
            </div>
        </div>
    )
}

export default AboutMeText

