"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";

export function FooterConditional() {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login" || pathname === "/login/signin";

  if (isLoginPage) {
    return null;
  }

  return (
    <>
      <Footer />
    </>
  );
} 
