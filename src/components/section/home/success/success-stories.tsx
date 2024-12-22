import Container from '@/components/layout/container'
import ContainerFull from '@/components/layout/container-full'
import BtnTalha from '@/components/organism/btn-talha'
import BtnTalhaOutline from '@/components/organism/btn-talha-outline'
import SatisfiedClient from '@/components/organism/satisfied-client'
import { text } from 'stream/consumers'
import CardStories from './card'

const card = {
    card1: {
        name: 'Albert Flores',
        text: '9 months and Ongoing Coaching',
        link: 'https://www.youtube.com/watch?v=u7Ox7Ne4p0U',
        img: 'bg-card-stories-1'
    },
    card2: {
        name: 'Leslie Alexander',
        text: '6 months and Ongoing Coaching',
        link: 'https://www.youtube.com/watch?v=u7Ox7Ne4p0U',
        img: 'bg-card-stories-2'
    },
    card3: {
        name: 'Courtney Henry',
        text: '6 months and Ongoing Coaching',
        link: 'https://www.youtube.com/watch?v=u7Ox7Ne4p0U',
        img: 'bg-card-stories-3'
    }
}

const HomeSuccessStoriesSection = () => {
    return (
        <>
            <ContainerFull className="relative bg-white">
                <Container className="flex flex-col items-center justify-center gap-12 py-24">
                    <div className="flex flex-col items-center gap-4">
                        <SatisfiedClient />
                        <h1 className="text-center text-[25px] font-semibold leading-[30px] lg:text-[56px] lg:leading-[68px]">
                            Success Stories from Our Community
                        </h1>
                        <p className="w-full text-center text-lg text-[#292929] lg:w-[70%]">
                            Listen to our satisfied clients share their
                            incredible transformation journeys and experiences
                            with our services.
                        </p>
                    </div>
                    <div className="z-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
                        <CardStories
                            classImg={card.card1.img}
                            name={card.card1.name}
                            text={card.card1.text}
                            href={card.card1.link}
                        />
                        <CardStories
                            classImg={card.card2.img}
                            name={card.card2.name}
                            text={card.card2.text}
                            href={card.card2.link}
                        />
                        <CardStories
                            classImg={card.card3.img}
                            name={card.card3.name}
                            text={card.card3.text}
                            href={card.card3.link}
                        />
                    </div>
                    <div className="justify center z-10 flex flex-col items-center gap-4 xl:flex-row">
                        <BtnTalha />
                        <BtnTalhaOutline text="See All Revies" href="/#" />
                    </div>
                </Container>
                <span className="absolute bottom-0 left-0 z-0 block h-[324px] w-full bg-[#ECF8FD]" />
            </ContainerFull>
        </>
    )
}

export default HomeSuccessStoriesSection
