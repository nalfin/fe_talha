'use client'

import { useEffect, useRef, useState } from 'react'
import TabNavDesktop from './tabnav-desktop'
import TabNavMobile from './tabnav-mobile'
import ContentTab1 from './content/content-1'
import ContentTab2 from './content/content-2'
import ContentTab3 from './content/content-3'
import ContentTab4 from './content/content-4'
import ContentTab5 from './content/content-5'

const HomeTabsSection: React.FC = () => {
    const tabsParentRef = useRef<HTMLDivElement | null>(null)
    const [activeTab, setActiveTab] = useState(1)

    useEffect(() => {
        const tabsParent = tabsParentRef.current
        const tabs = tabsParent?.querySelectorAll<HTMLButtonElement>('.tab')

        if (!tabsParent || !tabs) return

        const tabsParentLeftDistance = tabsParent.getBoundingClientRect().left

        const updateActiveIndicator = (activeElement: HTMLButtonElement) => {
            if (!activeElement) return

            const { width: elementSize, left: activeElementDistance } =
                activeElement.getBoundingClientRect()

            const distanceFromParent =
                activeElementDistance - tabsParentLeftDistance

            tabsParent.style.setProperty(
                '--indicator-offset',
                `${distanceFromParent}px`
            )
            tabsParent.style.setProperty(
                '--indicator-width',
                `${elementSize}px`
            )
        }

        const handleTabClick = (tab: HTMLButtonElement, index: number) => {
            setActiveTab(index) // Perbarui state aktif
            tabs.forEach((tab) => tab.classList.remove('active'))
            tab.classList.add('active')
            updateActiveIndicator(tab)
        }

        // Initial setup
        updateActiveIndicator(tabs[0])

        // Event listeners
        tabs.forEach(
            (tab, index) =>
                tab.addEventListener('click', () =>
                    handleTabClick(tab, index + 1)
                ) // index + 1 untuk 1-based index
        )

        return () => {
            tabs.forEach((tab, index) =>
                tab.removeEventListener('click', () =>
                    handleTabClick(tab, index + 1)
                )
            )
        }
    }, [])

    return (
        <div className="mx-auto mt-4 max-w-[1440px] px-4 py-8 xl:mt-0 xl:px-10 xl:py-16">
            <div className="hidden xl:block">
                <TabNavDesktop setActiveTab={setActiveTab} />
            </div>

            <div className="xl:hidden">
                <TabNavMobile setActiveTab={setActiveTab} />
            </div>

            {/* Content Section */}
            <div className="py-8 xl:py-16">
                {activeTab === 1 && <ContentTab1 />}
                {activeTab === 2 && <ContentTab2 />}
                {activeTab === 3 && <ContentTab3 />}
                {activeTab === 4 && <ContentTab4 />}
                {activeTab === 5 && <ContentTab5 />}
            </div>
        </div>
    )
}

export default HomeTabsSection
