import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { auth } from '@/auth';
import Preference from '@/app/components/Preference';
const Home = async () => {
  const session = await auth()
  return (
    <div className='px-5 h-screen '>
      <div className='flex flex-col gap-3 w-full'>
      <input type="text" className='border-gray-200 border outline-none px-4 py-2 rounded-md w-full' placeholder='Search Tech' />
        <Tabs defaultValue="Dev" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="Dev" className="w-full">Dev</TabsTrigger>
          <TabsTrigger value="Design" className="w-full">Design</TabsTrigger>
          <TabsTrigger value="AR/VR" className="w-full">AR/VR</TabsTrigger>
          <TabsTrigger value="AI" className="w-full">AI</TabsTrigger>
          <TabsTrigger value="Web3" className="w-full">Web3</TabsTrigger>
          <TabsTrigger value="Hackathon" className="w-full">Hackathon</TabsTrigger>
          <TabsTrigger value="Tweets" className="w-full">Tech Tweets</TabsTrigger>
        </TabsList>
        <TabsContent className="w-full" value="Dev">Show Devs Here</TabsContent>
        <TabsContent className="w-full" value="Design">Show Designs here.</TabsContent>
        <TabsContent className="w-full" value="AR/VR">Show AR/VR here.</TabsContent>
        <TabsContent className="w-full" value="AI">Show AI here.</TabsContent>
        <TabsContent className="w-full" value="Web3">Show Web3 here.</TabsContent>
        <TabsContent className="w-full" value="Hackathon">Show Hackathon here.</TabsContent>
        <TabsContent className="w-full" value="Tweets">Show Tweets here.</TabsContent>
        </Tabs>
      </div>
      {session && session?.user?.isNewUser && (
        <div className='absolute bottom-0 left-[43%]'>
               <div className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-600 rounded-t-md group">
               <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-primary-gradient rounded-full group-hover:w-56 group-hover:h-56"></span>
               <span className="absolute inset-0 w-full h-full -mt-1 rounded-t-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
               <span className="relative"><Preference /></span>
           </div>
        </div>
            )}
    </div>
  )
}

export default Home