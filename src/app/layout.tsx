import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { constructMetadata } from '@/lib/utils'
import Header from '@/components/Header'
import PageTransition from '@/components/pageTransition'
import StairTransition from '@/components/StairTransition'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetBrainsMono',
})

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
