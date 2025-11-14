import { useLocation } from "@tanstack/react-router"
import WhatsappButton from "./WhatsappIcon"

const ServicesSideMenu = () => {
    const currentHollisticBodyTransformation = useLocation().pathname === "/services/holistic-body-transformation"
    const currentPostPregnancyTransformation = useLocation().pathname === "/services/post-pregnancy-transformation"
    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-8 bg-primary w-80 p-10 pl-12  h-fit">
                <h1 className="text-white text-2xl font-bold">My Services</h1>
                <div className="flex flex-col gap-6">
                    <Option isCurrent={currentHollisticBodyTransformation} title="Holistic Body Transformation" href="holistic-body-transformation" />
                    <Option isCurrent={currentPostPregnancyTransformation} title="Post-Pregnancy Transformation" href="post-pregnancy-transformation" />
                </div>
            </div>
            <div className="flex flex-col gap-8 bg-primary/10 w-80 p-10 pl-12 h-fit">
                <h1 className="text-primary text-2xl font-bold">Custom Inquiry?</h1>
                <div className="flex flex-col gap-6">
                    <p className="text-sm text-primary ">
                        Contact me directly Via whatsApp for custom inquiry. I will reply as soon as possible
                    </p>
                    <WhatsappButton />  
                </div>
            </div>
        </div>
    )
}

export const Option = ({ title, href, isCurrent }: { isCurrent: boolean, title: string, href: string }) => {
    return (
        <div className="flex flex-col gap-2 text-sm cursor-pointer">
            <a href={href} className={`${isCurrent ? 'text-secondary' : 'text-white'}`}>{title}</a>
        </div>
    )
}

export default ServicesSideMenu
