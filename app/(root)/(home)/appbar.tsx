import UserPrefrence from '@/app/components/UserPrefrence'
import { auth, signOut } from '@/auth'
import React from 'react'

const Appbar = async () => {
  const session = await auth();
  return (
      <div className="p-2 bg-primary-gradient text-black font-semibold text-lg flex gap-2">
          {session && session?.user ? (
                <UserPrefrence />
            ) : "old user"}
          <div className='ml-auto'>
              {session && session.user ? (
                  <div className='flex gap-2 items-center'>
                      <p>{session.user.name}</p>
                      <form action={async () => {
                          "use server"
                          await signOut()
                      }}>
                          <button type="submit" className='p-2 text-base bg-gray-200 rounded-md'>Sign Out</button>
                      </form>
                  </div>
              ) :
                    <button type="submit" className='p-2 text-base bg-gray-200 rounded-md'>Sign in</button>
              }
          </div>
      </div>
  )
}

export default Appbar