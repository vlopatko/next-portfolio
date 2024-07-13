import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { constructMetadata } from "@/lib/utils"

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"], variable: '--font-jetBrainsMono' })

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>{children}</body>
    </html>
  )
}
