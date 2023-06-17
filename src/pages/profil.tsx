import Layout from '@/components/Layout'
import useAuthContext from '@/helpers/useAuthContext'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Profil() {
  const router = useRouter()
  const { isLoggedUser } = useAuthContext()

  useEffect(() => {
    if (!isLoggedUser()) router.push('/connexion')
  }, [isLoggedUser])

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold">Profil</h1>
      </div>
    </Layout>
  )
}
