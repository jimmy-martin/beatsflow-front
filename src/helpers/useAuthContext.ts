import { AuthContext } from '@/contexts/authContext'
import { useContext } from 'react'

export const useAuthContext = () => {
  const authContext = useContext(AuthContext)

  if (!authContext) {
    throw new Error('useAuthContext must be used within a AuthContextProvider')
  }

  return authContext
}
