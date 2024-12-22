import Container from '@/components/layout/container'
import ContainerFull from '@/components/layout/container-full'
import { Button } from '@/components/ui/button'
import TalhaIcons from '@/components/ui/talha-icon'
import Link from 'next/link'

const HomeCTASection = () => {
    return (
        <ContainerFull className="bg-brand-main">
            <Container className="space-y-10 py-16">
                <div className="flex flex-col items-center gap-6 text-white">
                    <h1 className="text-center text-[30px] font-semibold leading-[36px] lg:text-[56px] lg:leading-[68px]">
                        Achieve Your Fitness <br />
                        Goals Today
                    </h1>
                    <p className="text-center text-lg">
                        Transform your body and mind with the TNV Transform Lite
                        program.
                    </p>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row">
                    <Link href="/#" className="w-full lg:w-[200px]">
                        <Button className="text-md h-12 w-full rounded-full bg-white px-6 py-3 font-semibold text-brand-main hover:bg-white hover:text-brand-main lg:w-[200px]">
                            Sign Up
                        </Button>
                    </Link>
                    <Link href="/#" className="w-full lg:w-[200px]">
                        <Button className="text-md h-12 w-full rounded-full border border-white bg-transparent font-semibold text-white hover:bg-transparent hover:text-white lg:w-[200px]">
                            Learn More{' '}
                            <TalhaIcons
                                name="arrow-top-right"
                                className="size-6 text-white"
                            />
                        </Button>
                    </Link>
                </div>
            </Container>
        </ContainerFull>
    )
}

export default HomeCTASection
