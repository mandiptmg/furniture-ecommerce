import Image from 'next/image'
import { BLogProps } from '@/types'
import { recentBlogPosts } from '@/utils'
import Link from 'next/link'
const Blog = () => {
  return (
    <div>
      <div className='md:container  mx-auto pb-40 w-[90vw]'>
        <div className='flex justify-between items-center'>
          <h1 className=' text-3xl capitalize font-bold  md:text-4xl'>
            recent blog
          </h1>
          <Link href='/blog' className='capitalize text-base underline hover:no-underline font-medium'>
            view all posts
          </Link>
        </div>
        <Link href='#'>
          <div className='grid mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start'>
            {recentBlogPosts
              .map((item: BLogProps) => {
                const { author, title, image, date, desc } = item
                return (
                  <article key={title} className='w-full space-y-2 group'>
                    <Image
                      src={image}
                      alt={title}
                      width={300}
                      height={205}
                      layout='responsive'
                      className='object-cover group-hover:opacity-80 duration-700 aspect-[1.3/0.8] rounded-lg '
                    />
                    <h1 className='font-semibold sm:text-sm md:text-base '>
                      {title}
                    </h1>
                    <p className='text-sm '>
                      {' '}
                      by <span className='font-semibold'>{author}</span> on{' '}
                      <span className='font-semibold'>{date}</span>
                    </p>
                  </article>
                )
              })
              .slice(0, 3)}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Blog
