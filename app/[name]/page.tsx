'use client'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { FaHeart, FaMinus, FaPlus } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { addToCart, decreaseProduct, increaseProduct } from '@/store/nextSlice'
import { useDispatch } from 'react-redux'
import { LeatherChairProps } from '@/types'

const ProductData = () => {
  const dispatch = useDispatch()
  const searchParams = useSearchParams()
  const [product, setProduct] = useState<LeatherChairProps | null>(null)
  useEffect(() => {
    const item = searchParams.get('item')
    if (item) {
      try {
        const parseItem = JSON.parse(item) as LeatherChairProps
        setProduct(parseItem)
      } catch (error) {
        console.error('Error parsing item', error)
      }
    }
  }, [searchParams])

  return (
    <div className='  bg-black/90'>
      {product ? (
        <div className='py-20 h-screen w-[90vw] -mt-20  pt-24 md:w-[80vw] mx-auto grid place-items-center'>
          <div className='grid gap-10 mt-10 md:gap-14  items-center md:grid-cols-2'>
            <div className='max-w-lg'>
              <Image
                src={product.img}
                alt={product.name}
                width={300}
                height={300}
                className='w-full h-full  aspect-square object-cover rounded-md'
              />
            </div>{' '}
            <div className='space-y-2 w-full h-full bg-black/50 p-4'>
              <h1 className='text-2xl uppercase font-semibold text-green-600/60'>
                {product.name}
              </h1>
              <p className='text-sm font-thin md:text-base text-gray-200'>
                {product.description}
              </p>
              <h1 className='text-base text-white  rounded-md font-medium'>
                ${product.price}
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <div>There is no product </div>
      )}
    </div>
  )
}

export default ProductData
