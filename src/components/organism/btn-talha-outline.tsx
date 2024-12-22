import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import Link from 'next/link'

const BtnTalhaOutline = ({
    text,
    href,
    className
}: {
    text: string
    href: string
    className?: string
}) => {
    return (
        <div className="w-full">
            <Link href={href} className={cn('w-full', className)}>
                <Button
                    variant="outline"
                    className="text-md h-12 w-full rounded-full border border-brand-main bg-transparent px-6 py-3 font-medium text-brand-main hover:bg-brand-main hover:text-white"
                >
                    {text}
                </Button>
            </Link>
        </div>
    )
}

export default BtnTalhaOutline
