import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/lib/SmoothScroll";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimateLayout from "./components/AnimateLayout";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
	title: "Deval Panchal Portfolio",
	description: "Software developer building FastAPI, .NET, and React Native products. Projects, publications, experience, and Virtus, a habit-tracking iOS app.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} ${mono.variable}`}>
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
