import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const robotoMono = Roboto_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Haniya Shafiq | Full Stack Software Engineer',
  description: 'Portfolio of Haniya Shafiq, an Aspiring Full Stack Software Engineer. Building practical full stack projects while mastering modern web technologies.',
  keywords: ['Full Stack Developer', 'Software Engineer', 'Web Developer', 'Portfolio', 'Haniya Shafiq'],
  authors: [{ name: 'Haniya Shafiq' }],
  creator: 'Haniya Shafiq',
  openGraph: {
    title: 'Haniya Shafiq | Full Stack Software Engineer',
    description: 'Portfolio of Haniya Shafiq, an Aspiring Full Stack Software Engineer',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haniya Shafiq | Full Stack Software Engineer',
    description: 'Portfolio of Haniya Shafiq, an Aspiring Full Stack Software Engineer',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}

