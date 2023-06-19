import Error from '@/components/Error'

export default function NotFoundError() {
  return (
    <Error
      statusCode={404}
      title="Page introuvable"
      message="La page que vous recherchez est introuvable ou a été supprimée."
    />
  )
}
