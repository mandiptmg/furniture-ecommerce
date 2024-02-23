'use client'

import { FaBars } from 'react-icons/fa'

import { GiShoppingCart } from 'react-icons/gi'

const menuItems: NavbarProps[] = [
  { name: 'Home', url: '/' },
  { name: 'Shop', url: '/shop' },
  { name: 'About us', url: '/about-us' },
  { name: 'Services', url: '/services' },
  { name: 'Blog', url: '/blog' },
  { name: 'Contact us', url: '/contact-us' },
]

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { SlideBar } from '.'
import { NavbarProps, StoreProduct, StateProps } from '@/types'
import AuthComponent from './AuthComponent'
import { useSelector } from 'react-redux'

const Header = () => {
  const { productData } = useSelector((state: StateProps) => state.next)
  const pathname = usePathname()
  const [button, setButton] = useState(false)

  return (
    <div className=''>
      <div className='flex md:container mx-auto w-[90vw] h-20 items-center justify-between'>
        <div>
          <Link href='/'>
            <h1 className='md:text-2xl font-bold text-white  text-lg'>
              FurniVogue
            </h1>
          </Link>
        </div>
        <div className='lg:block hidden'>
          <ul className='flex items-center font-semibold uppercase text-white gap-6'>
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.url}>
                  <div className='flex item-center gap-6'>
                    <h1
                      className={`${
                        pathname === item.url ? 'p-1  bg-black/50' : ''
                      } hover:bg-black/50  p-1 w-full duration-700  `}
                    >
                      {' '}
                      {item.name}
                    </h1>{' '}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='text-2xl flex items-center text-gray-300 gap-6'>
          <div>
            <AuthComponent />
          </div>
          <div className='relative'>
            <Link href='/cart'>
              <GiShoppingCart />
            </Link>
            <span className='bg-white text-black/80 w-4 h-4 rounded-full text-center text-sm absolute -top-2 -right-2'>
              {productData
                ? productData.reduce(
                    (total: number, product: StoreProduct) =>
                      total + product.quantity,
                    0
                  )
                : 0}
            </span>
          </div>
        </div>
        <div className='lg:hidden'>
          <button onClick={() => setButton(true)} className='text-xl text-white '>
            <FaBars />
          </button>
        </div>
      </div>

      <div>
        <SlideBar
          setButton={(booloean) => setButton(booloean)}
          button={button}
          menuItems={menuItems}
        />
      </div>
    </div>
  )
}

export default Header
