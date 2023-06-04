'use client'

import AudioPlayer from '@/components/AudioPlayer'
import { Beat, beatPlayed } from '@/data'
import { createContext, useState } from 'react'

type AudioContextType = {
  currentTrack: Beat
  setCurrentTrack: React.Dispatch<React.SetStateAction<Beat>>
  playBeat: (beat: Beat) => void
}

type AudioProviderType = {
  children: React.ReactNode
}

export const AudioContext = createContext<AudioContextType | undefined>(
  undefined
)

export default function AudioProvider({ children }: AudioProviderType) {
  const [currentTrack, setCurrentTrack] = useState(beatPlayed)

  const playBeat = (beat: Beat) => {
    setCurrentTrack(beat)
  }

  return (
    <AudioContext.Provider value={{ currentTrack, setCurrentTrack, playBeat }}>
      {children}
      {currentTrack.title !== '' && <AudioPlayer beat={currentTrack} />}
    </AudioContext.Provider>
  )
}
