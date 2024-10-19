import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Home = () => {
  return (
    <div className='px-5'>
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
    </div>
  )
}

export default Home