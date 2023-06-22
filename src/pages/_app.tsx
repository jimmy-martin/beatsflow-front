import './../styles/globals.css'
import AudioProvider from '@/contexts/audioContext'
import AuthProvider from '@/contexts/authContext'
import { CartProvider } from '@/contexts/cartContext'
import CategoriesProvider from '@/contexts/categoriesContext'
import ToastProvider from '@/contexts/toastContext'
import type { AppProps } from 'next/app'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CartProvider>
        <AudioProvider>
          <CategoriesProvider>
            <ToastProvider>
              <div
                className={`${raleway.className} min-h-screen flex flex-col`}
              >
                <Component {...pageProps} />
              </div>
            </ToastProvider>
          </CategoriesProvider>
        </AudioProvider>
      </CartProvider>
    </AuthProvider>
  )
}
