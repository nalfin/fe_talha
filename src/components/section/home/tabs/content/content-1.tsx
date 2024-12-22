import TalhaIcons from '@/components/ui/talha-icon'

const card = {
    'card-1': {
        title: '150 mins',
        headline:
            'Moderate exercise per week can reduce the risk of chronic diseases by 30%',
        content:
            'Having a clear plan and strategy in place increases your chances of success.'
    },
    'card-2': {
        title: '10k steps',
        headline:
            'Reduced symptoms of depression, making it as effective as medication for some individuals.',
        content: 'Regular check-ins and progress tracking keep you accountable.'
    },
    'card-3': {
        title: '30%',
        headline:
            'Enhances weight loss, boost heart health, and extend lifespan.',
        content:
            'Support and guidance from a coach or accountability partner is essential.'
    }
}

const ContentTab1 = () => {
    return (
        <>
            <h1 className="mb-5 text-center text-[32px] font-semibold leading-[38.4px] xl:mb-10 xl:text-left xl:text-[56px] xl:leading-[67.2px]">
                When You Workout..
            </h1>
            <div className="flex flex-col justify-between gap-6 xl:flex-row">
                <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 space-y-5 rounded-[30px] bg-[#C6C6C629] p-6 xl:col-span-1 xl:space-y-16">
                        <h2 className="text-[24px] font-semibold leading-[28.8px] xl:text-[40px] xl:leading-[48px]">
                            {card['card-1'].title}
                        </h2>
                        <div className="space-y-3">
                            <h3 className="text-md font-semibold xl:text-lg">
                                {card['card-1'].headline}
                            </h3>
                            <p className="xl:text-md text-sm text-[#5C5C5C]">
                                {card['card-1'].content}
                            </p>
                        </div>
                    </div>
                    <div className="col-span-2 space-y-5 rounded-[30px] bg-[#C6C6C629] p-6 xl:col-span-1 xl:space-y-16">
                        <h2 className="text-[24px] font-semibold leading-[28.8px] xl:text-[40px] xl:leading-[48px]">
                            {card['card-2'].title}
                        </h2>
                        <div className="space-y-3">
                            <h3 className="text-md font-semibold xl:text-lg">
                                {card['card-2'].headline}
                            </h3>
                            <p className="xl:text-md text-sm text-[#5C5C5C]">
                                {card['card-2'].content}
                            </p>
                        </div>
                    </div>
                    <div className="col-span-2 space-y-5 rounded-[30px] bg-[#C6C6C629] p-6 xl:col-span-2 xl:space-y-16">
                        <h2 className="text-[24px] font-semibold leading-[28.8px] xl:text-[40px] xl:leading-[48px]">
                            {card['card-3'].title}
                        </h2>
                        <div className="space-y-3">
                            <h3 className="text-md font-semibold xl:text-lg">
                                {card['card-3'].headline}
                            </h3>
                            <p className="xl:text-md text-sm text-[#5C5C5C]">
                                {card['card-3'].content}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col items-center gap-6">
                    <span className="xl:bg-content-1 bg-content-2 relative block h-[546px] w-full rounded-2xl bg-cover bg-center md:max-w-[358px] xl:h-[660px] xl:min-w-[526px]" />
                    <div className="left-6 flex flex-wrap gap-2 xl:absolute xl:bottom-[18px]">
                        <span className="flex w-full justify-center gap-3 rounded-full border border-[#D6D6D6] bg-white px-6 py-3 xl:w-fit xl:justify-start">
                            <TalhaIcons
                                name="home-gym"
                                className="size-6 text-[#292929]"
                            />
                            <p className="text-[18px] font-medium leading-[21.6px]">
                                Home/Gym
                            </p>
                        </span>
                        <span className="flex w-full justify-center gap-3 rounded-full border border-[#D6D6D6] bg-white px-6 py-3 xl:w-fit xl:justify-start">
                            <TalhaIcons
                                name="instructional-video"
                                className="size-6 text-[#292929]"
                            />
                            <p className="text-[18px] font-medium leading-[21.6px]">
                                Instructional Videos
                            </p>
                        </span>
                        <span className="flex w-full justify-center gap-3 rounded-full border border-[#D6D6D6] bg-white px-6 py-3 xl:w-fit xl:justify-start">
                            <TalhaIcons
                                name="coach-support"
                                className="size-6 text-[#292929]"
                            />
                            <p className="text-[18px] font-medium leading-[21.6px]">
                                Coach Support
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentTab1
