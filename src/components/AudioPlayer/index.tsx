/* eslint-disable react/jsx-key */
import AudioPlayerDescription from './components/Description'
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
  audioUrl = '/beats/reflected-light-147979.mp3'
  return (
    <H5AudioPlayer
      src={audioUrl}
      customAdditionalControls={[
        <AudioPlayerDescription
          title={title}
          username={username}
          imageUrl={imageUrl}
        />,
      ]}
    />
  )
}
