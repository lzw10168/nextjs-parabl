"use client";

import Link from 'next/link';
import { usePathname } from "next/navigation";
import Image from 'next/image';
export default function Footer() {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login" || pathname === "/login/signin";

  if (isLoginPage) {
    return null;
  }

  return (
    <div className="w-full flex justify-center py-2">
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
    </div>
  );
} 

