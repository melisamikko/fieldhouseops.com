import type { Metadata } from 'next'
import { Geist, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '700'],
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
    <html lang="en" className={`${geist.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-primary">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZF6QZ3X8XB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZF6QZ3X8XB');
          `}
        </Script>
      </body>
    </html>
  )
}
