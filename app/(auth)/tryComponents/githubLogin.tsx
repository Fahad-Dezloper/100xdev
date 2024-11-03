import { Button } from '@/components/ui/button'
import React from 'react'
import { signIn } from '@/auth'

const GithubLogin = () => {
  return (
      <form action={async () => {
          "use server"
          await signIn("github")
      }}>
          <Button variant="outline" type='submit' className='shadow-sm dark:bg-white gap-2 w-fit h-10 text-base font-medium p-1 rounded-full' name="action" value="google">
            SignIn with Github
          </Button>
    </form>
  )
}

export default GithubLogin