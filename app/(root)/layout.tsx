import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import React from 'react'

const Layout = ({children}:{ children: React.ReactNode}) => {
  return (
      <main className='flex px-28 pt-6'>
          <LeftSidebar />
            <section className='w-[48vw]'>
                      {children}
              </section>
          <RightSidebar />
    </main>
  )
}

export default Layout