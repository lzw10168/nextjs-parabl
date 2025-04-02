"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row">
      {/* Left section with background image */}
      <div className="relative hidden w-full bg-gray-900 lg:block lg:w-1/2">
        <Image
          src="/login_page/left-background.png"
          alt="Mountain road view"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30">
          <div className="p-12">
            <div className="flex items-center">
              <Image
                src="/login_page/parabl_favicon.png"
                alt="Parabl Logo"
                width={32}
                height={32}
                className="mr-2"
              />
              <span className="text-2xl font-bold text-white">Parabl</span>
            </div>
          </div>
          <div className="absolute bottom-1/2 left-0 p-24">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white">
              Welcome Back
            </h1>
            <p className="text-xl text-white">
              Sign in to access your Parabl account and continue your journey with us.
            </p>
          </div>
        </div>  
      </div>

      {/* Right section with login form */}
      <div className="flex w-full items-center justify-center bg-white p-8 lg:w-1/2 rounded-l-3xl z-10" style={{
        marginLeft: "-20px"
      }}>
        <div className="w-full max-w-md">
          {/* Mobile logo - only visible on mobile */}
          <div className="mb-8 flex items-center lg:hidden">
            <Image
              src="/login_page/parabl_favicon.png"
              alt="Parabl Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            <span className="text-2xl font-bold text-gray-900">Parabl</span>
          </div>

          <h2 className="mb-8 text-left text-3xl font-bold text-gray-900">
            Sign In
          </h2>

          {/* Social login buttons */}
          <div className="mb-6 flex flex-row space-x-4">
            <button className="flex w-full items-center justify-center rounded-md border text-gray-900 border-gray-300 px-1 py-2 transition hover:bg-gray-50">
              <Image
                src="/login_page/google_logo.png"
                alt="Google"
                width={20}
                height={20}
                className="mr-3"
              />
              <span>Sign in with Google</span>
            </button>

            <button className="flex w-full items-center justify-center rounded-md border text-gray-900 border-gray-300 px-1 py-2 transition hover:bg-gray-50">
              <Image
                src="/login_page/facebook_logo.png"
                alt="Facebook"
                width={20}
                height={20}
                className="mr-3"
              />
              <span>Sign in with Facebook</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6 flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 flex-shrink text-gray-500">-OR-</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Login form */}
          <form className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border-0 border-b border-gray-300 px-0 py-3 focus:border-cyan-500 focus:outline-none focus:ring-0"
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border-0 border-b border-gray-300 px-0 py-3 focus:border-cyan-500 focus:outline-none focus:ring-0"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-cyan-500 hover:text-cyan-700">
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-cyan-500 px-4 py-3 font-medium text-white transition hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-left text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/login" className="font-medium text-cyan-500 hover:text-cyan-700">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 
