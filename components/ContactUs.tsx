import { MdLocationOn, MdEmail,MdPhone } from 'react-icons/md'
import { ContactForm } from '.'

const ContactUs = () => {
  return (
    <div className='pt-20 md:container w-[90vw] mx-auto py-40'>
      <div className='max-w-3xl mx-auto '>
        <div className='grid  items-center gap-4 md:grid-cols-3'>
          <div className='flex items-center gap-4'>
            <span className='p-4 ligreen rounded-lg text-2xl'>
              <MdLocationOn className='text-white' />
            </span>
            <p className='text-gray-400 text-base '>Hetauda-3, Nepal</p>
          </div>
          <div className='flex items-center gap-4'>
            <span className='p-4 ligreen rounded-lg text-2xl'>
              <MdEmail className='text-white' />
            </span>
            <p className='text-gray-400 text-base '>info@yourdomain.com</p>
          </div>
          <div className='flex items-center gap-4'>
            <span className='p-4 ligreen rounded-lg text-2xl'>
              <MdPhone className='text-white' />
            </span>
            <p className='text-gray-400 text-base '>+1 294 3925 3939</p>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactUs