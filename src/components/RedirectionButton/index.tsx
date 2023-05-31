import Link from 'next/link'

type RedirectionButtonProps = {
  href: string
  content: string
}

export default function RedirectionButton({
  href,
  content,
}: RedirectionButtonProps) {
  return (
    <Link
      href={href}
      className={`py-3 px-4 text-center text-black bg-white hover:bg-teal-600 rounded-md shadow block lg:inline`}
    >
      {content}
    </Link>
  )
}
