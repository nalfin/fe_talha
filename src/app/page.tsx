import { Metadata } from 'next'

import HomeGetTransformSection from '@/components/section/home/getting/getting-transform'
import HomeHeroSection from '@/components/section/home/hero'
import HomeProgramSection from '@/components/section/home/programs'
import HomeTabsSection from '@/components/section/home/tabs/tabs'
import HomeTransformSection from '@/components/section/home/transform/transform'
import HomeTransformNaturally from '@/components/section/home/transform-naturally/transform'
import HomeVideoSection from '@/components/section/home/video'
import BgAccent1 from '@/components/ui/bg-accent-1'
import BgAccent2 from '@/components/ui/bg-accent-2'
import HomeSuccessStoriesSection from '@/components/section/home/success/success-stories'
import HomeCTASection from '@/components/section/home/cta'

export const metadata: Metadata = {
    title: 'Home',
    description: 'Description of Homepage'
}

export default function HomePage() {
    return (
        <>
            <HomeHeroSection />
            <HomeVideoSection />
            <BgAccent1 />
            <HomeProgramSection />
            <BgAccent2 />
            <HomeTabsSection />
            <BgAccent2 />
            <HomeGetTransformSection />
            <HomeTransformNaturally />
            <BgAccent1 />
            <HomeTransformSection />
            <HomeSuccessStoriesSection />
            <HomeCTASection />
        </>
    )
}
