import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import { auth } from '@/auth';
import React from 'react'

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

    console.log(session);
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