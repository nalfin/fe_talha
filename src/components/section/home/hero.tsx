import BtnTalha from '@/components/organism/btn-talha'
import SatisfiedClient from '@/components/organism/satisfied-client'
import CardHero from '@/components/ui/card-hero'
import TalhaIcons from '@/components/ui/talha-icon'
import Image from 'next/image'

const descCard = [
    {
        card1: {
            desc: 'Exercise/week can reduce<br> the risk of diseases by 30%.'
        },
        card2: {
            desc: 'Enhances weight loss<br> and overall health.'
        },
        card3: {
            desc: 'Reduced symptoms<br> of depression.'
        }
    }
]

const HomeHeroSection = () => {
    return (
        <>
            <div className="mx-auto max-w-[1440px] xl:px-[72px]">
                <div className="relative overflow-hidden pb-16">
                    <div className="relative">
                        <div className="z-[5] pt-11 xl:pt-[100px]">
                            <div className="flex flex-col gap-6 px-4 xl:w-[746px] xl:gap-10 xl:px-0">
                                <div className="flex flex-col gap-6 xl:gap-4">
                                    <SatisfiedClient />
                                    <h1 className="text-[32px] font-bold leading-[40px] xl:text-[64px] xl:leading-[76.4px]">
                                        One-on-One Online Coaching Program!{' '}
                                        <span className="text-brand-main">
                                            Built-For-You
                                        </span>
                                    </h1>
                                    <p className="text-lg text-[#292929]">
                                        Welcome to TNV Method! Join our
                                        exclusive, science-backed <br />{' '}
                                        personalized one-on-one online coaching
                                        program
                                    </p>
                                </div>
                                <div>
                                    <BtnTalha />
                                </div>
                            </div>

                            <div className="mt-7 flex w-full justify-center px-4 xl:hidden xl:px-0">
                                <Image
                                    src="/images/hero-img-2.png"
                                    alt="hero"
                                    width={312}
                                    height={395}
                                    className="h-[395px] w-[312px]"
                                    priority
                                />
                            </div>
                            <div className="z-[5] bg-[#D6D6D699] xl:mt-4 xl:w-[789px] xl:bg-transparent">
                                <div className="grid grid-cols-2 gap-8 px-10 py-5 xl:grid-cols-3 xl:flex-row xl:pb-12 xl:pt-8">
                                    <div className="col-span-2 xl:col-span-1">
                                        <CardHero desc={descCard[0].card1.desc}>
                                            <TalhaIcons
                                                name="time"
                                                className="size-[13.4px] xl:size-8"
                                            />
                                            <h2 className="text-[14px] font-semibold leading-[16.8px] xl:text-[28px] xl:leading-[34px]">
                                                150 mins
                                            </h2>
                                        </CardHero>
                                    </div>
                                    <div className="col-span-1 xl:col-span-1">
                                        <CardHero desc={descCard[0].card2.desc}>
                                            <TalhaIcons
                                                name="steps"
                                                className="size-[13.4px] xl:size-8"
                                            />
                                            <h2 className="text-[14px] font-semibold leading-[16.8px] xl:text-[28px] xl:leading-[34px]">
                                                10k Steps
                                            </h2>
                                        </CardHero>
                                    </div>
                                    <div className="col-span-1 xl:col-span-1">
                                        <CardHero desc={descCard[0].card2.desc}>
                                            <TalhaIcons
                                                name="percent"
                                                className="size-[13.4px] xl:size-8"
                                            />
                                            <h2 className="text-[14px] font-semibold leading-[16.8px] xl:text-[28px] xl:leading-[34px]">
                                                30%
                                            </h2>
                                        </CardHero>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 -z-[1] hidden xl:block">
                            <Image
                                src="/images/element.png"
                                alt="element"
                                width={600}
                                height={600}
                                className="h-auto w-auto xl:h-[288px] xl:w-[1296px]"
                                priority
                            />
                        </div>
                    </div>
                    <div className="absolute left-[790px] top-[32px] -z-[2] hidden xl:block">
                        <Image
                            src="/images/hero-img-1.png"
                            alt="hero"
                            width={550}
                            height={1019}
                            priority
                        />
                    </div>
                    <div className="absolute bottom-[277px] right-0 z-[2] hidden gap-3 rounded-xl bg-white px-6 py-4 xl:flex">
                        <div className="space-y-2 text-center font-semibold">
                            <p className="text-lg">Tue</p>
                            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#292929]">
                                <p className="text-md font-bold text-white">
                                    11
                                </p>
                            </span>
                        </div>
                        <span className="flex h-5 items-center">
                            <span className="block h-2 w-2 rounded-full bg-brand-main" />
                        </span>
                        <div className="w-[176px] space-y-3">
                            <p className="text-sm font-semibold text-brand-main">
                                9:00am - 10:00am
                            </p>
                            <div>
                                <p className="text-lg font-semibold">
                                    Intro Call
                                </p>
                                <p className="text-md">Consultation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeHeroSection
