import Image from "next/image"
import { leatherChairs } from "@/utils"
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

import { LeatherChairProps } from "@/types";

const Product = () => {
  return (
    <div className='py-20 md:container mx-auto w-[90vw] grid gap-4 md:grid-cols-[1fr,3fr]'>
      <div className='space-y-4'>
        <h1 className="text-2xl md:text-3xl  font-bold ">Crafted with excellent material.</h1>
        <p className="text-sm md:text-base text-gray-400  ">
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <button className='capitalize rounded-full px-5 hover:text-black hover:bg-white border border-black shadow-lg font-semibold py-3 bg-black text-white'>
          <Link href='/shop'>
            explore
          </Link>
        </button>
      </div>
      <div className='grid place-items-center sm:grid-cols-2 md:grid-cols-3 items-start gap-7'>
        {leatherChairs
          .map((item: LeatherChairProps) => {
            const { img, price, name } = item
            return (
              <article key={name} className='relative group'>
                <Image
                  src={img}
                  alt={name}
                  width={300}
                  height={200}
                  className='aspect-square group-hover:-mt-4 rounded-t-lg duration-700 object-cover'
                />
                <div className='text-center relative  grid place-items-center mt-4 space-y-2'>
                  <h1 className='text-base md:text-lg '>{name}</h1>
                  <h1 className='font-bold '>${price}</h1>

                  <div className='opacity-0 group-hover:opacity-100'>
                    <div className='bg-gray-400/50 absolute -top-36  duration-700  left-0 w-full grid items-end h-0 group-hover:h-64 rounded-lg place-items-center'>
                      <button className='w-10 h-10 rounded-full bg-black absolute -bottom-4 text-white grid place-items-center'>
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            )
          })
          .slice(0, 3)}
      </div>
      {/* <Image src='' alt="fre" ></Image> */}
    </div>
  )
}

export default Product