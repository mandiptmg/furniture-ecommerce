import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer, Header } from '@/components'
import ProviderStore from './Provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FurniVogue',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`relative bg-gray-100 ${inter.className}`}>
        <ProviderStore>
          <Header />
          {children}
          <Footer />
        </ProviderStore>
      </body>
    </html>
  )
}
