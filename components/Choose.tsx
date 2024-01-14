import Image from 'next/image'
import { FeaturesProps } from '@/types'
import { features } from '@/utils'

const Choose = () => {
  return (
    <div className='pb-40'>
      <div className='mx-auto md:container w-[90vw]'>
        <div className=' grid items-center gap-7 md:grid-cols-2 '>
          <div className='space-y-4'>
            <h1 className='font-bold text-2xl md:text-3xl'>Why Choose Us</h1>
            <p className='text-sm md:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, autem beatae ratione, corrupti, maxime itaque fugiat
              nemo laboriosam voluptates velit ea minus quaerat facere
              repellendus.
            </p>
            <div className='grid grid-cols-2 gap-y-6 items-start'>
              {features.map((item: FeaturesProps) => {
                const { name, desc, icon } = item
                return (
                  <div key={name} className='grid gap-6 space-x-3'>
                    <span className='pl-4 text-3xl'>{icon}</span>
                    <div className='text-left  '>
                      <span className='font-semibold lg:text-base text-sm '>
                        {name}
                      </span>
                      <p className='text-xs lg:text-sm'>{desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='grid place-items-center'>
            <Image
              src='https://i.pinimg.com/564x/83/3d/f9/833df976acaad72c39d21f61dbd8742f.jpg'
              alt='design'
              width={400}
              height={350}
              layout=''
              className='object-cover  duration-700 aspect-square md:aspect-[2/2.5] rounded-lg '
            />
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Choose
