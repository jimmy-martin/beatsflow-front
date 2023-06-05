'use client'

import AudioPlayer from '@/components/AudioPlayer'
import { defaultEmptyBeat } from '@/data'
import { BeatType } from '@/types/beat'
import { createContext, useState } from 'react'

type AudioContextType = {
  currentTrack: BeatType
  setCurrentTrack: React.Dispatch<React.SetStateAction<BeatType>>
  playBeat: (beat: BeatType) => void
}

type AudioProviderType = {
  children: React.ReactNode
}

export const AudioContext = createContext<AudioContextType | undefined>(
  undefined
)

export default function AudioProvider({ children }: AudioProviderType) {
  const [currentTrack, setCurrentTrack] = useState<BeatType>(defaultEmptyBeat)

  const playBeat = (beat: BeatType) => {
    setCurrentTrack(beat)
  }

  return (
    <AudioContext.Provider value={{ currentTrack, setCurrentTrack, playBeat }}>
      {children}
      {currentTrack.title !== '' && <AudioPlayer beat={currentTrack} />}
    </AudioContext.Provider>
  )
}
