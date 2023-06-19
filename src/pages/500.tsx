import Error from '@/components/Error'

export default function InternalServerError() {
  return (
    <Error
      statusCode={500}
      title="Erreur interne"
      message="Une erreur est survenue."
    />
  )
}
