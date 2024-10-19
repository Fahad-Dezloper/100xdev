import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const RightSidebar = () => {
  return (
    <div className='w-[20vw] h-screen '>
      <input type="text" className='border-gray-200 border outline-none px-4 py-2 rounded-md w-full' placeholder='Search Devs' />

      <div className='w-full pt-3 flex flex-col gap-3 justify-center items-center h-[15rem] overflow-hidden rounded-md border mt-4'>
        <h1 className='font-spaceGrotesk px-4 text-lg font-semibold'>Top Project</h1>
        <div className='w-full h-full bg-white rounded-t-md bg-primary-gradient'>
        </div>
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