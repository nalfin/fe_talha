import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'video-1': "url('/images/thumbnail-video-1.png')",
                'video-2': "url('/images/thumbnail-video-2.png')",
                'content-1': 'url("/images/content-img-1.png")',
                'content-2': 'url("/images/content-img-2.png")',
                'accent-1': 'url("/images/bg-accent-1.png")',
                'accent-1-mob': 'url("/images/bg-accent-1-mob.png")',
                'accent-2': 'url("/images/bg-accent-2.png")',
                'accent-2-mob': 'url("/images/bg-accent-2-mob.png")',
                'card-gt-1': "url('/images/img-card-1.jpg')",
                'card-gt-2': "url('/images/img-card-2.jpg')",
                'card-transform-1': "url('/images/card-transform-1.jpeg')",
                'card-transform-2': "url('/images/card-transform-2.jpeg')",
                'card-transform-3': "url('/images/card-transform-3.jpeg')",
                'card-transform-4': "url('/images/card-transform-4.jpeg')",
                'card-stories-1': "url('/images/card-stories-1.jpg')",
                'card-stories-2': "url('/images/card-stories-2.jpg')",
                'card-stories-3': "url('/images/card-stories-3.jpg')"
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                'brand-main': 'hsl(var(--brand-main))',
                'brand-main-hover': 'hsl(var(--brand-main-hover))',
                'gradient-card-1-from': '#FE6148',
                'gradient-card-1-to': '#FE754ED9',
                'gradient-card-2-from': '#FB1616',
                'gradient-card-2-to': '#FB4B1680',
                'gradient-card-3-from': '#0E9F87',
                'gradient-card-3-to': '#0E9F8780',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            borderRadius: {
                xl: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        }
    },
    plugins: [tailwindcssAnimate]
}
export default config
