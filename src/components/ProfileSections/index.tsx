import MyBeats from './MyBeats'
import ProfileSection from './ProfileSection'
import UploadBeatSection from './UploadBeatSection'

export default function ProfileSections({ section }: { section: string }) {
  let title = 'Profil'

  switch (section) {
    case 'profil':
      title = 'Profil'
      break
    case 'upload':
      title = 'Partager un beat'
      break
    case 'mybeats':
      title = 'Mes beats'
      break
    case 'myfavorites':
      title = 'Mes favoris'
      break
  }

  return (
    <div className="w-full">
      <h1 className="text-center text-4xl font-bold">{title}</h1>
      {section === 'profil' && <ProfileSection />}
      {section === 'upload' && <UploadBeatSection />}
      {section === 'mybeats' && <MyBeats />}
    </div>
  )
}
