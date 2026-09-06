"use client";

import Header from "@/components/latest/header";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/latest/footer";

export default function layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBlog = pathname === "/blog";

  return (
    <div className="w-screen font-body min-h-screen">
      <div className="max-w-2xl mx-auto p-4 space-y-4">
        <Header isBlog={isBlog} />
        <div>
          <div className="w-full flex font-regular items-center text-lg h-6">
            <Link
              href="/"
              className="font-bold text-gray-600 hover:text-black transition-all duration-100 hover:underline"
            >
              home
            </Link>
            /<h4 className="font-bold">blog</h4>
          </div>
          <h2 className="font-regular font-bold text-2xl">
            trying to keep track of my thoughts and learnings
          </h2>
        </div>
        {children}
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
