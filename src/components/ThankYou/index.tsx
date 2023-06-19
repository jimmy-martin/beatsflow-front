import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type ThankYouProps = {
  title: string
  message: string
}

export default function ThankYou({ title, message }: ThankYouProps) {
  const router = useRouter()

  const [countDown, setCountDown] = useState(10)

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountDown((prevCountdown) => prevCountdown - 1)
    }, 1000)

    const timer = setTimeout(() => {
      router.push('/')
    }, 10000)

    return () => {
      clearInterval(countdownInterval)
      clearTimeout(timer)
    }
  }, [router])

  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <p className="text-green-400 font-semibold">
            BeatsFlow vous remercie pour votre achat
          </p>
          <p className="text-gray-600">
            Vous serez redirigé vers l&apos;accueil automatiquement dans{' '}
            {countDown} secondes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="block py-2 px-4 text-white font-medium bg-beatsflow-light-green duration-150 hover:bg-green-300 active:bg-green-500 rounded-lg"
            >
              Revenir à l&apos;accueil maintenant
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
