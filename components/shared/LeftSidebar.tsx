"use client"
import React from 'react';
import { BriefcaseBusiness, CodeXml, HomeIcon, Inbox, Lock, LockOpen, SearchIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Left Sidebar Component
const LeftSidebar = () => {
  const pathname = usePathname();

  return (
    <div className='w-[17vw] h-screen border-r'>
      <h1 className='font-bold text-2xl font-spaceGrotesk'>Dev <span className='text-primary'>Stack</span></h1>
      
      <nav className='flex flex-col mt-8 font-inter text-lg'>
        <Link href="/" className={`w-full flex items-center justify-start mb-2 hover:bg-[#caadff] px-2 py-2 rounded-l-sm ${pathname === '/' ? 'bg-[#caadff]' : ''}`}>
          <HomeIcon className="mr-2 h-4 w-4" />
          Home
        </Link>
        <Link href="/projects" className={`w-full flex items-center justify-start mb-2 hover:bg-[#caadff] rounded-l-sm duration-200 ease-in-out px-2 py-2 ${pathname === '/projects' ? 'bg-[#caadff]' : ''}`}>
          <CodeXml className="mr-2 h-4 w-4" />
          Projects
        </Link>
        <Link href="/inbox" className={`w-full flex items-center justify-start mb-2 hover:bg-[#caadff] rounded-l-sm duration-200 ease-in-out px-2 py-2 ${pathname === '/inbox' ? 'bg-[#caadff]' : ''}`}>
          <Inbox className="mr-2 h-4 w-4" />
          Inbox
        </Link>
        <Link href="/hire" className={`w-full flex items-center justify-start mb-2 hover:bg-[#caadff] rounded-l-sm duration-200 ease-in-out px-2 py-2 ${pathname === '/hire' ? 'bg-[#caadff]' : ''}`}>
          <BriefcaseBusiness className="mr-2 h-4 w-4" />
          Hire 100x
        </Link>
        <Link href="/devs" className={`w-full flex items-center justify-start mb-2 hover:bg-[#caadff] rounded-l-sm duration-200 ease-in-out px-2 py-2 ${pathname === '/search' ? 'bg-[#caadff]' : ''}`}>
          <SearchIcon className="mr-2 h-4 w-4" />
          Search Devs
        </Link>
        <Link href="/unsolved" className={`w-full flex items-center justify-start mb-2 hover:bg-[#caadff] rounded-l-sm duration-200 ease-in-out px-2 py-2 ${pathname === '/unsolved' ? 'bg-[#caadff]' : ''}`}>
          <Lock className="mr-2 h-4 w-4" />
          Unsolved Problems
        </Link>
        <Link href="/solved" className={`w-full flex items-center justify-start mb-2 hover:bg-[#caadff] rounded-l-sm duration-200 ease-in-out px-2 py-2 ${pathname === '/solved' ? 'bg-[#caadff]' : ''}`}>
          <LockOpen className="mr-2 h-4 w-4" />
          Solved Problems
        </Link>
      </nav>
    </div>
  );
}

export default LeftSidebar;
