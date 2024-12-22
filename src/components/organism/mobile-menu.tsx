import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'

import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

const MobileMenu = () => {
    return (
        <>
            <Sheet>
                <SheetTrigger>
                    <MenuIcon className="h-6 w-6" />
                </SheetTrigger>
                <SheetContent
                    className="focus-ring-0 w-[400px] border-none bg-[#030303] text-white focus:bg-none sm:w-[540px]"
                    side="left"
                >
                    <SheetHeader className="hidden">
                        <SheetTitle>Menu</SheetTitle>
                        <SheetDescription>Select your program</SheetDescription>
                    </SheetHeader>
                    <div className="flex flex-col gap-6 pt-12">
                        <Link href="/#">
                            <Button className="text-md hover:text-brand-main bg-transparent px-0 hover:bg-transparent">
                                Blueprint for Aging Well (About)
                            </Button>
                        </Link>
                        <Link href="/#">
                            <Button className="text-md hover:text-brand-main bg-transparent px-0 hover:bg-transparent">
                                Podcast
                            </Button>
                        </Link>
                        <Link href="/#">
                            <Button className="text-md hover:text-brand-main bg-transparent px-0 hover:bg-transparent">
                                Pricing
                            </Button>
                        </Link>

                        <Accordion type="single" collapsible>
                            <AccordionItem
                                value="item-1"
                                className="border-none"
                            >
                                <AccordionTrigger
                                    className="text-md hover:text-brand-main bg-transparent px-0 hover:bg-transparent"
                                    classIcon="size-5"
                                >
                                    Programs
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-6 pt-6">
                                    <Link href="/#">
                                        <Button className="text-md hover:text-brand-main bg-transparent px-0 font-medium hover:bg-transparent">
                                            Link 1
                                        </Button>
                                    </Link>
                                    <Link href="/#">
                                        <Button className="text-md hover:text-brand-main bg-transparent px-0 hover:bg-transparent">
                                            Link 2
                                        </Button>
                                    </Link>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default MobileMenu
