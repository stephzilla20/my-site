import './globals.css'

export const metadata = {
  title: 'Stephen Tao',
  description: 'My personal website, built with Next.js. Learn more about me and connect!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}