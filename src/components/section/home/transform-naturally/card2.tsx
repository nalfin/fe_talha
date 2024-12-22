// import { cn } from '@/lib/utils'

import TalhaIcons from '@/components/ui/talha-icon'

interface CardTNProps {
    icon:
        | 'checklist-minimalistic-bold'
        | 'podcast'
        | 'help-hexagon-filled'
        | 'thick-success'
    title: string
    desc: string
}

const CardTN2 = ({ icon, title, desc }: CardTNProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 rounded-[32px] bg-white p-8">
            <span className="w-fit rounded-full bg-[#ECF8FD] p-[10px]">
                <TalhaIcons
                    name={icon}
                    className="size-[30px] text-brand-main"
                />
            </span>
            <h6 className="text-center text-[24px] font-semibold leading-[28.8px] xl:text-[28px] xl:leading-[33.6px]">
                {title}
            </h6>
            <p className="text-md w-full text-center text-[#707070]">{desc}</p>
        </div>
    )
}

export default CardTN2
