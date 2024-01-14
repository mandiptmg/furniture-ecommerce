'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import '../app/globals.css'

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from 'swiper/modules'

import React from 'react'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div className='max-w-6xl py-20 space-y-10 text-center mx-auto'>
      <h1 className='font-bold md:text-3xl text-2xl'>Testimonials</h1>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide>
          <article className='pb-20 px-24 md:px-48'>
            <div className='grid place-items-center space-y-4'>
              <p className='text-gray-400 md:text-base text-sm'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem nihil sequi dolorem sit quam inventore
                reprehenderit aspernatur ipsa, quas incidunt accusamus? Ducimus
                aliquam quas minus earum laudantium quos quam rem accusamus,
                esse vero dolorum quasi, voluptatem, iste necessitatibus
                possimus ex.
              </p>

              <Image
                src='https://i.pinimg.com/564x/34/29/25/3429258be8c783cae613285cbe745167.jpg'
                alt='girl'
                width={70}
                height={70}
                className='rounded-full  aspect-square object-cover object-top'
              />
              <h1 className='font-semibold text-base capitalize'>Lisa swipe</h1>
              <p className='text-gray-400 text-sm'>CEO, Co-Founder, XYZ Inc.</p>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className='pb-20 px-24 md:px-48'>
            <div className='grid place-items-center space-y-4'>
              <p className='text-gray-400 text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem nihil sequi dolorem sit quam inventore
                reprehenderit aspernatur ipsa, quas incidunt accusamus? Ducimus
                aliquam quas minus earum laudantium quos quam rem accusamus,
                esse vero dolorum quasi, voluptatem, iste necessitatibus
                possimus ex.
              </p>

              <Image
                src='https://i.pinimg.com/564x/6c/3b/03/6c3b0369e86c1689c711a403978bdba6.jpg'
                alt='lisa'
                width={70}
                height={70}
                className='rounded-full  aspect-square object-cover '
              />
              <h1 className='font-semibold text-base capitalize'>
                Lalisa Manobal
              </h1>
              <p className='text-gray-400 text-sm'>CEO, Co-Founder, XYZ Inc.</p>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className='pb-20 px-24 md:px-48'>
            <div className='grid place-items-center space-y-4'>
              <p className='text-gray-400 text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem nihil sequi dolorem sit quam inventore
                reprehenderit aspernatur ipsa, quas incidunt accusamus? Ducimus
                aliquam quas minus earum laudantium quos quam rem accusamus,
                esse vero dolorum quasi, voluptatem, iste necessitatibus
                possimus ex.
              </p>

              <Image
                src='https://i.pinimg.com/564x/0f/c3/b1/0fc3b145cf9d81f0fd6f2742d49a59f4.jpg'
                alt='rose'
                width={70}
                height={70}
                className='rounded-full  aspect-square object-cover '
              />
              <h1 className='font-semibold text-base capitalize'>
                Roseanne Park
              </h1>
              <p className='text-gray-400 text-sm'>CEO, Co-Founder, XYZ Inc.</p>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
export default Testimonials
