import SectionTitle from "./SectionTitle";
import Button from "./Button";
import { useAppearOnScroll } from "../hooks/useAppearOnScroll";
import { useNavigate } from "@tanstack/react-router";
const Services = () => {
    const { ref: firstCardRef, isVisible: firstCardVisible } = useAppearOnScroll();
    const { ref: secondCardRef, isVisible: secondCardVisible } = useAppearOnScroll();
    const navigate = useNavigate()
    return (
        <div id="services" className="flex flex-col items-center justify-center w-full gap-16">
            <SectionTitle>
                Services
            </SectionTitle>

            {/* Holistic Body Transformation Section */}
            <div 
                ref={firstCardRef as React.RefObject<HTMLDivElement>}
                className={`w-full max-w-6xl mx-auto px-4 min-[700px]:px-32 transition-all duration-1000 ease-out ${
                    firstCardVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                }`}
            >
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src="/images/exercise.png"
                            alt="Holistic Body Transformation - Woman with dumbbell in gym"
                            className="w-full lg:w-full max-lg:w-2/3 h-auto rounded-lg mx-auto"
                        />
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <h2 className="text-4xl font-bold text-yellow-500">
                            Holistic Body Transformation
                        </h2>

                        <p className="text-sm text-gray-700 leading-relaxed">
                            Discover how to stay healthy, youthful and energized for life Nutrition + Workout + Lifestyle in one 8-week program
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-gray-800">Learn how to:</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm">Support digestion and gut health for more energy</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm">Balance hormones and optimize circadian rhythm</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm">Build strength with yoga, workouts, and a personalized diet</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm">Create healthy routines that fit your busy lifestyle</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm">Stay youthful, active, and energetic long-term</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm">Reshape your body and achieve the results you've always wanted</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex items-center gap-2 text-yellow-600 hover:text-yellow-700 cursor-pointer transition-colors">
                            <Button withArrow variant="filled" onClick={() => navigate({ to: '/services/holistic-body-transformation' })}>See Program</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Post-Pregnancy Transformation Section */}
            <div 
                ref={secondCardRef as React.RefObject<HTMLDivElement>}
                className={`w-full max-w-6xl mx-auto px-4 min-[700px]:px-32 transition-all duration-1000 ease-out ${
                    secondCardVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                }`}
            >
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src="/images/pregnancy.png"
                            alt="Post-Pregnancy Transformation - Pregnant woman silhouette"
                            className="w-full lg:w-full max-lg:w-2/3 h-auto rounded-lg mx-auto"
                        />
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <h2 className="text-4xl font-bold text-yellow-500">
                            Post-Pregnancy Transformation
                        </h2>

                        <p className="text-sm text-gray-700 leading-relaxed">
                            A specialized program for women after childbirth. Rebuild your core and feminine health, regain confidence in your body, and thrive as a mother, partner and woman. You'll discover how to:
                        </p>

                        <div className="space-y-4">
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm">Shape your waist and strengthen your stomach</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm">Reduce stress and learn how to manage your more limited time</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm">Balance your diet and hormones</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex items-center gap-2 text-yellow-600 hover:text-yellow-700 cursor-pointer transition-colors">
                            <Button withArrow variant="filled" onClick={() => navigate({ to: '/services/post-pregnancy-transformation' })}>See Program</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
