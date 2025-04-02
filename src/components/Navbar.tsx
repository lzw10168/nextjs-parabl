"use client";
import Link from "next/link";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login" || pathname === "/login/signin";

  if (isLoginPage) {
    return null;
  }

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto lg:justify-between xl:px-1 py-2" style={{ height: "54px" }}>
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-gray-900 dark:text-gray-100">
            <Image 
              src="/logo.png" 
              alt="Parabl Logo" 
              width={32} 
              height={32} 
              className="mr-2"
            />
            <span className="font-bold">Parabl</span>
          </span>
        </Link>

        {/* Contact us button */}
        <div className="hidden lg:flex">
          <Link href="/contact" className="px-4 py-1 text-white bg-blue-900 rounded-2xl">
            contact us
          </Link>
        </div>
                
        {/* Mobile menu button */}
        <Disclosure>
          {({ open }) => (
            <>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-blue-500 focus:text-blue-500 focus:outline-none dark:text-gray-300">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <Link href="/contact" className="w-full px-4 py-2 text-center text-white bg-blue-900 rounded-md">         
                    contact us
                  </Link>
                </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </div>
  );
}

