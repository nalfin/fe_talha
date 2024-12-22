import BtnTalha from '@/components/organism/btn-talha'
import BtnTalhaOutline from '@/components/organism/btn-talha-outline'
import CardTransform from './card'

const card = {
    card1: {
        number: '1',
        title: 'Enroll Into TNV Method',
        text: 'Purchase directly from our website. For program inquiries, contact our WhatsApp team of coaches or book a discovery call to find the perfect fit for you.',
        'link-btn1': '/#',
        'link-btn2': '/#',
        img: 'bg-card-transform-1'
    },
    card2: {
        number: '2',
        title: 'Onboarding Call',
        text: 'Receive a link to set up the app within 2-3 days of enrolling, sign the waiver, and complete the consultation form. Your TNV Method Coach will then be assigned to you. Connect with your coach for an in-depth video consultation to discuss fitness barriers, with additional sessions scheduled if needed.',
        'link-btn1': '/#',
        'link-btn2': '/#',
        img: 'bg-card-transform-2'
    },
    card3: {
        number: '3',
        title: 'Protocol Discussion Call',
        text: '3-7 business days after your onboarding calls, an In-depth consultation with your coach to explain your Fitness Protocols and prepare you for your coaching-phase.',
        'link-btn1': '/#',
        'link-btn2': '/#',
        img: 'bg-card-transform-3'
    },
    card4: {
        number: '4',
        title: 'Coaching Phase Begins',
        text: 'Coaching phase officially begins now, with all previous days not counting towards your coaching period. This is your Day 1. This phase is dedicated to helping you achieve your fitness goals!',
        'link-btn1': '/#',
        'link-btn2': '/#',
        img: 'bg-card-transform-4'
    }
}

const HomeTransformSection = () => {
    return (
        <>
            <div className="md:overflow-none mx-auto mt-[-110px] max-w-[1440px] overflow-hidden px-4 xl:mt-[-150px] xl:px-[105px]">
                <div className="pt-[110px] xl:pt-[150px]">
                    <div className="flex flex-col items-center pb-16 pt-5">
                        <div className="flex flex-col items-center gap-6">
                            <div className="space-y-4 text-left xl:text-center">
                                <span className="rounded-full bg-[#030303] px-4 py-2 text-sm font-semibold text-white">
                                    Transform
                                </span>
                                <h1 className="mx-auto w-full text-[30px] font-semibold leading-[36px] xl:w-[80%] xl:text-[56px] xl:leading-[67.2px]">
                                    Start Your Transformation Journey with TNV
                                    Method
                                </h1>
                            </div>
                            <p className="text-md text-left text-[#292929] xl:text-center xl:text-lg">
                                What happens after your enroll into TNV Method
                                Program.
                            </p>
                            <div className="flex w-fit flex-col items-center gap-4 xl:flex-row">
                                <BtnTalha />
                                <BtnTalhaOutline
                                    text="Join TNV Method"
                                    href="/#"
                                />
                            </div>
                        </div>
                        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-12 lg:grid-cols-2">
                            <div className="relative py-5 md:py-12">
                                <CardTransform
                                    number={card.card1.number}
                                    title={card.card1.title}
                                    text={card.card1.text}
                                    linkBtn1={card.card1['link-btn1']}
                                    linkBtn2={card.card1['link-btn2']}
                                    classImg={card.card1.img}
                                />
                            </div>
                            <div className="relative py-5 md:py-12">
                                <CardTransform
                                    number={card.card2.number}
                                    title={card.card2.title}
                                    text={card.card2.text}
                                    linkBtn1={card.card2['link-btn1']}
                                    linkBtn2={card.card2['link-btn2']}
                                    classImg={card.card2.img}
                                />
                                <div className="md:scale-1 card-transform-position absolute z-[2] flex scale-[0.8] gap-3 rounded-xl bg-white px-6 py-4">
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
                                            <p className="text-md">
                                                Consultation
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative py-5 md:py-12">
                                <CardTransform
                                    number={card.card3.number}
                                    title={card.card3.title}
                                    text={card.card3.text}
                                    linkBtn1={card.card3['link-btn1']}
                                    linkBtn2={card.card3['link-btn2']}
                                    classImg={card.card3.img}
                                />
                            </div>
                            <div className="relative py-5 md:py-12">
                                <CardTransform
                                    number={card.card4.number}
                                    title={card.card4.title}
                                    text={card.card4.text}
                                    linkBtn1={card.card4['link-btn1']}
                                    linkBtn2={card.card4['link-btn2']}
                                    classImg={card.card4.img}
                                />
                                <div className="card-transform-position-2 md:scale-1 absolute z-[2] flex scale-[0.8] flex-col gap-3 rounded-xl bg-white px-6 py-4">
                                    <p className="text-[28px] font-semibold leading-[33.6px]">
                                        50%
                                    </p>
                                    <p className="w-[172px] text-sm text-[#292929]">
                                        This is yours day 1 of
                                        <br /> coaching
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeTransformSection
