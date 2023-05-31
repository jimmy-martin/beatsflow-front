import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type Props = {
  statusCode: number
  title: string
  message: string
}

export default function Error({ statusCode, title, message }: Props) {
  const router = useRouter()

  const [countDown, setCountDown] = useState(10)

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountDown((prevCountdown) => prevCountdown - 1)
    }, 1000)

    const timer = setTimeout(() => {
      router.back()
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
          <h3 className="text-green-400 font-semibold">Erreur {statusCode}</h3>
          <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
            {title}
          </p>
          <p className="text-gray-600">{message}</p>
          <p className="text-gray-600">
            Vous serez redirigé automatiquement dans {countDown} secondes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="block py-2 px-4 text-white font-medium bg-green-400 duration-150 hover:bg-green-300 active:bg-green-500 rounded-lg"
            >
              Revenir en arrière
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
