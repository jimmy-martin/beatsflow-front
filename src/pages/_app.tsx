import './../styles/globals.css'
import AudioProvider from '@/contexts/audioContext'
import AuthProvider from '@/contexts/authContext'
import type { AppProps } from 'next/app'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AudioProvider>
        <div className={raleway.className}>
          <Component {...pageProps} />
        </div>
      </AudioProvider>
    </AuthProvider>
  )
}
