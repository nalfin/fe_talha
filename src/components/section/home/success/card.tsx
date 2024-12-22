import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'
import TalhaIcons from '@/components/ui/talha-icon'
import { cn } from '@/lib/utils'

type CardStoriesProps = {
    classImg: string
    name: string
    text: string
    href: string
}

const CardStories = ({ classImg, name, text, href }: CardStoriesProps) => {
    const match = href.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})/)
    const videoId = match && match[1] ? match[1] : ''
    const autoplay = 'autoplay=1'
    const loop = 'loop=0'
    const controls = 'controls=1'
    const modestbranding = 'modestbranding=1'
    const showinfo = 'showinfo=1'
    const rel = 'rel=1'
    const playlist = `playlist=${videoId}`

    const videoSrc = `https://www.youtube.com/embed/${videoId}?${autoplay}&${loop}&${controls}&${modestbranding}&${showinfo}&${rel}&${playlist}`

    return (
        <>
            <div className="group relative h-[512px] w-[284px] cursor-pointer overflow-hidden rounded-[18px]">
                <div
                    className={cn(
                        'duration-600 h-full w-full items-end bg-cover bg-center transition-transform ease-in-out group-hover:rotate-[-2deg] group-hover:scale-[1.05] group-hover:duration-700',
                        classImg
                    )}
                />

                <div className="flex w-full items-end justify-between text-white">
                    <div className="absolute bottom-6 left-6 flex w-full flex-col">
                        <p className="text-lg font-bold">{name}</p>
                        <p className="w-[144px] text-sm text-[#D4D4D8]">
                            {text}
                        </p>
                    </div>
                    <div className="absolute bottom-6 right-6 w-fit">
                        <Dialog>
                            <DialogTrigger>
                                <div className="relative flex">
                                    <div className="relative flex">
                                        <span className="animate-button-play absolute z-[2] inline-flex h-full w-full rounded-full bg-brand-main/75" />
                                        <div className="z-[5] rounded-full bg-brand-main/50 p-2">
                                            <TalhaIcons
                                                name="play-solid"
                                                className="size-7 fill-transparent text-white"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent
                                className="border-none bg-transparent p-0"
                                classXIcon="hidden"
                            >
                                <DialogHeader className="hidden">
                                    <DialogTitle>Title</DialogTitle>
                                    <DialogDescription>
                                        Description
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="flex aspect-video max-w-[800px] items-center justify-center">
                                    <iframe
                                        src={videoSrc}
                                        className="abnsolute inset-0 h-full w-full"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                    />
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardStories
