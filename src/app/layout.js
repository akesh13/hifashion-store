import { Inter } from 'next/font/google'
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import './globals.css'
import Provider from './Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider options={{enableCssLayer :  true}}>
          <Provider>
            {children}
          </Provider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
