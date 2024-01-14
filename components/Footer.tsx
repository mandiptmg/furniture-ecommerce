'use client';

import { IoMailOutline } from 'react-icons/io5'
import { BsSend } from "react-icons/bs";
import {FaLinkedin,FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'
import Image from 'next/image';
import { NavbarProps } from '@/types';
import Link from 'next/link';

 const menuItems = [
  { name: 'Shop', url: '/shop' },
  { name: 'About us', url: '/about-us' },
  { name: 'Services', url: '/services' },
  { name: 'Blog', url: '/blog' },
  { name: 'Contact us', url: '/contact-us' },
]
const Footer = () => {
  return (
    <div className='h-screen text-gray-500 w-full relative bg-white'>
      <div className='md:container mx-auto w-[90vw] py-20 space-y-4'>
        <div className='flex items-center justify-between'>
          <div className='pt-40 lg:pt-0'>
            <div className='flex items-center  gap-4'>
              <span className='text-gray-300 text-2xl'>
                <IoMailOutline />
              </span>{' '}
              <h1 className='text-lg font-semibold '>
                {' '}
                Subscribe to Newsletter
              </h1>
            </div>
            <div className='mt-4'>
              <div>
                <form action=''>
                  <div className='md:flex items-center grid gap-4'>
                    <input
                      type='text'
                      className='outline-black border border-gray-400 px-2 py-3 rounded-lg'
                      placeholder='Enter your name'
                    />
                    <div className='flex items-center gap-4'>
                      <input
                        type='email'
                        className='outline-black border border-gray-400 px-2 py-3 rounded-lg'
                        placeholder='Enter your email address'
                      />
                      <button
                        className='text-white text-xl bg-[#6D9281] rounded-lg p-4'
                        type='submit'
                      >
                        <BsSend />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>
            <Image
              src='/footer.png'
              width={400}
              height={325}
              alt='footer'
              className='object-contain absolute  right-20 -top-52'
            />
          </div>
        </div>
         <h1 className='md:text-2xl text-lg font-semibold '>
              
              FurniVogue
            </h1>
        <div className='grid pt-16 gap-6 items-start md:grid-cols-[1.5fr,2fr]'>
          <div className=' space-y-4'>
           
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio id
              ut repellendus quis corrupti odit fuga quam. Quisquam quo
              inventore minima accusantium alias doloremque eum.
            </p>
            <ul className='flex text-lg texgreen items-center gap-4'>
              <li>
                <button
                  onClick={() => window.open('https://www.facebook.com/')}
                >
                  <FaFacebook />
                </button>
              </li>
              <li>
                <button onClick={() => window.open('https://www.twitter.com/')}>
                  <FaTwitter />
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.open('https://www.instagram.com/')}
                >
                  <FaInstagram />
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.open('https://www.linkedin.com/')}
                >
                  <FaLinkedin />
                </button>
              </li>
            </ul>
          </div>
          <div className='grid  items-start grid-cols-2 text-center gap-6 md:grid-cols-4'>
            <ul className='space-y-4'>
              {menuItems.map((item: NavbarProps) => (
                <li key={item.name}>
                  <Link className='hover:texgreen' href={item.url}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className='space-y-4'>
              <li>Support</li>
              <li>Knowledge base</li>
              <li>Live chat</li>
            </ul>
            <ul className='space-y-4'>
              <li>Jobs</li>
              <li>Our team</li>
              <li>Leadership</li>
              <li>Privacy Policy</li>
            </ul>
            <ul className='space-y-4'>
              <li>Nordic Chair</li>
              <li>Kruzo Aero</li>
              <li>Ergonomic Chair</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p className='text-center py-8 text-sm'>
        © {new Date().getFullYear()} created by Mandip Tamang. All rights reserved.
      </p>
    </div>
  )
}

export default Footer