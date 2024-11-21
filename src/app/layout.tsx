import './globals.css'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { Inter } from 'next/font/google'

const mulish = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="pt-br" className="h-full">
        <body className={`${mulish.className} dark h-full antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
