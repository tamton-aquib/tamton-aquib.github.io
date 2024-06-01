import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
// import NavBar from "@/components/NavBar";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Tamton Aquib",
	description: "personal website",

	icons: {
		icon: "/favicon.ico"
	},

	openGraph: {
		title: "Tamton Aquib",
		description: "personal website",
		url: "https://tamton.dev",
		locale: "en_US",
		type: "website"
	},

	twitter: {
		card: "summary_large_image",
		title: "Tamton Aquib",
		description: "personal website"
	},

	category: "technology"
};

export default function RootLayout({
	children,
}: Readonly<{
		children: React.ReactNode;
	}>) {
	return (
		<html lang="en">
			<body className={`min-h-screen flex flex-col justify-center items-center mt-[-5%] ${nunito.className}`}>
				{children}
			</body>
		</html>
	);
}
