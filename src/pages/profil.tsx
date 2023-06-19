import Layout from '@/components/Layout'
import ProfileSections from '@/components/ProfileSections'
import ProfileSection from '@/components/ProfileSections/ProfileSection'
import UploadBeatSection from '@/components/ProfileSections/UploadBeatSection'
import useAuthContext from '@/helpers/useAuthContext'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Profil() {
  const router = useRouter()
  const { isLoggedUser, isLoadingUser } = useAuthContext()

  const [activeSection, setActiveSection] = useState('profil')

  const handleSectionChange = (section: string) => {
    setActiveSection(section)
  }

  useEffect(() => {
    if (!isLoadingUser && !isLoggedUser) router.push('/connexion')
  }, [isLoadingUser, isLoggedUser])

  return (
    <Layout>
      <div className="flex flex-wrap my-20">
        <div className="w-full md:w-1/3 2 pt-12">
          <h3 className="text-center font-bold text-2xl">VOTRE COMPTE</h3>
          <div className="flex flex-col content-center flex-wrap">
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
            <button
              onClick={() => handleSectionChange('mybeats')}
              className="btn btn-primary bg-gray-400 hover:bg-gray-600 rounded-xl m-4 text-white"
            >
              Mes beats
            </button>
            <button
              onClick={() => handleSectionChange('myfavorites')}
              className="btn btn-disabled bg-gray-400 hover:bg-gray-600 rounded-xl m-4 text-white"
            >
              Mes favoris
            </button>
          </div>
        </div>
        <div className="w-full md:w-2/3 p-12">
          <ProfileSections section={activeSection} />
        </div>
      </div>
    </Layout>
  )
}
