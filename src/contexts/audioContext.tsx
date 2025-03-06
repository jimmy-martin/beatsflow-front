'use client'

import AudioPlayer from '@/components/AudioPlayer'
import { defaultEmptyBeat } from '@/data'
import { BeatInterface, BeatWithUserAndCategoryInterface } from '@/types/beat'
import React, { createContext, useState } from 'react'

type AudioContextType = {
  currentTrack: BeatInterface | BeatWithUserAndCategoryInterface
  setCurrentTrack: React.Dispatch<
    React.SetStateAction<BeatInterface | BeatWithUserAndCategoryInterface>
  >
  playBeat: (beat: BeatInterface | BeatWithUserAndCategoryInterface) => void
}

type AudioProviderType = {
  children: React.ReactNode
}

export const AudioContext = createContext<AudioContextType | undefined>(
  undefined
)

export default function AudioProvider({ children }: AudioProviderType) {
  const [currentTrack, setCurrentTrack] = useState<
    BeatInterface | BeatWithUserAndCategoryInterface
  >(defaultEmptyBeat)

  const playBeat = (beat: BeatInterface | BeatWithUserAndCategoryInterface) => {
    setCurrentTrack(beat)
  }

  return (
    <AudioContext.Provider value={{ currentTrack, setCurrentTrack, playBeat }}>
      {children}
      {currentTrack.title !== '' && <AudioPlayer beat={currentTrack} />}
    </AudioContext.Provider>
  )
}
