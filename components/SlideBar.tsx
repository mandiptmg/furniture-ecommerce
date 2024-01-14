import Link from 'next/link'
import { FaTimes } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { NavbarProps } from '@/types'

interface ButtonProps {
  button: boolean
  setButton: (value: boolean) => void
}

const SlideBar = ({
  button,
  setButton,
  menuItems,
}: ButtonProps & { menuItems: NavbarProps[] }) => {
  const pathname = usePathname()

  const handleCloseButtonClick = () => {
    setButton(false)
  }

  return (
    <div
      className={`${
        button ? 'translate-x-0' : 'translate-x-full'
      } w-1/2 bg-white ease-linear duration-700 fixed top-0 z-10 h-screen right-0`}
    >
      <div>
        <div className='h-20 pr-5 duration-400 flex items-center justify-end'>
          <button
            onClick={handleCloseButtonClick}
            className='text-2xl grid place-items-center bg-red-500 p-2 rounded-full w-10 h-10 text-white'
          >
            <FaTimes />
          </button>
        </div>
        <div className='grid place-items-center'>
          <ul className='text-center uppercase font-bold text-gray-600 space-y-4 mt-10'>
            {menuItems.map((item: NavbarProps) => (
              <li key={item.name}>
                <Link
                  href={item.url}
                  className={`${
                    pathname === item.url ? 'underline text-gray-400' : ''
                  } hover:underline duration-700`}
                >
                  <div className='flex item-center gap-6'>
                    <h1>{item.name}</h1>
                    <span className='text-2xl'>{item.icon}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SlideBar
