import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '@/components/ui/button'

const UserPrefrence = () => {
    return (
      <>
    <Drawer>
  <DrawerTrigger>Setup Your Account</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        Cancel
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
            </Drawer>
            </>
  )
}

export default UserPrefrence