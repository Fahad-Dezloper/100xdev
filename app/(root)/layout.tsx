import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import React from 'react'

const Layout = ({children}:{ children: React.ReactNode}) => {
  return (
      <main className='flex justify-between px-28 pt-6'>
          <LeftSidebar />
            <section className=''>
                      {children}
              </section>
          <RightSidebar />
    </main>
  )
}

export default Layout