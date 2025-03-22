// components/AnimateLayout.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface AnimateLayoutProps {
	children: ReactNode;
}

export default function AnimateLayout({ children }: AnimateLayoutProps) {
	const pathname = usePathname();
	const [renderKey, setRenderKey] = useState(pathname);

	// Handle route changes more explicitly
	useEffect(() => {
		setRenderKey(pathname);
	}, [pathname]);

	return (
		<AnimatePresence mode="wait">
			<motion.main
				key={renderKey}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					duration: 0.5,
					ease: "easeInOut",
				}}
				className="w-full relative"
			>
				{children}
			</motion.main>
		</AnimatePresence>
	);
}
