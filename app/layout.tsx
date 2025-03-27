import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "@/lib/SmoothScroll";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimateLayout from "./components/AnimateLayout";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Deval Panchal Portfolio",
	description: "A showcase of projects, skills, and experience by Deval Panchal",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
                <SmoothScroll />
				<Analytics />
				<Navbar />
				<AnimateLayout>
					{children}
				</AnimateLayout>
				<Footer />
            </body>
		</html>
	);
}
