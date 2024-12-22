import { cn } from '@/lib/utils'

interface CardsGTProps {
    children: React.ReactNode
    title: string
    desc: string
    classImg?: string
}

const CardGT2 = ({ children, title, desc, classImg }: CardsGTProps) => {
    return (
        <div className="flex flex-col gap-6 rounded-[32px] bg-white px-6 pb-10 pt-6">
            <span
                className={cn(
                    'block h-[250px] w-full overflow-hidden rounded-[16px] bg-cover bg-center',
                    classImg
                )}
            />
            <div className="flex items-center gap-3 rounded-[16px] bg-[#292929] px-4 py-3">
                <span className="rounded-full bg-white p-[10px]">
                    {children}
                </span>
                <h6 className="text-md font-semibold text-white">{title}</h6>
            </div>
            <p className="text-md w-full text-[#5C5C5C] xl:w-[300px]">{desc}</p>
        </div>
    )
}

export default CardGT2
