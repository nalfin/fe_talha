import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
    display: 'swap'
})

export const metadata: Metadata = {
    title: 'Talha',
    description: 'Description of Talha'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning={true}
            className="scroll-smooth"
        >
            <body className={`${montserrat.className} antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
