"use client"
import React from 'react';
import { BriefcaseBusiness, CodeXml, HomeIcon, Inbox, Lock, LockOpen, SearchIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Left Sidebar Component

const navItems = [
  { href: '/', label: 'Home', icon: <HomeIcon className="mr-2 h-4 w-4" /> },
  { href: '/projects', label: 'Projects', icon: <CodeXml className="mr-2 h-4 w-4" /> },
  { href: '/inbox', label: 'Inbox', icon: <Inbox className="mr-2 h-4 w-4" /> },
  { href: '/hire', label: 'Hire 100x', icon: <BriefcaseBusiness className="mr-2 h-4 w-4" /> },
  { href: '/devs', label: 'Search Devs', icon: <SearchIcon className="mr-2 h-4 w-4" /> },
  { href: '/unsolved', label: 'Unsolved Problems', icon: <Lock className="mr-2 h-4 w-4" /> },
  { href: '/solved', label: 'Solved Problems', icon: <LockOpen className="mr-2 h-4 w-4" /> },
];

const LeftSidebar = () => {
  const pathname = usePathname();

  return (
    <div className='w-[17vw] h-screen border-r'>
      <h1 className='font-bold text-2xl font-spaceGrotesk'>Dev <span className='text-primary'>Stack</span></h1>

      <nav className='flex flex-col mt-8 font-inter text-lg'>
      {navItems.map(({ href, label, icon }) => (
        <Link
          key={href} // Use the href as a unique key
          href={href}
          className={`w-full flex items-center justify-start mb-2 hover:bg-[#caadff] rounded-l-sm duration-200 ease-in-out px-2 py-2 ${pathname === href ? 'bg-[#caadff]' : ''}`}
        >
          {icon}
          {label}
        </Link>
      ))}
    </nav>
    </div>
  );
}

export default LeftSidebar;
