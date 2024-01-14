import Image from 'next/image'
const About = () => {
  return (
    <div className='bg-[#6D9281] -mt-20  overflow-hidden '>
      <div className='grid pt-20 place-items-center h-[70vh] mx-auto w-[90vw] md:container lg:grid-cols-2 items-center'>
        <div className='space-y-4'>
          <h1 className='font-bold text-white text-2xl sm:text-3xl md:text-5xl'>
            About
          </h1>
          <p className='text-sm text-gray-300 md:text-base '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            veritatis tempora repellendus eaque possimus enim corrupti suscipit
            officia et vero.
          </p>
          <div className='text-lg flex gap-4 items-center font-semibold'>
            <button className='rounded-full border border-gray-200 px-3 py-2 text-black/70 shadow-xl capitalize bg-gray-200'>
              shop now
            </button>
            <button className='rounded-full px-3 py-2 text-white border border-white/50 shadow-xl hover:border-white   capitalize bg-transparent '>
              Explore
            </button>
          </div>
        </div>{' '}
        <div className='w-full grid place-items-center '>
          <Image
            src='/about.png'
            alt='lurury sofa'
            width={300}
            height={250}
            className='object-contain '
          />
        </div>
      </div>
    </div>
  )
}

export default About
