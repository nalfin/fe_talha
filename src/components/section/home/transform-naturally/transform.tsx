import Container from '@/components/layout/container'
import ContainerFull from '@/components/layout/container-full'
import CardTN1 from './card1'
import CardTN2 from './card2'

const card = {
    card1: {
        text: 'Transform Naturally Virtually',
        heading: 'What Makes Us Stand Out',
        headline:
            'TNV Method provides a science-based fitness approach designed to make a difference.'
    },
    card2: {
        title: 'Discover our Case Studies',
        desc: 'Receive personalized workout and nutrition plans tailored to your goals and lifestyle.'
    },
    card3: {
        title: 'Exclusive TNV Coffee Podcast Access',
        desc: 'Receive support and accountability from our experienced fitness professionals.'
    },
    card4: {
        title: 'Unlimited meal planning and customization',
        desc: 'Access to your coach expert guidance from anywhere,  at any time.'
    },
    card5: {
        title: 'Science-Rooted Approach',
        desc: 'No fads or quick fixes. We follow science and cite research to explain concepts.'
    }
}

const HomeTransformNaturally = () => {
    return (
        <>
            <ContainerFull className="bg-brand-main">
                <Container className="grid grid-cols-1 gap-6 pb-24 pt-16 md:grid-cols-2 xl:grid-cols-3 xl:flex-row">
                    <CardTN1
                        text={card.card1.text}
                        heading={card.card1.heading}
                        headline={card.card1.headline}
                    />
                    <CardTN2
                        icon="checklist-minimalistic-bold"
                        title={card.card2.title}
                        desc={card.card2.desc}
                    />
                    <CardTN2
                        icon="podcast"
                        title={card.card3.title}
                        desc={card.card3.desc}
                    />
                    <CardTN2
                        icon="help-hexagon-filled"
                        title={card.card4.title}
                        desc={card.card4.desc}
                    />
                    <CardTN2
                        icon="thick-success"
                        title={card.card5.title}
                        desc={card.card5.desc}
                    />
                    <span className="rounded-[32px] bg-card-gt-1 bg-cover bg-center" />
                </Container>
            </ContainerFull>
        </>
    )
}

export default HomeTransformNaturally
