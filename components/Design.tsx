import Link from 'next/link'
import { LeatherChairProps } from '@/types'
import { leatherChairs } from '@/utils'
import Image from 'next/image'
const Design = () => {
  return (
    <div className='pb-20 md:container mx-auto w-[90vw]'>
      <div className=' grid md:grid-cols-2 space-y-10 md:place-items-center items-start gap-y-16 gap-x-10 '>
        <div className=''>
          <div className='grid relative grid-cols-[1fr,0.5fr] items-start gap-4'>
            <Image
              src='https://i.pinimg.com/564x/83/3d/f9/833df976acaad72c39d21f61dbd8742f.jpg'
              alt='design'
              width={400}
              height={350}
              layout=''
              className='object-cover hover:scale-110 duration-700 aspect-[2/2.5] rounded-lg '
            />
            <div className='space-y-4 w-full '>
              <Image
                src='https://i.pinimg.com/564x/01/51/d9/0151d978c940c90dcb7e69e6021cc088.jpg'
                alt='design'
                width={200}
                height={150}
                layout=''
                className='object-cover object-bottom rounded-lg aspect-square hover:scale-110 duration-700'
              />
              <Image
                src='https://i.pinimg.com/564x/19/9a/68/199a6881074dd8bd1703f73153cbf4fe.jpg'
                alt='design'
                width={300}
                height={250}
                layout=''
                className='object-cover sm:aspect-square object-center lg:aspect-[1/1.2] md:aspect-[1.2/1] aspect-[1.2/1] absolute right-0 hover:scale-110 duration-700  rounded-lg'
              />
            </div>
          </div>
        </div>
        <div className='space-y-4 md:max-w-md'>
          <h1 className='text-2xl md:text-3xl font-semibold '>
            We Help You Make Modern Interior Design
          </h1>
          <p className='md:text-base text-sm text-gray-400'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            provident quae vel facere necessitatibus a ab, deleniti amet,
            incidunt hic itaque repudiandae sed maiores vero.
          </p>

          <ul className='grid items-center gap-4 grid-cols-2 text-sm md:text-base list-disc'>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
              iure.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
              iure.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
              iure.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
              iure.
            </li>
          </ul>
          <button className='border border-black rounded-full capitalize bg-black hover:bg-white hover:text-black text-white text-lg px-4 py-3'>
            <Link href='/shop'>explore</Link>
          </button>
        </div>
      </div>
      <div className='lg:pt-40 pt-20 lg:flex gap-6 space-y-4 items-center justify-around'>
        {leatherChairs.map((item: LeatherChairProps) => {
          const { img,name} = item
          return (
            <article
              key={name}
              className='flex items-center justify-around gap-6 '
            >
              <Image
                src={img}
                alt={name}
                width={100}
                height={100}
                className='aspect-[0.5/0.5] rounded-lg duration-700 object-cover'
              />
              <div className='space-y-2'>
                <p className='text-sm'>
                  {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolore unde perferendis pariatur debitis recusandae cum odio nisi quaerat asperiores voluptates maxime eaque magnam, omnis accusamus iusto. Sit, minus quas.`.slice(
                    0,
                    100
                  )}
                  ...
                </p>
                <button className='py-2 text-white ligreen px-4 text-xs shadow-lg rounded-full capitalize font-semibold'>
                  read more
                </button>
              </div>
            </article>
          )
        }).slice(3,6)}
      </div>
    </div>
  )
}

export default Design
