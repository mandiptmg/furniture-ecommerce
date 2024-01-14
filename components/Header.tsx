'use client'

import { FaRegUser, FaBars } from 'react-icons/fa'
import { GiShoppingCart } from 'react-icons/gi'

const menuItems = [
  { name: 'Home', url: '/' },
  { name: 'Shop', url: '/shop' },
  { name: 'About us', url: '/about-us' },
  { name: 'Services', url: '/services' },
  { name: 'Blog', url: '/blog' },
  { name: 'Contact us', url: '/contact-us' },
  { icon: <FaRegUser />, url: '/login' },
  { icon: <GiShoppingCart />, url: '/cart' },
]

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { SlideBar } from '.'

const Header = () => {
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
          <ul className='flex items-center font-semibold uppercase text-gray-300 gap-6'>
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.url}
                  className={`${
                    pathname === item.url ? 'underline text-white' : ''
                  } hover:underline duration-700  `}
                >
                  <div className='flex item-center gap-6'>
                    <h1> {item.name}</h1>{' '}
                    <span className='text-2xl'>{item.icon}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='lg:hidden'>
          <button onClick={() => setButton(true)} className='text-xl '>
            <FaBars />
          </button>
        </div>
      </div>
      <div>
        <SlideBar
          setButton={() => setButton(false)}
          button={button}
          menuItems={menuItems}
        />
      </div>
    </div>
  )
}

export default Header
