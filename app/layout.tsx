import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Fieldhouse Ops — Sales & Marketing Automation',
  description:
    'We build and deploy full-funnel automation for your business. From landing pages and ads to nurture campaigns and booked appointments — powered by GoHighLevel and HubSpot.',
  keywords: ['sales automation', 'marketing automation', 'GoHighLevel', 'HubSpot', 'AI automation', 'nurture campaigns'],
  openGraph: {
    title: 'Fieldhouse Ops — Sales & Marketing Automation',
    description: 'We automate your sales. You close the deals.',
    url: 'https://fieldhouseops.com',
    siteName: 'Fieldhouse Ops',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fieldhouse Ops — Sales & Marketing Automation',
    description: 'We automate your sales. You close the deals.',
  },
  metadataBase: new URL('https://fieldhouseops.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
