import Post from '@/components/Post'
import { posts } from '@/data'
import HomeSection from '../HomeSection'

export default function NewsSection() {
  return (
    <HomeSection title="ACTUALITÉS" seeMoreHref="/actualites">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <ul className="grid gap-5 gap-x-12 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <li className="w-full mx-auto group sm:max-w-sm" key={idx}>
              <Post
                href={post.href}
                imageUrl={post.imageUrl}
                date={post.date}
                title={post.title}
                content={post.content}
              />
            </li>
          ))}
        </ul>
      </div>
    </HomeSection>
  )
}
