import { cn } from '@/lib/utils'

interface ContainerFullProps {
    children: React.ReactNode
    className?: string
}

const ContainerFull = ({ children, className }: ContainerFullProps) => {
    return <div className={cn('w-full', className)}>{children}</div>
}

export default ContainerFull
