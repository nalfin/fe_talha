interface CardHeroProps {
    children: React.ReactNode
    desc: string
}

const CardHero = ({ children, desc }: CardHeroProps) => {
    return (
        <div className="flex w-full flex-col items-center gap-1 xl:items-start xl:gap-3">
            <div className="flex items-center gap-1 xl:gap-2">{children}</div>
            <p
                className="text-center text-[12px] leading-[15.6px] xl:text-left xl:text-[16px] xl:leading-[24px]"
                dangerouslySetInnerHTML={{ __html: desc }}
            ></p>
        </div>
    )
}

export default CardHero
