/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useRef } from 'react'

const TabNavMobile = ({
    setActiveTab
}: {
    setActiveTab: (index: number) => void
}) => {
    const tabsParentRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const tabsParent = tabsParentRef.current
        const tabs =
            tabsParent?.querySelectorAll<HTMLButtonElement>('.tab-mobile')

        if (!tabsParent || !tabs) return

        const tabsParentTopDistance = tabsParent.getBoundingClientRect().top

        const updateActiveIndicator = (activeElement: HTMLButtonElement) => {
            if (!activeElement) return

            const { height: elementHeight, top: activeElementDistance } =
                activeElement.getBoundingClientRect()

            const distanceFromParent =
                activeElementDistance - tabsParentTopDistance

            tabsParent.style.setProperty(
                '--indicator-offset',
                `${distanceFromParent}px`
            )
            tabsParent.style.setProperty(
                '--indicator-height',
                `${elementHeight}px`
            )
        }

        const handleTabClick = (tab: HTMLButtonElement, index: number) => {
            setActiveTab(index)
            tabs.forEach((tab) => tab.classList.remove('active'))
            tab.classList.add('active')
            updateActiveIndicator(tab)
        }

        // Initial setup
        const firstTab = tabs[0]
        if (firstTab) {
            firstTab.classList.add('active')
            updateActiveIndicator(firstTab)
        }

        // Event listeners
        const tabClickHandlers: (() => void)[] = []
        tabs.forEach((tab, index) => {
            const handler = () => handleTabClick(tab, index + 1) // index + 1 untuk 1-based index
            tab.addEventListener('click', handler)
            tabClickHandlers.push(() =>
                tab.removeEventListener('click', handler)
            )
        })

        return () => {
            tabClickHandlers.forEach((removeHandler) => removeHandler())
        }
    }, [setActiveTab])
    return (
        <>
            <div id="tabs-mobile" className="tabs-mobile" ref={tabsParentRef}>
                <button className="tab-mobile active">
                    <span>Workout Planning</span>
                </button>
                <button className="tab-mobile">
                    <span>Nutrition Planning</span>
                </button>
                <button className="tab-mobile">
                    <span>Habit Coaching & Accountability</span>
                </button>
                <button className="tab-mobile">
                    <span>Coach Support</span>
                </button>
                <button className="tab-mobile">
                    <span>Health Psychologist</span>
                </button>
            </div>
        </>
    )
}

export default TabNavMobile
