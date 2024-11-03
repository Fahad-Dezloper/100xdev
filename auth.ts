
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { ZodError } from "zod"
import { signInSchema } from "./lib/zod"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google, Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
    },
    authorize: async (credentials) => {
        try {
          const user = null
 
          const { email, password } = await signInSchema.parseAsync(credentials)
 
          // logic to salt and hash password
          // const pwHash = saltAndHashPassword(password)
 
          // logic to verify if the user exists
          // user = await getUserFromDb(email, pwHash)
 
          if (!user) {
            throw new Error("Invalid credentials.")
          }
 
          // return JSON object with the user data
          return user
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null
          }
        }
      },
    }),],
})