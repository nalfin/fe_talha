import Image from 'next/image'

const SatisfiedClient = () => {
    return (
        <div className="flex items-center gap-3">
            <div className="h-[40px] w-[142px]">
                <Image
                    src="/images/photos.png"
                    alt="photos"
                    width={142}
                    height={40}
                    className="h-auto w-auto"
                    priority
                />
            </div>
            <p className="text-md">satisfied clients</p>
        </div>
    )
}

export default SatisfiedClient
