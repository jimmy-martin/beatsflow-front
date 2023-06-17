import { AuthContext } from '@/contexts/authContext'
import { useContext } from 'react'

export default function useAuthContext() {
  const authContext = useContext(AuthContext)

  if (!authContext) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }

  return authContext
}
