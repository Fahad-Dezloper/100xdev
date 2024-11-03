import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const RightSidebar = () => {
  return (
    <div className='w-[20vw] h-screen '>
      <input type="text" className='border-gray-200 border outline-none px-4 py-2 rounded-md w-full' placeholder='Search Devs' />

      <div className='w-full flex flex-col gap-3 justify-center bg-primary-gradient items-center h-[13rem] overflow-hidden rounded-md border mt-4'>
        <div className='w-full h-full rounded-t-md'>
        </div>
        <h1 className='font-spaceGrotesk px-6 py-1 rounded-t-2xl bg-white text-lg font-semibold'>Top Project</h1>
      </div>
        <div className='mt-6 w-full h-[15rem] flex justify-center'>
          <Tabs defaultValue="Discuss" className="w-full">
          <TabsList className="w-full">
              <TabsTrigger value="Discuss" className="w-full">Discuss</TabsTrigger>
              <TabsTrigger value="Debug" className="w-full">Debug</TabsTrigger>
            </TabsList>
            <TabsContent value="Discuss" className="w-full">Discuss about trending tech topics</TabsContent>
            <TabsContent value="Debug" className='w-full'>Debug Problems</TabsContent>
          </Tabs>
        </div>
    </div>
  )
}

export default RightSidebar