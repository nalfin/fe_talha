import Link from 'next/link'
import { Button } from '../ui/button'

const BtnTalhaPrimary = ({ text, href }: { text: string; href: string }) => {
    return (
        <div>
            <Link href={href}>
                <Button
                    variant="default"
                    className="text-md ease h-12 rounded-full bg-brand-main px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-brand-main-hover"
                >
                    {text}
                </Button>
            </Link>
        </div>
    )
}

export default BtnTalhaPrimary
