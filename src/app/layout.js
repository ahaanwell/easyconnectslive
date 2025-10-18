import './globals.css'

export const metadata = {
  title: 'PC Cleaner',
  description: 'Make your PC fast again — free scan & one-click cleanup'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-800 antialiased">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
