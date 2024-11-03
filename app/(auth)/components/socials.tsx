"use client"; // Ensure this component is treated as a Client Component
import { signInWithGoogle, signInWithGithub } from "../actions/authActions"; // Adjust the path as necessary
import { Chrome, Github } from "lucide-react";

export default function SocialsignIn() {
  return (
    <div className="space-y-3 mb-6">
      {/* Google Sign-in Form */}
      <form action={async () => {
          // event.preventDefault(); // Prevent the default form submission
          await signInWithGoogle(); // Call the server action
      }}>
        <button
          type="submit"
          className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg border border-gray-300 shadow-sm transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-[1.02]"
        >
          <Chrome className="w-5 h-5 text-red-500" />
          <span>Continue with Google</span>
        </button>
      </form>

      {/* GitHub Sign-in Form */}
      <form action={async () => {
          // event.preventDefault(); // Prevent the default form submission
          await signInWithGithub(); // Call the server action
      }}>
        <button
          type="submit"
          className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-lg shadow-sm transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-[1.02]"
        >
          <Github className="w-5 h-5" />
          <span>Continue with GitHub</span>
        </button>
      </form>
    </div>
  );
}
