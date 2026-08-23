import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE_URL } from "@/lib/site";
import "@/index.css";

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: "Somto",
		template: "%s — Somto",
	},
	description: "Connect with Francis Somtochukwu",
	icons: {
		icon: "/icon.png",
	},
	openGraph: {
		title: "Who is Somto?",
		description: "Connect with Francis Somtochukwu",
		url: SITE_URL,
		type: "website",
		siteName: "Somto",
	},
	twitter: {
		card: "summary",
		title: "Who is Somto?",
		description: "Connect with Francis Somtochukwu",
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
