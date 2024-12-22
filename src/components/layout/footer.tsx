import Image from 'next/image'
import Container from './container'
import ContainerFull from './container-full'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <ContainerFull className="bg-[#030303]">
                <Container className="flex flex-col gap-8 pb-16 pt-8 xl:py-16">
                    <div className="flex flex-col items-center gap-[36px] xl:flex-row xl:items-start xl:justify-between xl:gap-0">
                        <Link href="/">
                            <Image
                                src="/images/logo-white.png"
                                alt="Logo"
                                width={178}
                                height={106}
                                priority
                                className="h-auto w-auto xl:h-[106px] xl:w-[178px]"
                            />
                        </Link>
                        <div className="flex flex-col justify-center gap-6 text-white xl:flex-row xl:justify-between">
                            <div className="flex flex-col items-center gap-6 xl:min-w-[200px] xl:items-start">
                                <p className="text-[18px] font-semibold leading-[27px] text-[#A3A3A3]">
                                    Our Programs
                                </p>
                                <div className="flex flex-col items-center gap-3 xl:items-start">
                                    <Link
                                        href="/#"
                                        className="text-md hover:text-brand-main"
                                    >
                                        90 Days of Discipline
                                    </Link>
                                    <Link
                                        href="/#"
                                        className="text-md hover:text-brand-main"
                                    >
                                        TNV Transform
                                    </Link>
                                    <Link
                                        href="/#"
                                        className="text-md hover:text-brand-main"
                                    >
                                        TNV Nutrition
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-6 xl:min-w-[200px] xl:items-start">
                                <p className="text-[18px] font-semibold leading-[27px] text-[#A3A3A3]">
                                    About
                                </p>
                                <div className="flex flex-col items-center gap-3 xl:items-start">
                                    <Link
                                        href="/#"
                                        className="text-md hover:text-brand-main"
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        href="/#"
                                        className="text-md hover:text-brand-main"
                                    >
                                        Podcast
                                    </Link>
                                    <Link
                                        href="/#"
                                        className="text-md hover:text-brand-main"
                                    >
                                        From the Experts
                                    </Link>
                                    <Link
                                        href="/#"
                                        className="text-md hover:text-brand-main"
                                    >
                                        Clients&apos; Transformations
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-6 xl:min-w-[200px] xl:items-start">
                                <p className="text-[18px] font-semibold leading-[27px] text-[#A3A3A3]">
                                    Follow Us
                                </p>
                                <div className="flex flex-row gap-3">
                                    <Link
                                        href="/#"
                                        className="text-md transition-all duration-200 hover:scale-[1.2] hover:text-brand-main"
                                    >
                                        <Image
                                            src="/icons/icon-ig.png"
                                            alt="Instagram"
                                            width={24}
                                            height={24}
                                        />
                                    </Link>
                                    <Link
                                        href="/#"
                                        className="text-md transition-all duration-200 hover:scale-[1.2] hover:text-brand-main"
                                    >
                                        <Image
                                            src="/icons/icon-linkedin.png"
                                            alt="LinkedIn"
                                            width={24}
                                            height={24}
                                        />
                                    </Link>
                                    <Link
                                        href="/#"
                                        className="text-md transition-all duration-200 hover:scale-[1.2] hover:text-brand-main"
                                    >
                                        <Image
                                            src="/icons/icon-yt.png"
                                            alt="Youtube"
                                            width={24}
                                            height={24}
                                        />
                                    </Link>
                                    <Link
                                        href="/#"
                                        className="text-md transition-all duration-200 hover:scale-[1.2] hover:text-brand-main"
                                    >
                                        <Image
                                            src="/icons/icon-fb.png"
                                            alt="Facebook"
                                            width={24}
                                            height={24}
                                        />
                                    </Link>
                                    <Link
                                        href="/#"
                                        className="text-md transition-all duration-200 hover:scale-[1.2] hover:text-brand-main"
                                    >
                                        <Image
                                            src="/icons/icon-x.png"
                                            alt="X"
                                            width={24}
                                            height={24}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="block h-[1px] w-full bg-[#707070]" />
                    <div className="text-md flex flex-col-reverse items-center justify-between gap-6 text-[#A3A3A3] xl:flex-row xl:items-start xl:gap-0">
                        <p>© 2024 TNV Method. All rights reserved.</p>

                        <div className="flex flex-col items-center gap-6 xl:flex-row xl:items-start">
                            <p>Privacy Policy</p>
                            <span className="hidden h-[24px] w-[1px] bg-[#707070] xl:block" />
                            <p>Terms of Service</p>
                            <span className="hidden h-[24px] w-[1px] bg-[#707070] xl:block" />
                            <p>Cookie Settings</p>
                        </div>
                    </div>
                </Container>
            </ContainerFull>
        </>
    )
}

export default Footer
