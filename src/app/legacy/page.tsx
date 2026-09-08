"use client";

import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("../../home/HomePage"), {
  ssr: false,
});

export default function HomePageLoader() {
  return <HomePage />;
}
