/* eslint-disable react/jsx-key */
import AudioPlayerDescription from './components/Description'
import { BeatInterface, BeatWithUserAndCategoryInterface } from '@/types/beat'
import { useRouter } from 'next/router'
import H5AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

export default function AudioPlayer({
  beat,
}: {
  beat: BeatInterface | BeatWithUserAndCategoryInterface
}) {
  const { title, url, image_url } = beat

  const router = useRouter()

  const isLoginOrRegisterPage =
    router.pathname === '/connexion' || router.pathname === '/inscription'

  if (isLoginOrRegisterPage) {
    return null
  }

  return (
    <div className="sticky bottom-0">
      <H5AudioPlayer
        src={url}
        autoPlay
        customAdditionalControls={[
          <AudioPlayerDescription
            title={title}
            username={beat.user?.username || ''}
            imageUrl={image_url}
          />,
        ]}
      />
    </div>
  )
}
