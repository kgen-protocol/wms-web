import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WMS - WhiteMartech Solutions',
  description: 'Created with v0',
  generator: 'WMS - WhiteMartech Solutions',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
