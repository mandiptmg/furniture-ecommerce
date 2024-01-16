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
          })
          .slice(0, 3)}
      </div>
      {/* <Image src='' alt="fre" ></Image> */}
    </div>
  )
}

export default Product