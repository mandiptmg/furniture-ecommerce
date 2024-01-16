import { employee } from '@/utils'
import { EmployeeProps } from '@/types'
import Image from 'next/image'

const Team = () => {
  return (
    <div className='py-20 '>
      <div className='md:container w-[90vw] mx-auto space-y-4'>
        <h1 className='text-3xl font-bold capitalize md:text-4xl '>our team</h1>
        <div className='grid place-items-center grid-cols-2 lg:grid-cols-4 gap-4 items-start'>
          {employee.map((emp: EmployeeProps) => {
            const { name, position, description, image } = emp
            return (
              <article key={name} className='aspect-square grid place-items-center max-w-xs mx-auto '>
                <Image
                  src={image}
                  alt={name}
                  width={300}
                  height={250}
                  className='aspect-square object-cover object-top rounded-t-lg '
                />
                <div className='space-y-4 pt-4 text-sm text-gray-400 px-4'>
                  <div>
                    <span className='text-lg text-black pt-4 cursor-pointer md:text-2xl font-semibold underline hover:no-underline'>
                      {name}
                    </span>
                  </div>
                  <h2>{position}</h2>
                  <p>{description}</p>
                  <button className='text-lg duration-700 rounded-lg ligreen  text-white px-4 py-2 hover:scale-105'>
                    Learn more
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Team
