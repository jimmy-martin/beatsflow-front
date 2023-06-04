/* eslint-disable react/jsx-key */
import AudioPlayerDescription from './components/Description'
import { useRouter } from 'next/router'
import H5AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

type AudioPlayerProps = {
  beat: {
    title: string
    audioUrl: string
    imageUrl: string
    username: string
  }
}

export default function AudioPlayer({ beat }: AudioPlayerProps) {
  let { title, audioUrl, imageUrl, username } = beat

  const router = useRouter()

  const isLoginOrRegisterPage =
    router.pathname === '/connexion' || router.pathname === '/inscription'

  if (isLoginOrRegisterPage) {
    return null
  }

  return (
    <div className="sticky bottom-0">
      <H5AudioPlayer
        src={audioUrl}
        autoPlay
        customAdditionalControls={[
          <AudioPlayerDescription
            title={title}
            username={username}
            imageUrl={imageUrl}
          />,
        ]}
      />
    </div>
  )
}
