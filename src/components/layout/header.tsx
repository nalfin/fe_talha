import Link from 'next/link'
import NavMenu from '../organism/nav-menu'
import AppLogo from '../ui/app-logo'
import { Button } from '../ui/button'
import Container from './container'
import ContainerFull from './container-full'
import MobileMenu from '../organism/mobile-menu'
import BtnTalhaOutline from '../organism/btn-talha-outline'
import BtnTalhaPrimary from '../organism/btn.talha-primary'

const Header = () => {
    return (
        <>
            <ContainerFull className="hidden bg-[#292929] xl:block">
                <Container className="flex h-[56px] items-center justify-center gap-5">
                    <p className="text-md font-semibold text-white">
                        Start 2025 with a bang and unlock 10% OFF your coaching
                        program!
                    </p>
                    <Link href="/#">
                        <Button
                            variant="default"
                            className="rounded-full bg-brand-main px-[17.92px] py-[8.96px] text-sm font-medium text-white hover:bg-brand-main-hover"
                        >
                            Book a Consultation
                        </Button>
                    </Link>
                </Container>
            </ContainerFull>
            <Container className="flex h-20 items-center justify-between xl:h-[104px]">
                <div className="flex flex-row items-center gap-8 xl:items-start xl:gap-0">
                    <div className="h-6 xl:hidden">
                        <MobileMenu />
                    </div>
                    <AppLogo />
                </div>
                <div className="hidden xl:block">
                    <NavMenu />
                </div>
                <div className="flex items-center gap-4">
                    <BtnTalhaOutline
                        className="hidden xl:block"
                        text="Blueprint for Aging Well"
                        href="/#"
                    />
                    <BtnTalhaPrimary text="Book a Consultation" href="/#" />
                </div>
            </Container>
        </>
    )
}

export default Header
