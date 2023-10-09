import Hero from '@/components/Hero/Hero'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HomePage',
  description: 'This is an Agency WebApp',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Hero/>
          {/* <div className='global-container'> */}
            {children}
          {/* </div> */}
        </body>
    </html>
  )
}
