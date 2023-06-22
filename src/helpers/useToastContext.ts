import { ToastContext } from '@/contexts/toastContext'
import { useContext } from 'react'

export default function useToastContext() {
  const toastContext = useContext(ToastContext)

  if (!toastContext) {
    throw new Error(
      'useToastContext must be used within a ToastContextProvider'
    )
  }

  return toastContext
}
