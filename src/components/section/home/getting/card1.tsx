interface CardGTProps {
    text: string
    heading: string
    headline: string
}

const CardGT1 = ({ text, heading, headline }: CardGTProps) => {
    return (
        <>
            <div className="group h-[350px] w-full [perspective:1000px]">
                <div className="relative h-full w-full rounded-[32px] transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]">
                    {/* Front Face */}
                    <div className="absolute left-0 top-0 h-full w-full rounded-[32px] bg-white [backface-visibility:hidden]">
                        <div className="space-y-6 px-6 pb-12 pt-12">
                            <span className="rounded-full bg-[#030303] px-4 py-2 text-sm font-semibold text-white">
                                {text}
                            </span>
                            <h1 className="text-[30px] font-semibold leading-[36px] xl:text-[56px] xl:leading-[67px]">
                                {heading}
                            </h1>
                            <p className="text-md hidden w-full text-[#5C5C5C]">
                                {headline}
                            </p>
                        </div>
                    </div>
                    {/* Back Face */}
                    <div className="absolute left-0 top-0 h-full w-full rounded-[32px] bg-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <div className="space-y-6 px-6 pb-12 pt-12">
                            <span className="rounded-full bg-[#030303] px-4 py-2 text-sm font-semibold text-white">
                                {text}
                            </span>
                            <h1 className="text-[30px] font-semibold leading-[36px] xl:text-[56px] xl:leading-[67px]">
                                {heading}
                            </h1>
                            <p className="text-md w-full text-[#5C5C5C]">
                                {headline}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardGT1
