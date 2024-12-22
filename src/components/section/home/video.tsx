'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'
import TalhaIcons from '@/components/ui/talha-icon'

const HomeVideoSection = () => {
    const videoUrl = 'https://www.youtube.com/watch?v=u7Ox7Ne4p0U'
    const match = videoUrl.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})/)
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
            <div className="mx-auto max-w-[1440px] px-4 xl:px-[0px]">
                <div className="flex h-[525px] w-full items-center justify-center bg-video-2 bg-cover bg-top bg-no-repeat xl:h-[700px] xl:bg-video-1">
                    <Dialog>
                        <DialogTrigger>
                            <div className="relative flex">
                                <span className="animate-button-play absolute z-[2] inline-flex h-full w-full rounded-full bg-brand-main/75" />
                                <div className="z-[5] rounded-full bg-brand-main/50 p-4">
                                    <TalhaIcons
                                        name="play-video"
                                        className="size-10 fill-transparent text-white"
                                    />
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
        </>
    )
}

export default HomeVideoSection
