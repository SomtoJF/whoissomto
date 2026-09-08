import type { Metadata } from "next";
import type { ReactNode } from "react";
import LenisProvider from "@/components/LenisProvider";
import { SITE_URL } from "@/lib/site";
import "@/index.css";
import previewImage from "../../public/footer_image.jpeg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Somtochukwu Francis",
    template: "%s — Somto",
  },
  description: "an introduction",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Somtochukwu Francis",
    description: "an introduction",
    url: SITE_URL,
    type: "website",
    siteName: "Somto",
    images: [{ url: previewImage.src }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Somtochukwu Francis",
    description: "an introduction",
    site: "@somtochukwu.com",
    creator: "@somtochukwu",
    images: [{ url: previewImage.src }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
