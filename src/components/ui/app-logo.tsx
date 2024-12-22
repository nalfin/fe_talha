import Image from 'next/image'
import Link from 'next/link'

const AppLogo = () => {
    return (
        <Link href="/">
            <div className="xl:h-[56px] xl:w-[92px]">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={60}
                    height={36}
                    className="h-auto min-h-full w-auto min-w-full"
                    priority
                />
            </div>
        </Link>
    )
}

export default AppLogo
