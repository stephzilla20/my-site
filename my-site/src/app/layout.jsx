
import './globals.css'
import Nav from './components/Nav.jsx'
import Providers from './providers'
import Footer from './components/Footer'

export const metadata = {
  title: 'Stephen Tao',
  description: 'My personal website, built with Next.js. Learn more about me and connect!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='min-h-screen flex flex-col bg-snowstorm-2 dark:bg-polarnight-4'>
        <Providers>
          <Nav />
          <main className='flex-grow'>{children}</main>
          <footer className='mb-11'>
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  )
}
