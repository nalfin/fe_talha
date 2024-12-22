import Container from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import TalhaIcons from '@/components/ui/talha-icon'
import Image from 'next/image'
import Link from 'next/link'

const HomeProgramSection = () => {
    return (
        <>
            <Container className="cursor-pointer space-y-16 py-16">
                <h1 className="text-center text-[56px] font-semibold leading-[68px]">
                    All our programs are tailored
                    <br /> to you.
                </h1>
                <div className="flex flex-col items-center justify-center gap-6 xl:flex-row">
                    <div className="card-1 group">
                        <div className="card-fx relative flex h-[500px] w-[348px] flex-col items-center gap-8 overflow-hidden rounded-[30px] bg-gradient-to-b from-gradient-card-1-from to-gradient-card-1-to px-8 py-10 xl:h-[500px] xl:w-[392px] group-hover:xl:h-[600px] group-hover:xl:w-[464px]">
                            <div className="flex w-full flex-col items-center gap-8">
                                <div className="space-y-6">
                                    <div className="title flex flex-col items-center gap-5">
                                        <h2 className="text-center text-[32px] font-semibold leading-[38.4px] text-white">
                                            90 Days of
                                            <br /> Discipline
                                        </h2>
                                        <div className="flex items-center justify-between gap-3">
                                            <p className="w-fit rounded-full bg-white/50 px-3 py-[6px] text-center text-sm font-semibold text-[#292929]">
                                                Challenge
                                            </p>
                                        </div>
                                    </div>
                                    <p className="description text-md h-[72px] text-center font-semibold text-[#F5F5F5]">
                                        Our program is designed to push you to
                                        your limits and help you build habits
                                    </p>
                                </div>
                                <Link href="/#" className="w-full">
                                    <Button className="text-md w-full rounded-full bg-white/20 px-6 py-3 font-semibold text-white hover:bg-white/30">
                                        Learn More
                                        <TalhaIcons
                                            name="arrow-top-right"
                                            className="fill-white"
                                        />
                                    </Button>
                                </Link>
                            </div>
                            <div className="card-fx absolute top-[352px] xl:group-hover:top-[452px]">
                                <Image
                                    src="/images/device-1.png"
                                    alt="program-1"
                                    width={316}
                                    height={571}
                                    className="card-fx -mt-10 h-[571px] w-[316px] xl:group-hover:-mt-12 xl:group-hover:scale-[1.2]"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card-2 group">
                        <div className="card-fx relative flex h-[500px] w-[348px] flex-col items-center gap-8 overflow-hidden rounded-[30px] bg-gradient-to-b from-gradient-card-2-from to-gradient-card-2-to px-8 py-10 xl:h-[500px] xl:w-[392px] group-hover:xl:h-[600px] group-hover:xl:w-[464px]">
                            <div className="flex w-full flex-col items-center gap-8">
                                <div className="space-y-6">
                                    <div className="title flex flex-col items-center gap-5">
                                        <h2 className="text-center text-[32px] font-semibold leading-[38.4px] text-white">
                                            TNV
                                            <br /> Transform
                                        </h2>
                                        <div className="flex items-center justify-between gap-3">
                                            <p className="w-fit rounded-full bg-white/50 px-3 py-[6px] text-center text-sm font-semibold text-[#292929]">
                                                Workouts
                                            </p>
                                            <p className="w-fit rounded-full bg-white/50 px-3 py-[6px] text-center text-sm font-semibold text-[#292929]">
                                                Nutrition
                                            </p>
                                            <p className="w-fit rounded-full bg-white/50 px-3 py-[6px] text-center text-sm font-semibold text-[#292929]">
                                                Mindset
                                            </p>
                                        </div>
                                    </div>
                                    <p className="description text-md h-[72px] text-center font-semibold text-[#F5F5F5]">
                                        A fitness program for body
                                        transformation through structured
                                        workouts
                                    </p>
                                </div>
                                <Link href="/#" className="w-full">
                                    <Button className="text-md w-full rounded-full bg-white/20 px-6 py-3 font-semibold text-white hover:bg-white/30">
                                        Learn More
                                        <TalhaIcons
                                            name="arrow-top-right"
                                            className="fill-white"
                                        />
                                    </Button>
                                </Link>
                            </div>
                            <div className="card-fx absolute top-[352px] xl:group-hover:top-[452px]">
                                <Image
                                    src="/images/device-2.png"
                                    alt="program-1"
                                    width={328}
                                    height={257}
                                    className="card-fx -mt-3 h-[571px] w-[316px] xl:group-hover:-mt-12 xl:group-hover:scale-[1.2]"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card-3 group">
                        <div className="card-fx relative flex h-[500px] w-[348px] flex-col items-center gap-8 overflow-hidden rounded-[30px] bg-gradient-to-b from-gradient-card-3-from to-gradient-card-3-to px-8 py-10 xl:h-[500px] xl:w-[392px] group-hover:xl:h-[600px] group-hover:xl:w-[464px]">
                            <div className="flex w-full flex-col items-center gap-8">
                                <div className="space-y-6">
                                    <div className="title flex flex-col items-center gap-5">
                                        <h2 className="text-center text-[32px] font-semibold leading-[38.4px] text-white">
                                            TNV
                                            <br /> Nutrition
                                        </h2>
                                        <div className="flex items-center justify-between gap-3">
                                            <p className="w-fit rounded-full bg-white/50 px-3 py-[6px] text-center text-sm font-semibold text-[#292929]">
                                                Nutrition
                                            </p>
                                            <p className="w-fit rounded-full bg-white/50 px-3 py-[6px] text-center text-sm font-semibold text-[#292929]">
                                                Mindset
                                            </p>
                                        </div>
                                    </div>
                                    <p className="description text-md h-[72px] text-center font-semibold text-[#F5F5F5]">
                                        A customized meal plan to support health
                                        and fitness goals.
                                    </p>
                                </div>
                                <Link href="/#" className="w-full">
                                    <Button className="text-md w-full rounded-full bg-white/20 px-6 py-3 font-semibold text-white hover:bg-white/30">
                                        Learn More
                                        <TalhaIcons
                                            name="arrow-top-right"
                                            className="fill-white"
                                        />
                                    </Button>
                                </Link>
                            </div>
                            <div className="card-fx absolute top-[352px] xl:group-hover:top-[452px]">
                                <Image
                                    src="/images/device-1.png"
                                    alt="program-1"
                                    width={316}
                                    height={571}
                                    className="card-fx -mt-10 h-[571px] w-[316px] xl:group-hover:-mt-12 xl:group-hover:scale-[1.2]"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default HomeProgramSection
