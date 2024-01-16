import { LeatherChairProps } from '@/types'
import { leatherChairs } from '@/utils'
import Image from 'next/image'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AllShop = () => {
  return (
    <div className='py-20'>
      <div className='grid place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-2 gap-y-8 '>
        {leatherChairs.map((item: LeatherChairProps) => {
          const { img, price, name } = item
          return (
            <article key={name} className='group'>
              <div className='h-[462px]  relative max-w-[300px]'>
                <div>
                  <Image
                    src={img}
                    alt={name}
                    width={250}
                    height={250}
                    className='w-[300px] h-[300px] rounded-t-lg group-hover:-pt-4 mb-[30px]  duration-700 object-cover'
                  />
                </div>
                <div className='text-center absolute w-full h-[220px] bottom-0 pt-16 bg-opacity-0 group-hover:bg-opacity-100   rounded-lg duration-700 group-hover:bg-gray-400/50 grid place-items-center space-y-2'>
                  <h1 className='text-base md:text-lg '>{name}</h1>
                  <h1 className='font-bold '>${price}</h1>

                  <div className=''>
                    <div className=' w-full grid items-end  rounded-lg place-items-center'>
                      <button className='w-10 h-10 rounded-full bg-black  text-white opacity-0 group-hover:opacity-100 -mb-8 grid place-items-center'>
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default AllShop
