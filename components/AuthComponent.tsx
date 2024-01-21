// components/AuthComponent.tsx
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import { useState } from 'react'
import { FaRegUser} from 'react-icons/fa'
function AuthComponent() {
  const { data: session } = useSession()
  const [active,setActive] = useState(false)

  if (session) {
    const Imagep = session.user?.image || 'User'
    const Username = session.user?.name ||'User'
    return (
      <>
        <div className='relative'>
          <Image
            src={Imagep}
            onClick={() => setActive(true)}
            alt={Username}
            width={30}
            height={30}
            className='rounded-full cursor-pointer '
          />
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className={`absolute -bottom-12 ${active ? '' :'hidden'}  left-1/2 h-auto w-[70px] p-2 bg-white rounded-lg text-black`}
          >
            <button onClick={() => signOut()}>
              <h1 className='text-xs text-center capitalize font-semibold'>
                log Out
              </h1>
            </button>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>

        <button title='signIn' onClick={() => signIn()}>
         <FaRegUser/>
        </button>
       
      </>
    )
  }
}

export default AuthComponent
