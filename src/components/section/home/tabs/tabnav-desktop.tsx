'use client'

import { useEffect, useRef } from 'react'

const TabNavDesktop = ({
    setActiveTab
}: {
    setActiveTab: (index: number) => void
}) => {
    const tabsParentRef = useRef<HTMLDivElement | null>(null)

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
            setActiveTab(index)
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
    }, [setActiveTab])
    return (
        <>
            <div>
                <div id="tabs" className="tabs" ref={tabsParentRef}>
                    <button className="tab active">
                        <span>Workout Planning</span>
                    </button>
                    <button className="tab">
                        <span>Nutrition Planning</span>
                    </button>
                    <button className="tab">
                        <span>Habit Coaching & Accountability</span>
                    </button>
                    <button className="tab">
                        <span>Coach Support</span>
                    </button>
                    <button className="tab">
                        <span>Health Psychologist</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default TabNavDesktop
