'use client'
import { StateProps, StoreProduct } from '@/types'
import { FaRegTimesCircle } from 'react-icons/fa'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import empty from '../../public/empty.png'
import Image from 'next/image'
import { increaseProduct, decreaseProduct, removeItem } from '@/store/nextSlice'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useEffect, useState } from 'react'
const CartItem = () => {
  const dispatch = useDispatch()
  const { productData } = useSelector((state: StateProps) => state.next)
  const [totalAmount, setTotalAmount] = useState(0)
  useEffect(() => {
    let amount = 0
    let quantity = 0
    productData.map((item: StoreProduct) => {
      amount += item.price * item.quantity
      quantity += item.quantity
      return
    })
    setTotalAmount(amount)
  }, [productData])
  return (
    <div className='bg-black/80 '>
      <div className=' min-h-screen w-[90vw] md:w[80vw] mx-auto -mt-20 pt-28 pb-40'>
        <div>
          <div className='text-center mt-10 '>
            <h1 className='text-white text-3xl font-bold uppercase'>
              shopping cart
            </h1>
            <div className='w-24 h-1 bg-white  mx-auto'></div>
          </div>
          <div className='mt-14'>
            {productData && productData.length >= 1 ? (
              <div className='space-y-4'>
                {productData.map((item: StoreProduct) => (
                  <div
                    className='bg-white justify-between flex items-center gap-4'
                    key={item.name}
                  >
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={400}
                      height={400}
                      className='w-40 h-40 aspect-square object-cover'
                    />
                    <div className='justify-between w-full space-y-2 md:flex items-center gap-4'>
                      <h1 className='lg:w-64  font-semibold text-base md:text-lg text-green-700/60  '>
                        {item.name}
                      </h1>
                      <h1 className='text-gray-400 text-sm'>${item.price}</h1>
                      <div className='justify-between  inline-flex items-center gap-4 lg:gap-20'>
                        <div className='flex items-center '>
                          <button
                            onClick={() =>
                              dispatch(
                                decreaseProduct({
                                  name: item.name,
                                  img: item.img,
                                  price: item.price,
                                  quantity: 1,
                                })
                              )
                            }
                            className='bg-gray-500 text-white p-1'
                          >
                            <FaMinus />
                          </button>
                          <span className=' py-1 px-2'>{item.quantity}</span>
                          <button
                            onClick={() =>
                              dispatch(
                                increaseProduct({
                                  name: item.name,
                                  img: item.img,
                                  price: item.price,
                                  quantity: 1,
                                })
                              )
                            }
                            className='bg-gray-500 text-white p-1'
                          >
                            <FaPlus />
                          </button>
                        </div>
                        <h1 className='text-semibold hidden md:block'>
                          ${item.price * item.quantity}
                        </h1>
                        <button
                          onClick={() => dispatch(removeItem(item.name))}
                          className='text-red-500 p-1 text-2xl pr-4'
                        >
                          <FaRegTimesCircle />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <hr />
                <div className='flex gap-4 flex-col-reverse md:flex-row  justify-between items-end'>
                  {' '}
                  <div>
                    <Link href='/shop'>
                      <button className='uppercase text-center w-full  tracking-widest  px-5 py-2 md:inline-flex bg-white text-black text-base'>
                        continue
                      </button>
                    </Link>
                  </div>
                  <div className=' w-full md:w-[250px] bg-white p-4'>
                    <div className='grid   text-black items-center '>
                      <h1 className='justify-between gap-2 flex'>
                        Subtotal:{' '}
                        <span className='text-gray-400'>${totalAmount}</span>
                      </h1>
                      <h1 className=' gap-2 flex justify-between'>
                        Tax:
                        <span className='text-gray-400'>$9</span>
                      </h1>
                      <h1 className='gap-2 flex justify-between'>
                        total:{' '}
                        <span className='text-gray-400'>
                          ${totalAmount + 9}
                        </span>
                      </h1>
                      <hr />
                      <button className='w-full uppercase text-sm md:text-base text-white mt-4 font-thin  p-3 bg-gray-600'>
                        process to checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className='grid -mt-5 text-center place-items-center'>
                <div>
                  <Image
                    src={empty}
                    alt='empty'
                    width={400}
                    height={400}
                    className='w-[400px] aspect-square h-[400px]'
                  />
                  <h1 className='text-white font-bold text-3xl'>
                    There is no items here!
                  </h1>
                  <p className='text-base text-gray-200 '>
                    Start adding your documents
                  </p>{' '}
                  <Link href='/shop'>
                    <button className='bg-white mt-5 hover:scale-[1.1] duration-700 inline-flex px-5 py-2 uppercase text-gray-600'>
                      go to shop
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
