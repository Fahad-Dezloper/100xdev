"use client"
import React, { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import SocialsignIn from '../components/socials';
import { signInWithCredentials } from '../actions/authActions';

function Page() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault(); // Prevent default form submission

    const formData = {
      email,
      password,
    };

    await signInWithCredentials(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Card with glass effect */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 transition-all duration-500 hover:shadow-2xl">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <Mail className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
              {isLogin ? 'Welcome back' : 'Create account'}
            </h2>
            <p className="text-gray-600 mt-1">
              {isLogin ? 'Sign in to your account' : 'Sign up for a new account'}
            </p>
          </div>

          {/* {/* Social Login Buttons} */}
          <SocialsignIn />

          {/* Login Form */}
          {/* onSubmit={handleSubmit} */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="Enter your email"
                  required
                />
                <Mail className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="Enter your password"
                  required
                />
                <Lock className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-end">
                <button type="button" className="text-sm text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium py-3 px-4 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-[1.02]"
            >
              <span>{isLogin ? 'Sign in' : 'Create account'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Toggle Login/Signup */}
          <p className="mt-6 text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-300"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;