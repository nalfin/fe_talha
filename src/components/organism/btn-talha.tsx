import { Button } from '../ui/button'
import Image from 'next/image'
import TalhaIcons from '../ui/talha-icon'
import Link from 'next/link'

const BtnTalha = () => {
    return (
        <div>
            <Link
                href="/#"
                className="relative flex w-fit gap-2 transition-all duration-200 ease-in-out hover:-translate-y-1"
            >
                <Button className="h-12 rounded-full bg-brand-main px-6 py-3 text-[16px] font-medium leading-[24px] text-white hover:bg-brand-main">
                    Book a Discovery Call
                </Button>
                <div className="absolute right-[36px] top-[14px]">
                    <Image
                        src="/images/Subtract.png"
                        alt="arrow"
                        width={32}
                        height={20}
                        className="h-auto w-auto xl:h-[20px] xl:w-[32px]"
                        priority
                    />
                </div>
                <span className="flex size-12 items-center justify-center rounded-full bg-brand-main">
                    <TalhaIcons
                        name="arrow-top-right"
                        className="size-6 text-white"
                    />
                </span>
            </Link>
        </div>
    )
}

export default BtnTalha
