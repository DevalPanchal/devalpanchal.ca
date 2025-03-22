"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);
	const pathname = usePathname();

	// Close mobile menu when window resizes to desktop view
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Modified to ensure mobile menu state persists when clicking links
	const handleMobileMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const getLinkClasses = (href: any) =>
		`hover:text-white font-semibold transition-colors ${
			pathname === href ? "text-white" : "text-gray-500"
		}`;

	return (
		<nav className="fixed w-full bg-black backdrop-blur-sm z-50 overflow-hidden">
			<div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">{/* Logo could go here */}</div>

					{/* Desktop Navigation - Added responsive breakpoints */}
					<div className="hidden md:flex items-center md:space-x-2 lg:space-x-6">
						<Link href="/" className={getLinkClasses("/")}>
							Home
						</Link>
						<Link href="/resume" className={getLinkClasses("/resume")}>
							Resume
						</Link>
						<Link href="/contact" className={getLinkClasses("/contact")}>
							Contact
						</Link>
					</div>

					{/* Mobile menu button - Fixed icon display */}
					<div className="md:hidden flex items-center">
						<button
							onClick={handleMobileMenuToggle}
							className="text-white hover:text-primary transition-colors p-1"
							aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						>
							{isMenuOpen ? (
								<X className="w-5 h-5" />
							) : (
								<Menu className="w-5 h-5" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			<div
				className={`md:hidden bg-black border-t overflow-hidden transition-all duration-300 ease-in-out ${
					isMenuOpen ? "max-h-60" : "max-h-0"
				}`}
			>
				<div className="px-2 pt-2 pb-3 space-y-1">
					<Link
						href="/"
						onClick={() => setIsMenuOpen(false)}
						className="block px-3 py-2 text-white hover:bg-secondary rounded-md transition-colors"
					>
						Home
					</Link>
					<Link
						href="/resume"
						onClick={() => setIsMenuOpen(false)}
						className="block px-3 py-2 text-white hover:bg-secondary rounded-md transition-colors"
					>
						Resume
					</Link>
					<Link
						href="/contact"
						onClick={() => setIsMenuOpen(false)}
						className="block px-3 py-2 text-white hover:bg-secondary rounded-md transition-colors"
					>
						Contact
					</Link>
				</div>
			</div>
		</nav>
	);
}
