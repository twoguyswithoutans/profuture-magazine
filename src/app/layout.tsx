import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Profuture Dergisi",
	description: "Profuture teknoloji mekanizmaları değişikliği alanlarında özgün akademik çalışmalar içeren yeni sayıya şimdi erişin."
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
