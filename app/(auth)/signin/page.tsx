
import { sigInWithGitHub, sigInWithGoogle } from "../actions/auth.actions";
 
export default function SignIn() {
  return (
    <>
      <button
        onClick={sigInWithGoogle}
        type="submit">Signin with Google</button >

      <button
        onClick={sigInWithGitHub}
        type="submit">Signin with GitHub</button>

      {/* <form
      action={async (formData) => {
        "use server"
          await signIn("credentials", formData)
          redirect("/");
      }}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign In</button>
    </form> */}

      </>
  )
} 