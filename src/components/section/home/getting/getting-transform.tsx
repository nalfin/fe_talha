import Container from '@/components/layout/container'
import ContainerFull from '@/components/layout/container-full'
import TalhaIcons from '@/components/ui/talha-icon'
import CardGT2 from './card2'
import { Button } from '@/components/ui/button'
import CardGT1 from './card1'

const card = {
    card1: {
        text: 'Getting Transform',
        heading: 'Transformations That Inspire',
        headline:
            'Join the hundreds who have already unlocked their potential through the TNV Method. Be the next success story.'
    },
    card2: {
        title: 'Planning with Purpose',
        desc: 'Achieving your fitness goals doesn’t happen by chance. Success starts with a clear, actionable, and personalized plan. Research shows that individuals who take the time to carefully plan their steps are 50% more likely to hit their targets. The TNV Method provides you with a structured roadmap tailored to your unique needs, ensuring that every workout, every meal, and every milestone brings you closer to success.'
    },
    card3: {
        title: 'The Power of Accountability',
        desc: 'Staying consistent is the biggest challenge in any transformation journey. People who commit to their fitness goals with the support of a dedicated accountability partner or coach experience a 95% success rate, far exceeding those who attempt it alone. With the TNV Method, you gain access to science-backed coaching, one-on-one support, and expert guidance that keeps you motivated, focused, and on track. Together, we turn struggles into victories and plans into results.'
    }
}

const HomeGetTransformSection = () => {
    return (
        <>
            <ContainerFull className="bg-brand-main">
                <Container className="flex flex-col gap-6 pb-24 pt-16 xl:flex-row">
                    <div className="flex w-full flex-col gap-6">
                        <CardGT1
                            text={card.card1.text}
                            heading={card.card1.heading}
                            headline={card.card1.headline}
                        />
                        <span className="hidden h-[474px] w-full rounded-[32px] bg-card-gt-1 bg-cover bg-center xl:block" />
                    </div>
                    <div className="flex flex-col items-end gap-6">
                        <div className="relative hidden h-full w-full xl:block">
                            <div className="absolute left-0 top-0 h-[350.41px] w-full">
                                <span className="absolute left-0 top-0 h-[350.41px] w-full rounded-[32px] bg-card-gt-2 bg-cover bg-center" />
                                <div className="absolute bottom-0 right-0 z-[2] flex flex-col items-end">
                                    <TalhaIcons
                                        name="inline-circle"
                                        className="size-8 text-brand-main"
                                    />
                                    <div className="flex items-end">
                                        <TalhaIcons
                                            name="inline-circle"
                                            className="size-8 text-brand-main"
                                        />
                                        <span className="h-[168px] w-[372px] rounded-tl-[48px] bg-brand-main" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="z-[4] flex w-fit flex-col items-end justify-between gap-6 xl:flex-row">
                            <div>
                                <CardGT2
                                    title={card.card2.title}
                                    desc={card.card2.desc}
                                    classImg="bg-card-gt-1 xl:hidden block"
                                >
                                    <TalhaIcons
                                        name="calendar-solid"
                                        className="size-[30px] text-brand-main"
                                    />
                                </CardGT2>
                            </div>
                            <div className="flex flex-col items-center gap-6">
                                <CardGT2
                                    title={card.card3.title}
                                    desc={card.card3.desc}
                                    classImg="bg-card-gt-2 xl:hidden block"
                                >
                                    <TalhaIcons
                                        name="power-solid"
                                        className="size-[30px] text-brand-main"
                                    />
                                </CardGT2>
                                <div className="w-full space-y-6">
                                    <Button className="text-md h-12 w-full rounded-full bg-white font-semibold text-brand-main hover:bg-white/90">
                                        Sign Up
                                    </Button>
                                    <Button className="text-md h-12 w-full rounded-full border border-white bg-transparent font-semibold text-brand-main text-white hover:bg-white hover:text-brand-main">
                                        Learn More
                                        <TalhaIcons
                                            name="arrow-top-right"
                                            className="size-6 fill-white hover:fill-brand-main"
                                        />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </ContainerFull>
        </>
    )
}

export default HomeGetTransformSection
