'use client'
import { LeatherChairProps } from '@/types'
import { leatherChairs } from '@/utils'
import Image from 'next/image'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import Link from 'next/link'
import { addToCart } from '@/store/nextSlice'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const AllShop = () => {
  const dispatch = useDispatch()
  return (
    <div className='py-20'>
      <div className='grid place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-2 gap-y-8 '>
        {leatherChairs.map((item: LeatherChairProps) => {
          const { img, price, name } = item
          return (
            <article key={name} className='group'>
              <div className='h-[462px]  relative max-w-[300px]'>
                <Link
                  href={{
                    pathname: `/${name}`,
                    query: {
                      item: JSON.stringify(item),
                    },
                  }}
                >
                  {' '}
                  <div>
                    <Image
                      loading='lazy'
                      src={img}
                      alt={name}
                      width={250}
                      height={250}
                      className='w-[300px] h-[300px] rounded-t-lg group-hover:-pt-4 mb-[30px]  duration-700 object-cover'
                    />
                  </div>
                </Link>
                <div className='text-center absolute w-full h-[220px] bottom-0 pt-16 bg-opacity-0 group-hover:bg-opacity-100   rounded-lg duration-700 group-hover:bg-gray-400/50 grid place-items-center space-y-2'>
                  <h1 className='text-base md:text-lg '>{name}</h1>
                  <h1 className='font-bold '>${price}</h1>

                  <div className=''>
                  <  ToastContainer/>
                    <div className=' w-full grid items-end  rounded-lg place-items-center'>
                      <button
                        onClick={() => {
                          dispatch(
                            addToCart({
                              img: img,
                              price: price,
                              name: name,
                              quantity: 1,
                            })
                          )
                          toast.success(`${name} added to cart`, {
                            position: 'top-center',
                          })
                        }}
                        className='w-10 h-10 rounded-full bg-black  text-white opacity-0 group-hover:opacity-100 -mb-8 grid place-items-center'
                      >
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
