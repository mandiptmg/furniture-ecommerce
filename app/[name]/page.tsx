'use client'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { addToCart } from '@/store/nextSlice'
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
        <div className='pb-36 md:pb-28 w-[90vw] -mt-20  pt-24 md:w-[80vw] mx-auto '>
          <h1 className='text-left text-white'>
            {' '}
            <Link href='/'>
              <span>HOME</span>
            </Link>
            /<span className='font-thin text-gray-200'>{product.name}</span>
          </h1>
          <div className='grid gap-10 mt-10 md:gap-14  items-center md:grid-cols-2'>
            <div className='max-w-lg mx-auto '>
              <Image
                src={product.img}
                alt={product.name}
                width={300}
                height={300}
                className='w-full h-full  aspect-square object-cover rounded-md'
              />
            </div>{' '}
            <div className='space-y-2 w-full h-full bg-black/50 p-4'>
              <h1 className='text-lg md:text-2xl uppercase font-semibold text-green-600/60'>
                {product.name}
              </h1>
              <p className='text-sm font-thin md:text-base text-gray-200'>
                {product.description}
              </p>
              <h1 className='text-base text-white  rounded-md font-medium'>
                ${product.price}
              </h1>

              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      name: product.name,
                      price: product.price,
                      img: product.img,
                      quantity: 1,
                    })
                  )
                }
                className='uppercase text-white bg-green-700/60 p-2 rounded-md w-full hover:bg-green-800'
              >
                add to cart
              </button>
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
