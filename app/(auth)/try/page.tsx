import React from 'react'
import GithubLogin from '../tryComponents/githubLogin'
import GoogleLogin from '../tryComponents/googleLogin'
import { Credentials } from '../components/credentials'

const page = () => {
  return (
    <div>
        <Credentials />
          <GithubLogin />
          <GoogleLogin />
    </div>
  )
}

export default page