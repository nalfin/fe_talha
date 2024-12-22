import { cn } from '@/lib/utils'

interface ContainerProps {
    children: React.ReactNode
    className?: string
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div
            className={cn(
                'mx-auto max-w-[1440px] px-4 xl:px-[72px]',
                className
            )}
        >
            {children}
        </div>
    )
}

export default Container
