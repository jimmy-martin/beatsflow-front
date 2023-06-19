'use client'

import AudioPlayer from '@/components/AudioPlayer'
import { defaultEmptyBeat } from '@/data'
import { BeatInterface } from '@/types/beat'
import React, { createContext, useState } from 'react'

type AudioContextType = {
  currentTrack: BeatInterface
  setCurrentTrack: React.Dispatch<React.SetStateAction<BeatInterface>>
  playBeat: (beat: BeatInterface) => void
}

type AudioProviderType = {
  children: React.ReactNode
}

export const AudioContext = createContext<AudioContextType | undefined>(
  undefined
)

export default function AudioProvider({ children }: AudioProviderType) {
  const [currentTrack, setCurrentTrack] =
    useState<BeatInterface>(defaultEmptyBeat)

  const playBeat = (beat: BeatInterface) => {
    setCurrentTrack(beat)
  }

  return (
    <AudioContext.Provider value={{ currentTrack, setCurrentTrack, playBeat }}>
      {children}
      {currentTrack.title !== '' && <AudioPlayer beat={currentTrack} />}
    </AudioContext.Provider>
  )
}
