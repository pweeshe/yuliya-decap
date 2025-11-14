import Button from "./Button";

const ServiceCheckout = ({
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
}
) => {
    return (
        <div className="flex flex-col gap-2 max-w-[280px]">
            <div className="flex flex-col gap-6 bg-primary p-6 max-w-[280px] h-fit">
                <h2 className="text-2xl mb-2 text-white">{title}</h2>
                <p className="text-sm text-white/90">{description}</p>

                <div className="flex flex-col gap-4 text-white">
                    <div className="border-t border-white/20 pt-4">
                        <p className="text-sm mb-1">Group Coaching</p>
                        <p className="text-2xl font-bold">{groupPrice} USD</p>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                        <p className="text-sm mb-1">1:1 Coaching</p>
                        <p className="text-2xl font-bold">{oneOnOnePrice} USD</p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 mt-2">
                    <a href={checkoutLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="filled" className="hover:bg-white hover:text-primary! w-full">
                            Buy Group Coaching
                        </Button>
                    </a>
                    <a href={checkoutLinkPersonalised} target="_blank" rel="noopener noreferrer">
                        <Button variant="filled" className="hover:bg-white hover:text-primary! w-full">
                            Buy 1:1 Coaching
                        </Button>
                    </a>
                    <Button variant="outline" withArrow className="text-white">
                        Book Free Call
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default ServiceCheckout;

