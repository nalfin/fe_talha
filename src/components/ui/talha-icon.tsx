import { cn } from '@/lib/utils'
import React from 'react'

const icons = {
    'arrow-top-right': (props: { className?: string }) => (
        <svg
            className={cn('size-8 fill-[#292929]', props.className)}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.59998 7.8001C9.2686 7.8001 8.99998 7.53147 8.99998 7.2001C8.99998 6.86873 9.2686 6.6001 9.59998 6.6001H16.8C17.1313 6.6001 17.4 6.86873 17.4 7.2001V14.4001C17.4 14.7315 17.1313 15.0001 16.8 15.0001C16.4686 15.0001 16.2 14.7315 16.2 14.4001V8.64863L7.62424 17.2244C7.38993 17.4587 7.01003 17.4587 6.77571 17.2244C6.5414 16.99 6.5414 16.6101 6.77571 16.3758L15.3514 7.8001H9.59998Z"
                fill="currentColor"
            />
        </svg>
    ),
    'accent-1-desktop': (props: { className?: string }) => (
        <svg
            className={cn(
                'h-[150px] w-[1440px] fill-[#292929]',
                props.className
            )}
            viewBox="0 0 1440 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1440 0V111.907C1440 111.907 1196.5 107.888 999 117.987C801.5 128.085 676.5 136.638 421.5 145.191C166.5 153.744 0 148.282 0 148.282V0H1440Z"
                fill="currentColor"
            />
        </svg>
    ),
    'accent-1-mobile': (props: { className?: string }) => (
        <svg
            className={cn(
                'h-[150px] w-[104px] fill-[#292929]',
                props.className
            )}
            viewBox="0 0 390 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M390 0V77.589C390 77.589 324.052 74.8026 270.562 81.8042C217.073 88.8058 183.219 94.7357 114.156 100.666C45.0938 106.595 0 102.809 0 102.809V0H390Z"
                fill="currentColor"
            />
        </svg>
    ),
    'accent-2-desktop': (props: { className?: string }) => (
        <svg
            className={cn(
                'h-[150px] w-[1440px] fill-[#292929]',
                props.className
            )}
            viewBox="0 0 1440 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 150L-9.78323e-06 38.093C-9.78323e-06 38.093 243.5 42.1117 441 32.0133C638.5 21.9148 763.5 13.3621 1018.5 4.80927C1273.5 -3.7435 1440 1.71788 1440 1.71788L1440 150L0 150Z"
                fill="currentColor"
            />
        </svg>
    ),
    'accent-2-mobile': (props: { className?: string }) => (
        <svg
            className={cn(
                'h-[150px] w-[104px] fill-[#292929]',
                props.className
            )}
            viewBox="0 0 390 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 104L-6.78304e-06 26.4111C-6.78304e-06 26.4111 66.117 29.1974 119.744 22.1958C173.37 15.1942 207.311 9.26431 276.551 3.33439C345.791 -2.59553 391 1.19104 391 1.19104L391 104L0 104Z"
                fill="currentColor"
            />
        </svg>
    ),
    time: (props: { className?: string }) => (
        <svg
            className={cn('size-8 fill-[#292929]', props.className)}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M29.3333 15.9998C29.3333 23.3636 23.3638 29.3332 16 29.3332C8.63616 29.3332 2.66663 23.3636 2.66663 15.9998C2.66663 8.63604 8.63616 2.6665 16 2.6665C23.3638 2.6665 29.3333 8.63604 29.3333 15.9998Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 9.6665C16.5522 9.6665 17 10.1142 17 10.6665V15.5856L20.0404 18.6261C20.4309 19.0166 20.4309 19.6498 20.0404 20.0403C19.6499 20.4308 19.0167 20.4308 18.6262 20.0403L15.2929 16.7069C15.1053 16.5194 15 16.2651 15 15.9998V10.6665C15 10.1142 15.4477 9.6665 16 9.6665Z"
                fill="white"
            />
        </svg>
    ),
    steps: (props: { className?: string }) => (
        <svg
            className={cn('size-8 fill-[#292929]', props.className)}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.3333 5.33317C12.3333 3.30813 13.9749 1.6665 16 1.6665C18.025 1.6665 19.6666 3.30813 19.6666 5.33317C19.6666 7.35821 18.025 8.99984 16 8.99984C13.9749 8.99984 12.3333 7.35821 12.3333 5.33317Z"
                fill="currentColor"
            />
            <path
                d="M10.9641 15.4323L8.06369 14.4655C7.22938 14.1874 6.66663 13.4066 6.66663 12.5272C6.66663 11.2264 7.866 10.2568 9.1379 10.5294L11.668 11.0716C11.8087 11.1017 11.879 11.1168 11.9488 11.1312C14.6213 11.684 17.3786 11.684 20.0512 11.1312C20.1209 11.1168 20.1912 11.1017 20.3319 11.0716L22.862 10.5294C24.1339 10.2568 25.3333 11.2264 25.3333 12.5272C25.3333 13.4066 24.7705 14.1874 23.9362 14.4655L21.0358 15.4323C20.6853 15.5492 20.5101 15.6076 20.3783 15.6889C19.9295 15.966 19.6861 16.4816 19.7576 17.0042C19.7786 17.1576 19.8449 17.33 19.9775 17.6749L21.6399 21.9971C22.1348 23.2837 21.1851 24.6665 19.8066 24.6665C19.1017 24.6665 18.4508 24.2888 18.1011 23.6768L16 19.9998L13.8989 23.6768C13.5491 24.2888 12.8983 24.6665 12.1934 24.6665C10.8149 24.6665 9.86515 23.2837 10.36 21.9971L12.0224 17.6749C12.155 17.33 12.2213 17.1576 12.2423 17.0042C12.3138 16.4816 12.0705 15.966 11.6216 15.6889C11.4898 15.6076 11.3146 15.5492 10.9641 15.4323Z"
                fill="currentColor"
            />
            <path
                d="M16 29.3332C23.3638 29.3332 29.3333 26.6469 29.3333 23.3332C29.3333 21.0373 26.4679 19.0427 22.2586 18.0339L23.5066 21.2788C24.5053 23.8754 22.5886 26.6662 19.8066 26.6662C18.3839 26.6662 17.0704 25.9039 16.3646 24.6687L16 24.0306L15.6353 24.6687C14.9295 25.9039 13.616 26.6662 12.1934 26.6662C9.4113 26.6662 7.49461 23.8754 8.49331 21.2788L9.74133 18.0339C5.53205 19.0427 2.66663 21.0373 2.66663 23.3332C2.66663 26.6469 8.63616 29.3332 16 29.3332Z"
                fill="currentColor"
            />
        </svg>
    ),
    percent: (props: { className?: string }) => (
        <svg
            className={cn('size-8 fill-[#292929]', props.className)}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.6666 15.9998C2.6666 8.63604 8.63613 2.6665 15.9999 2.6665C23.3637 2.6665 29.3333 8.63604 29.3333 15.9998C29.3333 23.3636 23.3637 29.3332 15.9999 29.3332C8.63613 29.3332 2.6666 23.3636 2.6666 15.9998ZM14.9999 6.6665C14.9999 6.11422 15.4476 5.6665 15.9999 5.6665C21.7069 5.6665 26.3333 10.2929 26.3333 15.9998C26.3333 21.7068 21.7069 26.3332 15.9999 26.3332C10.293 26.3332 5.6666 21.7068 5.6666 15.9998C5.6666 15.4476 6.11431 14.9998 6.6666 14.9998C7.21888 14.9998 7.6666 15.4476 7.6666 15.9998C7.6666 20.6022 11.3976 24.3332 15.9999 24.3332C20.6023 24.3332 24.3333 20.6022 24.3333 15.9998C24.3333 11.3975 20.6023 7.6665 15.9999 7.6665C15.4476 7.6665 14.9999 7.21879 14.9999 6.6665ZM15.9999 9.6665C15.4476 9.6665 14.9999 10.1142 14.9999 10.6665C14.9999 11.2188 15.4476 11.6665 15.9999 11.6665C18.3932 11.6665 20.3333 13.6066 20.3333 15.9998C20.3333 18.3931 18.3932 20.3332 15.9999 20.3332C15.4476 20.3332 14.9999 20.7809 14.9999 21.3332C14.9999 21.8855 15.4476 22.3332 15.9999 22.3332C19.4977 22.3332 22.3333 19.4976 22.3333 15.9998C22.3333 12.502 19.4977 9.6665 15.9999 9.6665Z"
                fill="currentColor"
            />
        </svg>
    ),
    'play-video': (props: { className?: string }) => (
        <svg
            className={cn('size-8 fill-[#292929]', props.className)}
            viewBox="0 0 24 24"
            fill="none"
        >
            <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="1.5"
            />
            <path
                d="M15.9453 12.3948C15.7686 13.0215 14.9333 13.4644 13.2629 14.3502C11.648 15.2064 10.8406 15.6346 10.1899 15.4625C9.9209 15.3913 9.6758 15.2562 9.47812 15.0701C9 14.6198 9 13.7465 9 12C9 10.2535 9 9.38018 9.47812 8.92995C9.6758 8.74381 9.9209 8.60868 10.1899 8.53753C10.8406 8.36544 11.648 8.79357 13.2629 9.64983C14.9333 10.5356 15.7686 10.9785 15.9453 11.6052C16.0182 11.8639 16.0182 12.1361 15.9453 12.3948Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
        </svg>
    ),
    'home-gym': (props: { className?: string }) => (
        <svg
            className={cn('size-8 fill-[#292929]', props.className)}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.3807 20.5684L3.43157 15.6193C2.52737 14.7151 2.07528 14.263 2.0108 13.7109C1.9964 13.5877 1.9964 13.4632 2.0108 13.3399C2.07528 12.7879 2.52737 12.3358 3.43156 11.4316C4.33575 10.5274 4.78785 10.0753 5.33994 10.0108C5.46318 9.9964 5.58768 9.9964 5.71092 10.0108C6.26301 10.0753 6.71511 10.5274 7.6193 11.4316L8.35253 12.1648L12.1648 8.35253L11.4316 7.6193C10.5274 6.71511 10.0753 6.26301 10.0108 5.71092C9.9964 5.58768 9.9964 5.46318 10.0108 5.33994C10.0753 4.78785 10.5274 4.33575 11.4316 3.43156C12.3358 2.52737 12.7879 2.07528 13.3399 2.0108C13.4632 1.9964 13.5877 1.9964 13.7109 2.0108C14.263 2.07528 14.7151 2.52737 15.6193 3.43156L20.5684 8.3807C21.4726 9.28489 21.9247 9.73699 21.9892 10.2891C22.0036 10.4123 22.0036 10.5368 21.9892 10.6601C21.9247 11.2121 21.4726 11.6642 20.5684 12.5684C19.6642 13.4726 19.2122 13.9247 18.6601 13.9892C18.5368 14.0036 18.4123 14.0036 18.2891 13.9892C17.737 13.9247 17.2849 13.4726 16.3807 12.5684L15.2688 11.4565L11.4565 15.2688L12.5684 16.3807C13.4726 17.2849 13.9247 17.737 13.9892 18.2891C14.0036 18.4123 14.0036 18.5368 13.9892 18.6601C13.9247 19.2122 13.4726 19.6642 12.5684 20.5684C11.6642 21.4726 11.2121 21.9247 10.6601 21.9892C10.5368 22.0036 10.4123 22.0036 10.2891 21.9892C9.73699 21.9247 9.28489 21.4726 8.3807 20.5684Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.4885 1.96796C17.7814 1.67507 18.2562 1.67507 18.5491 1.96796L21.6531 5.07197C21.946 5.36487 21.946 5.83974 21.6531 6.13263C21.3602 6.42553 20.8854 6.42553 20.5925 6.13263L17.4885 3.02862C17.1956 2.73573 17.1956 2.26085 17.4885 1.96796ZM1.96723 17.4879C2.26012 17.195 2.735 17.195 3.02789 17.4879L6.1319 20.5919C6.42479 20.8848 6.42479 21.3596 6.1319 21.6525C5.83901 21.9454 5.36413 21.9454 5.07124 21.6525L1.96723 18.5485C1.67434 18.2556 1.67434 17.7808 1.96723 17.4879Z"
                fill="currentColor"
            />
        </svg>
    ),
    'instructional-video': (props: { className?: string }) => (
        <svg
            className={cn('size-8 fill-[#292929]', props.className)}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 12.5V11.5C2 8.21252 2 6.56878 2.90796 5.46243C3.07418 5.25989 3.25989 5.07418 3.46243 4.90796C4.56878 4 6.21252 4 9.5 4C12.7875 4 14.4312 4 15.5376 4.90796C15.7401 5.07418 15.9258 5.25989 16.092 5.46243C16.7936 6.3173 16.9531 7.49303 16.9893 9.50002L17.6584 9.17082C19.6042 8.19788 20.5772 7.7114 21.2886 8.15107C22 8.59075 22 9.67853 22 11.8541V12.1459C22 14.3215 22 15.4093 21.2886 15.8489C20.5772 16.2886 19.6042 15.8021 17.6584 14.8292L16.9893 14.5C16.9531 16.507 16.7936 17.6827 16.092 18.5376C15.9258 18.7401 15.7401 18.9258 15.5376 19.092C14.4312 20 12.7875 20 9.5 20C6.21252 20 4.56878 20 3.46243 19.092C3.25989 18.9258 3.07418 18.7401 2.90796 18.5376C2 17.4312 2 15.7875 2 12.5ZM13.5607 9.56066C14.1464 8.97487 14.1464 8.02513 13.5607 7.43934C12.9749 6.85355 12.0251 6.85355 11.4393 7.43934C10.8536 8.02513 10.8536 8.97487 11.4393 9.56066C12.0251 10.1464 12.9749 10.1464 13.5607 9.56066Z"
                fill="currentColor"
            />
        </svg>
    ),
    'coach-support': (props: { className?: string }) => (
        <svg
            className={cn('size-8 fill-[#292929]', props.className)}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.5816 18.5209C21.0889 16.7701 22 14.4915 22 12C22 9.50853 21.0889 7.22987 19.5816 5.47906L15.3089 9.75178C15.745 10.3925 16 11.1665 16 12C16 12.8335 15.745 13.6075 15.3089 14.2482L19.5816 18.5209Z"
                fill="currentColor"
            />
            <path
                d="M18.5209 19.5816C16.7701 21.0889 14.4915 22 12 22C9.50853 22 7.22987 21.0889 5.47906 19.5816L9.75178 15.3089C10.3925 15.745 11.1665 16 12 16C12.8335 16 13.6075 15.745 14.2482 15.3089L18.5209 19.5816Z"
                fill="currentColor"
            />
            <path
                d="M4.4184 18.5209L8.69112 14.2482C8.25495 13.6075 8 12.8335 8 12C8 11.1665 8.25495 10.3925 8.69112 9.75178L4.4184 5.47906C2.91114 7.22987 2 9.50853 2 12C2 14.4915 2.91114 16.7701 4.4184 18.5209Z"
                fill="currentColor"
            />
            <path
                d="M12 8C11.1665 8 10.3925 8.25495 9.75178 8.69112L5.47906 4.4184C7.22987 2.91114 9.50853 2 12 2C14.4915 2 16.7701 2.91114 18.5209 4.4184L14.2482 8.69112C13.6075 8.25495 12.8335 8 12 8Z"
                fill="currentColor"
            />
        </svg>
    ),
    'calendar-solid': (props: { className?: string }) => (
        <svg
            className={cn('size-8 fill-[#292929]', props.className)}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.875 3C10.875 2.44772 10.4273 2 9.875 2C9.32272 2 8.875 2.44772 8.875 3V3.875H4.25C3.65326 3.875 3.08097 4.11205 2.65901 4.53401C2.23705 4.95597 2 5.52826 2 6.125V25.5C2 26.0967 2.23705 26.669 2.65901 27.091C3.08097 27.513 3.65326 27.75 4.25 27.75H25.5C26.0967 27.75 26.669 27.513 27.091 27.091C27.513 26.669 27.75 26.0967 27.75 25.5V6.125C27.75 5.52826 27.5129 4.95597 27.091 4.53401C26.669 4.11205 26.0967 3.875 25.5 3.875H20.875V3C20.875 2.44772 20.4273 2 19.875 2C19.3227 2 18.875 2.44772 18.875 3V3.875H10.875V3ZM8.875 5.875V8C8.875 8.55228 9.32272 9 9.875 9C10.4273 9 10.875 8.55228 10.875 8V5.875H18.875V8C18.875 8.55228 19.3227 9 19.875 9C20.4273 9 20.875 8.55228 20.875 8V5.875H25.5C25.5663 5.875 25.6299 5.90134 25.6768 5.94822C25.7237 5.99511 25.75 6.05869 25.75 6.125V11.375H4V6.125C4 6.0587 4.02634 5.99511 4.07322 5.94822C4.12011 5.90134 4.1837 5.875 4.25 5.875H8.875ZM8.625 15.75C8.07272 15.75 7.625 16.1977 7.625 16.75C7.625 17.3023 8.07272 17.75 8.625 17.75H12.375C12.9273 17.75 13.375 17.3023 13.375 16.75C13.375 16.1977 12.9273 15.75 12.375 15.75H8.625ZM17.375 15.75C16.8227 15.75 16.375 16.1977 16.375 16.75C16.375 17.3023 16.8227 17.75 17.375 17.75H21.125C21.6773 17.75 22.125 17.3023 22.125 16.75C22.125 16.1977 21.6773 15.75 21.125 15.75H17.375ZM8.625 20.75C8.07272 20.75 7.625 21.1977 7.625 21.75C7.625 22.3023 8.07272 22.75 8.625 22.75H12.375C12.9273 22.75 13.375 22.3023 13.375 21.75C13.375 21.1977 12.9273 20.75 12.375 20.75H8.625ZM17.375 20.75C16.8227 20.75 16.375 21.1977 16.375 21.75C16.375 22.3023 16.8227 22.75 17.375 22.75H21.125C21.6773 22.75 22.125 22.3023 22.125 21.75C22.125 21.1977 21.6773 20.75 21.125 20.75H17.375Z"
                fill="currentColor"
            />
        </svg>
    ),
    'power-solid': (props: { className?: string }) => (
        <svg
            className={cn('size-8 fill-[#292929]', props.className)}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.0003 1.66663C12.3632 1.66663 9.78538 2.44861 7.59273 3.9137C5.40007 5.37878 3.69111 7.46117 2.68194 9.89751C1.67277 12.3339 1.40872 15.0148 1.92319 17.6012C2.43766 20.1876 3.70754 22.5634 5.57224 24.4281C7.43694 26.2928 9.81271 27.5626 12.3991 28.0771C14.9855 28.5916 17.6664 28.3275 20.1028 27.3184C22.5391 26.3092 24.6215 24.6002 26.0866 22.4076C27.5517 20.2149 28.3337 17.637 28.3337 15C28.3337 11.4637 26.9289 8.07235 24.4284 5.57187C21.9279 3.07138 18.5366 1.66663 15.0003 1.66663ZM15.0503 16.4C14.9096 16.4011 14.77 16.3743 14.6396 16.3212C14.5092 16.2681 14.3906 16.1897 14.2907 16.0905C14.1908 15.9913 14.1114 15.8734 14.0573 15.7434C14.0032 15.6135 13.9753 15.4741 13.9753 15.3333V7.20829C13.9753 6.92318 14.0886 6.64975 14.2902 6.44815C14.4918 6.24655 14.7652 6.13329 15.0503 6.13329C15.3354 6.13329 15.6089 6.24655 15.8105 6.44815C16.0121 6.64975 16.1253 6.92318 16.1253 7.20829V15.3333C16.1253 15.4741 16.0975 15.6135 16.0433 15.7434C15.9892 15.8734 15.9099 15.9913 15.81 16.0905C15.71 16.1897 15.5915 16.2681 15.4611 16.3212C15.3307 16.3743 15.1911 16.4011 15.0503 16.4ZM15.0003 23.1583C13.2452 23.1791 11.5293 22.6383 10.1031 21.6151C8.67698 20.5918 7.61517 19.1395 7.07268 17.4701C6.53019 15.8008 6.5354 14.0018 7.08756 12.3356C7.63972 10.6694 8.70993 9.22329 10.142 8.20829C10.3914 8.0305 10.7008 7.95794 11.0033 8.00627C11.3057 8.05461 11.5771 8.21996 11.7587 8.46663C11.8473 8.58844 11.911 8.7266 11.946 8.87313C11.981 9.01967 11.9867 9.17168 11.9627 9.32042C11.9386 9.46915 11.8854 9.61166 11.8061 9.73973C11.7267 9.8678 11.6228 9.9789 11.5003 10.0666C10.6766 10.6716 10.0216 11.4774 9.59767 12.4073C9.17376 13.3373 8.99511 14.3603 9.07875 15.3788C9.16239 16.3974 9.50553 17.3776 10.0755 18.2259C10.6454 19.0742 11.4231 19.7624 12.3345 20.2248C13.2459 20.6873 14.2605 20.9086 15.2817 20.8677C16.3028 20.8268 17.2965 20.5249 18.1679 19.991C19.0393 19.4571 19.7595 18.7089 20.2597 17.8176C20.7599 16.9264 21.0235 15.9219 21.0253 14.9C21.0225 13.9583 20.7941 13.0311 20.3591 12.1959C19.9241 11.3608 19.2953 10.642 18.5253 10.1C18.2882 9.91286 18.135 9.63943 18.099 9.33955C18.0631 9.03967 18.1475 8.73777 18.3337 8.49996C18.5177 8.25591 18.7903 8.09386 19.0926 8.04866C19.3949 8.00347 19.7029 8.07874 19.9503 8.25829C21.3674 9.28492 22.4206 10.7363 22.957 12.402C23.4934 14.0677 23.4852 15.8609 22.9335 17.5216C22.3818 19.1822 21.3153 20.6239 19.8888 21.6375C18.4624 22.651 16.75 23.1837 15.0003 23.1583Z"
                fill="currentColor"
            />
        </svg>
    ),
    'inline-circle': (props: { className?: string }) => (
        <svg
            className={cn('size-8 fill-[#292929]', props.className)}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 32H32V0C32 17.6731 17.6733 32 0 32Z"
                fill="currentColor"
            />
        </svg>
    ),

    'checklist-minimalistic-bold': (props: { className?: string }) => (
        <svg
            className={cn('size-8 fill-[#292929]', props.className)}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.33098 4.71953C2.50098 6.55203 2.50098 9.49703 2.50098 15.3895C2.50098 21.282 2.50098 24.2283 4.33098 26.0583C6.16348 27.8895 9.10848 27.8895 15.001 27.8895C20.8935 27.8895 23.8397 27.8895 25.6697 26.0583C27.501 24.2295 27.501 21.282 27.501 15.3895C27.501 9.49703 27.501 6.55078 25.6697 4.71953C23.841 2.88953 20.8935 2.88953 15.001 2.88953C9.10848 2.88953 6.16223 2.88953 4.33098 4.71953ZM13.181 9.78578C13.2658 9.69656 13.3323 9.5915 13.3766 9.4766C13.4208 9.3617 13.442 9.2392 13.439 9.1161C13.4359 8.99301 13.4086 8.87172 13.3586 8.75917C13.3087 8.64663 13.2371 8.54502 13.1479 8.46015C13.0586 8.37528 12.9536 8.30882 12.8387 8.26456C12.7238 8.22029 12.6013 8.19909 12.4782 8.20217C12.3551 8.20524 12.2338 8.23254 12.1212 8.28248C12.0087 8.33243 11.9071 8.40406 11.8222 8.49328L8.92973 11.5308L8.17973 10.7433C8.09578 10.6505 7.99411 10.5755 7.88071 10.5226C7.76731 10.4697 7.64448 10.4401 7.51945 10.4355C7.39442 10.4308 7.26973 10.4512 7.15271 10.4955C7.0357 10.5398 6.92873 10.6071 6.83812 10.6933C6.74751 10.7796 6.67508 10.8831 6.62511 10.9978C6.57513 11.1126 6.54862 11.2361 6.54714 11.3612C6.54566 11.4863 6.56924 11.6104 6.61648 11.7263C6.66373 11.8422 6.73368 11.9474 6.82223 12.0358L8.25098 13.5358C8.33853 13.6277 8.44384 13.7008 8.56051 13.7508C8.67719 13.8008 8.8028 13.8266 8.92973 13.8266C9.05666 13.8266 9.18227 13.8008 9.29894 13.7508C9.41561 13.7008 9.52092 13.6277 9.60848 13.5358L13.181 9.78578ZM16.251 10.702C16.0023 10.702 15.7639 10.8008 15.5881 10.9766C15.4122 11.1524 15.3135 11.3909 15.3135 11.6395C15.3135 11.8882 15.4122 12.1266 15.5881 12.3024C15.7639 12.4783 16.0023 12.577 16.251 12.577H22.501C22.7496 12.577 22.9881 12.4783 23.1639 12.3024C23.3397 12.1266 23.4385 11.8882 23.4385 11.6395C23.4385 11.3909 23.3397 11.1524 23.1639 10.9766C22.9881 10.8008 22.7496 10.702 22.501 10.702H16.251ZM13.1797 18.5358C13.2683 18.4474 13.3382 18.3422 13.3855 18.2263C13.4327 18.1104 13.4563 17.9863 13.4548 17.8612C13.4533 17.7361 13.4268 17.6126 13.3768 17.4978C13.3269 17.3831 13.2544 17.2796 13.1638 17.1933C13.0732 17.1071 12.9663 17.0398 12.8492 16.9955C12.7322 16.9512 12.6075 16.9308 12.4825 16.9355C12.3575 16.9401 12.2346 16.9697 12.1212 17.0226C12.0078 17.0755 11.9062 17.1505 11.8222 17.2433L8.92973 20.2808L8.17973 19.4933C8.09578 19.4005 7.99411 19.3255 7.88071 19.2726C7.76731 19.2197 7.64448 19.1901 7.51945 19.1855C7.39442 19.1808 7.26973 19.2012 7.15271 19.2455C7.0357 19.2898 6.92873 19.3571 6.83812 19.4433C6.74751 19.5296 6.67508 19.6331 6.62511 19.7478C6.57513 19.8626 6.54862 19.9861 6.54714 20.1112C6.54566 20.2363 6.56924 20.3605 6.61648 20.4763C6.66373 20.5922 6.73368 20.6974 6.82223 20.7858L8.25098 22.2858C8.33853 22.3777 8.44384 22.4508 8.56051 22.5008C8.67719 22.5508 8.8028 22.5766 8.92973 22.5766C9.05666 22.5766 9.18227 22.5508 9.29894 22.5008C9.41561 22.4508 9.52092 22.3777 9.60848 22.2858L13.1797 18.5358ZM16.251 19.452C16.0023 19.452 15.7639 19.5508 15.5881 19.7266C15.4122 19.9024 15.3135 20.1409 15.3135 20.3895C15.3135 20.6382 15.4122 20.8766 15.5881 21.0524C15.7639 21.2283 16.0023 21.327 16.251 21.327H22.501C22.7496 21.327 22.9881 21.2283 23.1639 21.0524C23.3397 20.8766 23.4385 20.6382 23.4385 20.3895C23.4385 20.1409 23.3397 19.9024 23.1639 19.7266C22.9881 19.5508 22.7496 19.452 22.501 19.452H16.251Z"
                fill="currentColor"
            />
        </svg>
    ),
    podcast: (props: { className?: string }) => (
        <svg
            className={cn('size-8 fill-[#292929]', props.className)}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M21.25 22.8125V26.875H8.75001V22.8125C8.75001 21.0875 11.55 19.6875 15 19.6875C18.45 19.6875 21.25 21.0875 21.25 22.8125ZM15 6.875C17.1549 6.875 19.2215 7.73102 20.7452 9.25476C22.269 10.7785 23.125 12.8451 23.125 15C23.125 16.5625 22.6875 18.025 21.925 19.2625L20 17.55C20.4 16.7875 20.625 15.9125 20.625 15C20.625 11.875 18.125 9.375 15 9.375C11.875 9.375 9.37501 11.875 9.37501 15C9.37501 15.9125 9.60001 16.7875 10 17.55L8.07501 19.2625C7.31251 18.025 6.87501 16.5625 6.87501 15C6.87501 12.8451 7.73103 10.7785 9.25476 9.25476C10.7785 7.73102 12.8451 6.875 15 6.875ZM15 1.875C18.481 1.875 21.8194 3.25781 24.2808 5.71922C26.7422 8.18064 28.125 11.519 28.125 15C28.125 17.85 27.2125 20.4875 25.675 22.6375L23.8 20.95C24.95 19.25 25.625 17.2 25.625 15C25.625 12.1821 24.5056 9.47956 22.513 7.48699C20.5204 5.49442 17.8179 4.375 15 4.375C12.1821 4.375 9.47957 5.49442 7.487 7.48699C5.49442 9.47956 4.37501 12.1821 4.37501 15C4.37501 17.2 5.05001 19.25 6.20001 20.95L4.32501 22.6375C2.72912 20.4108 1.8722 17.7395 1.87501 15C1.87501 11.519 3.25782 8.18064 5.71923 5.71922C8.18065 3.25781 11.519 1.875 15 1.875ZM15 11.875C15.8288 11.875 16.6237 12.2042 17.2097 12.7903C17.7958 13.3763 18.125 14.1712 18.125 15C18.125 15.8288 17.7958 16.6237 17.2097 17.2097C16.6237 17.7958 15.8288 18.125 15 18.125C14.1712 18.125 13.3763 17.7958 12.7903 17.2097C12.2042 16.6237 11.875 15.8288 11.875 15C11.875 14.1712 12.2042 13.3763 12.7903 12.7903C13.3763 12.2042 14.1712 11.875 15 11.875Z"
                fill="currentColor"
            />
        </svg>
    ),
    'help-hexagon-filled': (props: { className?: string }) => (
        <svg
            className={cn('size-8 fill-[#292929]', props.className)}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13.0313 1.76751C13.6073 1.44985 14.2504 1.27324 14.9079 1.25217C15.5654 1.23109 16.2185 1.36615 16.8138 1.64626L17.0512 1.76751L25.52 6.76126L25.64 6.84001L25.755 6.93626L25.8888 7.03001C26.3234 7.35556 26.6876 7.7657 26.9596 8.23573C27.2316 8.70575 27.4056 9.22596 27.4712 9.76501L27.4938 10.0175L27.5 10.2725V19.3775C27.5 20.76 26.7875 22.0388 25.6825 22.7438L25.47 22.8688L16.9662 28.2463C15.8187 28.8763 14.4425 28.915 13.2113 28.3313L12.9663 28.2063L4.5975 22.91C4.00222 22.5839 3.49877 22.113 3.13369 21.5408C2.7686 20.9685 2.55367 20.3135 2.50875 19.6363L2.5 19.3775V10.2713C2.5 8.88876 3.2125 7.61126 4.345 6.89001L13.0313 1.76751ZM15 18.75C14.6938 18.7501 14.3983 18.8625 14.1695 19.0659C13.9407 19.2694 13.7946 19.5497 13.7587 19.8538L13.75 20L13.7587 20.1588C13.7949 20.4626 13.9412 20.7426 14.17 20.9457C14.3987 21.1489 14.694 21.2611 15 21.2611C15.306 21.2611 15.6013 21.1489 15.83 20.9457C16.0588 20.7426 16.2051 20.4626 16.2413 20.1588L16.25 20.0125L16.2413 19.8538C16.2054 19.5497 16.0593 19.2694 15.8305 19.0659C15.6017 18.8625 15.3062 18.7501 15 18.75ZM16.71 10.4088C15.9617 10.0262 15.1061 9.90794 14.2821 10.0731C13.4581 10.2384 12.7142 10.6773 12.1713 11.3188C11.9642 11.5613 11.8577 11.8737 11.8735 12.1922C11.8892 12.5106 12.0261 12.811 12.2561 13.0319C12.4861 13.2528 12.7917 13.3774 13.1106 13.3803C13.4294 13.3832 13.7373 13.2642 13.9713 13.0475L14.185 12.8225C14.3694 12.6532 14.6013 12.5445 14.8493 12.511C15.0974 12.4775 15.3498 12.5208 15.5725 12.635C15.8126 12.7565 16.0071 12.9523 16.127 13.1932C16.247 13.4341 16.286 13.7073 16.2382 13.9721C16.1905 14.2369 16.0585 14.4793 15.862 14.6631C15.6655 14.847 15.4149 14.9625 15.1475 14.9925L14.8575 15.0075C14.5396 15.0425 14.2471 15.198 14.0404 15.4421C13.8337 15.6861 13.7284 16.0001 13.7461 16.3195C13.7639 16.6388 13.9034 16.9392 14.136 17.1588C14.3685 17.3784 14.6764 17.5005 14.9962 17.5C15.8395 17.5025 16.6591 17.2208 17.3225 16.7002C17.9859 16.1796 18.4545 15.4506 18.6526 14.6309C18.8507 13.8112 18.7667 12.9487 18.4142 12.1826C18.0618 11.4165 17.4614 10.7916 16.71 10.4088Z"
                fill="currentColor"
            />
        </svg>
    ),
    'thick-success': (props: { className?: string }) => (
        <svg
            className={cn('size-8 fill-[#292929]', props.className)}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5894 2.19212C15.2382 1.93596 14.7618 1.93596 14.4107 2.19212L11.3917 4.3944L7.65436 4.3875C7.21972 4.3867 6.83433 4.66674 6.70084 5.08038L5.55317 8.6366L2.52565 10.8274C2.17354 11.0822 2.02632 11.5352 2.16142 11.9483L3.3229 15.5L2.16142 19.0517C2.02632 19.4648 2.17354 19.9178 2.52565 20.1726L5.55317 22.3634L6.70084 25.9196C6.83433 26.3333 7.21972 26.6133 7.65436 26.6125L11.3917 26.6056L14.4107 28.8079C14.7618 29.064 15.2382 29.064 15.5894 28.8079L18.6083 26.6056L22.3457 26.6125C22.7803 26.6133 23.1657 26.3333 23.2992 25.9196L24.4468 22.3634L27.4744 20.1726C27.8265 19.9178 27.9737 19.4648 27.8386 19.0517L26.6771 15.5L27.8386 11.9483C27.9737 11.5352 27.8265 11.0822 27.4744 10.8274L24.4468 8.6366L23.2992 5.08038C23.1657 4.66674 22.7803 4.3867 22.3457 4.3875L18.6083 4.3944L15.5894 2.19212ZM20.7071 13.0821C21.0976 12.6916 21.0976 12.0584 20.7071 11.6679C20.3166 11.2774 19.6834 11.2774 19.2929 11.6679L13.75 17.2108L11.3321 14.7929C10.9416 14.4024 10.3084 14.4024 9.91789 14.7929C9.52737 15.1834 9.52737 15.8166 9.91789 16.2071L13.0429 19.3321C13.4334 19.7226 14.0666 19.7226 14.4571 19.3321L20.7071 13.0821Z"
                fill="currentColor"
            />
        </svg>
    ),
    'play-solid': (props: { className?: string }) => (
        <svg
            className={cn('size-8 fill-[#292929]', props.className)}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 14.155C1 6.88967 6.88968 1 14.155 1C17.6438 1 20.9899 2.38597 23.4569 4.85298C25.9239 7.32003 27.3099 10.6661 27.3099 14.155C27.3099 21.4203 21.4203 27.3099 14.155 27.3099C6.88968 27.3099 1 21.4203 1 14.155ZM11.7476 19.7854L19.4169 14.9968C19.704 14.8131 19.8776 14.4957 19.8776 14.155C19.8776 13.8142 19.704 13.4969 19.4169 13.3131L11.7213 8.52466C11.4183 8.33354 11.0353 8.3218 10.7211 8.49392C10.4068 8.66609 10.2106 8.99508 10.2085 9.35341V18.9566C10.2043 19.3236 10.4041 19.6626 10.7273 19.8366C11.0504 20.0106 11.4436 19.9909 11.7476 19.7854Z"
                fill="currentColor"
            />
        </svg>
    )
}

const TalhaIcons = ({
    name,
    className
}: {
    name: keyof typeof icons
    className?: string
}) => {
    const IconComponent = icons[name]
    return IconComponent ? <IconComponent className={className} /> : null
}

export default TalhaIcons
