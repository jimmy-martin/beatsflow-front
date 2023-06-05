/* eslint-disable react/jsx-key */
import AudioPlayerDescription from './components/Description'
import { BeatType } from '@/types/beat'
import { useRouter } from 'next/router'
import H5AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

export default function AudioPlayer({ beat }: { beat: BeatType }) {
  const { title, file_path, image_url } = beat

  const router = useRouter()

  const isLoginOrRegisterPage =
    router.pathname === '/connexion' || router.pathname === '/inscription'

  if (isLoginOrRegisterPage) {
    return null
  }

  return (
    <div className="sticky bottom-0">
      <H5AudioPlayer
        src={file_path}
        autoPlay
        customAdditionalControls={[
          <AudioPlayerDescription
            title={title}
            username={beat.user.username}
            imageUrl={image_url}
          />,
        ]}
      />
    </div>
  )
}
