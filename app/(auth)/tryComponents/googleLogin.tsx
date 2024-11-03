import { Button } from '@/components/ui/button'
import React from 'react'
import { signIn } from '@/auth'

const GoogleLogin = () => {
  return (
      <form action={async () => {
          "use server"
          await signIn("google")
      }}>
          <Button variant="outline" type='submit' className='shadow-sm dark:bg-white gap-2 w-fit h-10 text-base font-medium p-1 rounded-full' name="action" value="google">
            Continue with Google
          </Button>
    </form>
  )
}

export default GoogleLogin