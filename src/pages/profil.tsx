import Layout from '@/components/Layout'
import ProfileSection from '@/components/ProfileSection'
import UploadBeatSection from '@/components/UploadBeatSection'
import useAuthContext from '@/helpers/useAuthContext'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Profil() {
  const router = useRouter()
  const { isLoggedUser } = useAuthContext()

  const [activeSection, setActiveSection] = useState('profil') // Ajouter un état pour suivre la section active

  const handleSectionChange = (section: string) => {
    setActiveSection(section)
  }

  useEffect(() => {
    if (!isLoggedUser) router.push('/connexion')
  }, [isLoggedUser])

  return (
    <Layout>
      <h1 className="text-center text-4xl font-bold my-6">MON PROFIL</h1>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 border-r-2 pt-12">
          <h3 className="text-center font-bold text-2xl">Votre compte</h3>
          <div className="flex justify-center">
            <button
              onClick={() => handleSectionChange('profil')}
              className="btn btn-primary bg-gray-400 hover:bg-gray-600 rounded-xl m-4 text-white"
            >
              Profil
            </button>
            <button
              onClick={() => handleSectionChange('upload')}
              className="btn btn-primary bg-gray-400 hover:bg-gray-600 rounded-xl m-4 text-white"
            >
              Partager un beat
            </button>
          </div>
        </div>
        {activeSection === 'profil' && <ProfileSection />}
        {activeSection === 'upload' && <UploadBeatSection />}
      </div>
    </Layout>
  )
}
