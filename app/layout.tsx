import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './provider'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Johan Castro',
  description: 'Johan Sebastian Castro Garcia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='dark'>
      <body className={inter.className}>
        <Navbar />
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
