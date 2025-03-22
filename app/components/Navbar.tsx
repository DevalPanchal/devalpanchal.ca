"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";


export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);

	const pathname = usePathname();

	const handleWorkClick = (e: React.MouseEvent) => {
		e.preventDefault();
		setIsWorkDropdownOpen(!isWorkDropdownOpen);
	};

	const getLinkClasses = (href: string) => `hover:text-white font-semibold transition-colors ${pathname === href ? "text-white" : "text-gray-500"}`;

	return (
		<nav className="fixed w-full bg-black backdrop-blur-sm z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center"></div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						<Link href="/" className={getLinkClasses("/")}>Home</Link>
						<Link href="/resume" className={getLinkClasses("/resume")}>Resume</Link>
						{/* <div className="relative">
							<button 
								onClick={handleWorkClick} 
								className={`flex items-center space-x-1 hover:text-white font-semibold transition-colors ${pathname.startsWith("/work") ? "text-white" : "text-gray-500"}`}
							>
								<span>Work</span>
								<ChevronDown className="w-4 h-4" />
							</button>
							{isWorkDropdownOpen && (
								<div className="absolute top-full right-0 mt-2 w-48 bg-background rounded-md shadow-lg py-1 border">
									<a href="#projects" className="block px-4 py-2 text-sm hover:bg-secondary transition-colors" >Projects</a>
									<a href="#experience"className="block px-4 py-2 text-sm hover:bg-secondary transition-colors">Experience</a>
								</div>
							)}
						</div> */}
						<Link href="/contact" className={getLinkClasses("/contact")}>Contact</Link>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center">
						<button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-primary transition-colors">
							{isMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="md:hidden bg-background border-t">
					<div className="px-2 pt-2 pb-3 space-y-1">
						<a href="#" className="block px-3 py-2 text-white hover:bg-secondary rounded-md transition-colors">Home</a>
						<a href="#" className="block px-3 py-2 text-white hover:bg-secondary rounded-md transition-colors">Resume</a>
						{/* <button onClick={handleWorkClick} className="flex items-center w-full px-3 py-2 text-white hover:bg-secondary rounded-md transition-colors">
							<span>Work</span>
							<ChevronDown className="w-4 h-4 ml-2" />
						</button>
						{isWorkDropdownOpen && (
							<div className="pl-6 space-y-1">
								<a href="#projects" className="block px-3 py-2 text-white hover:bg-secondary rounded-md transition-colors">Projects</a>
								<a href="#experience" className="block px-3 py-2 text-white hover:bg-secondary rounded-md transition-colors">Experience</a>
							</div>
						)} */}
						<a href="#" className="block px-3 py-2 text-white hover:bg-secondary rounded-md transition-colors">Contact</a>
					</div>
				</div>
			)}
		</nav>
	);
}
