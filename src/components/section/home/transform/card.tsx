import { Button } from '@/components/ui/button'
import TalhaIcons from '@/components/ui/talha-icon'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface CardTransformProps {
    number: string
    title: string
    text: string
    linkBtn1: string
    linkBtn2: string
    classImg: string
}

const CardTransform = ({
    number,
    title,
    text,
    linkBtn1,
    linkBtn2,
    classImg
}: CardTransformProps) => {
    return (
        <div className="flex flex-col items-center gap-8">
            <div className="group relative h-[240px] w-full md:w-[393px] xl:w-[416px]">
                <div className="h-full w-full overflow-hidden rounded-[32px]">
                    <div
                        className={cn(
                            'duration-600 h-full w-full items-end bg-cover bg-center transition-transform ease-in-out group-hover:rotate-[-2deg] group-hover:scale-[1.05] group-hover:duration-700',
                            classImg
                        )}
                    />
                </div>
                <span className="absolute left-[0px] top-[-28px] flex size-14 items-center justify-center rounded-full bg-brand-main text-[26px] leading-[36.4px] text-white md:left-[-28px] md:top-[-28px]">
                    {number}
                </span>
            </div>
            {/* <div
                className={cn(
                    'relative h-[240px] w-full rounded-[32px] bg-cover bg-center md:w-[393px] xl:w-[416px]',
                    classImg
                )}
            >
                <span className="absolute left-[0px] top-[-28px] flex size-14 items-center justify-center rounded-full bg-brand-main text-[26px] leading-[36.4px] text-white md:left-[-28px] md:top-[-28px]">
                    {number}
                </span>
            </div> */}
            <div className="space-y-3">
                <h2 className="text-center text-[24px] font-semibold leading-[28.8px] xl:text-[28px] xl:leading-[33.6px]">
                    {title}
                </h2>
                <p className="text-md text-center text-[#707070] lg:h-[120px]">
                    {text}
                </p>
            </div>
            <div className="flex gap-6">
                <Link href={linkBtn1}>
                    <Button className="text-md h-12 rounded-full bg-brand-main px-6 py-3 font-semibold text-white hover:bg-brand-main-hover">
                        Join Now
                    </Button>
                </Link>
                <Link href={linkBtn2}>
                    <Button className="text-md h-12 rounded-full bg-transparent p-0 text-[#030303] shadow-none hover:bg-transparent">
                        Learn More
                        <TalhaIcons name="arrow-top-right" className="size-8" />
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default CardTransform
