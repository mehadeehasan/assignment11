import Navbar from './components/Navbar'
import './globals.css'


export const metadata = {
  title: 'Module11 Assignment',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div className='max-w-5xl mx-auto p-4 bg-yellow-200'>
          <Navbar />
          <div className='mt-10'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
//#6b7280;
