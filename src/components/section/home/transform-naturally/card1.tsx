interface CardTNProps {
    text: string
    heading: string
    headline: string
}
const CardTN1 = ({ text, heading, headline }: CardTNProps) => {
    return (
        <div className="space-y-6 py-8">
            <div className="space-y-4">
                <span className="rounded-full bg-[#030303] px-4 py-2 text-sm font-semibold text-white">
                    {text}
                </span>
                <h1 className="text-[30px] font-semibold leading-[36px] text-white xl:text-[56px] xl:leading-[67.2px]">
                    {heading}
                </h1>
            </div>
            <p className="text-md w-full text-white">{headline}</p>
        </div>
    )
}

export default CardTN1
