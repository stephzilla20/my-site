import './globals.css'
import Nav from './components/Nav.jsx'
import Providers from './providers'
import Footer from './components/Footer'

export const metadata = {
  title: 'Stephen Tao',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className='min-h-screen bg-snowstorm-2 dark:bg-polarnight-4 sm:relative'>
        <Providers>
          <section>
            <Nav></Nav>
          </section>
          {children}
          <section className='flex flex-col items-center '>
              <footer className='sm:absolute bottom-0 mb-11'>
                <Footer></Footer>
              </footer>
          </section>
        </Providers>

      </body>
    </html>
  )
}
