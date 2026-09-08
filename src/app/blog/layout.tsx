"use client";

import Header from "@/components/latest/header";
import React from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/latest/footer";

export default function layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBlog = pathname.startsWith("/blog");

  return (
    <div className="w-screen font-body min-h-screen">
      <div className="max-w-2xl mx-auto p-4 space-y-4">
        <Header isBlog={isBlog} />
        {children}
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
