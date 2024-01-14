import { FeaturesProps } from '@/types'
import { features } from '@/utils'
const AllServices = () => {
  return (
    <div className='mx-auto w-[90vw] py-20 md:container'>
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
  )
}

export default AllServices
