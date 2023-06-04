import './../styles/globals.css'
import AudioProvider from '@/contexts/audioContext'
import type { AppProps } from 'next/app'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AudioProvider>
      <div className={raleway.className}>
        <Component {...pageProps} />
      </div>
    </AudioProvider>
  )
}
