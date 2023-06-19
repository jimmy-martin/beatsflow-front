import Link from 'next/link'

type SeeMoreButtonProps = {
  href: string
  content: string
}

export default function SeeMoreButton({ href, content }: SeeMoreButtonProps) {
  return (
    <div className="text-center my-4">
      <Link
        className="btn btn-outline hover:bg-black hover:text-white"
        href={href}
      >
        {content}
      </Link>
    </div>
  )
}
