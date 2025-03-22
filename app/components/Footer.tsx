import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { EmailUrl, GithubUrl, LinkedInUrl } from "../constants/links";
import { Colors } from "../constants/colors";

export default function Footer() {
	return (
		<footer className="bg-[#1d1d1f] py-12">
			<div className="max-w-7xl mx-auto px-4 md:px-8">
				<div className="flex flex-col md:flex-row justify-between items-center gap-8">
					<div className="text-center md:text-left">
						<h3 className="text-2xl font-bold mb-2 text-white">Let&apos;s Connect</h3>
						<p className="text-white">
							Open for opportunities and collaboration
						</p>
					</div>
					<div className="flex gap-6">
						<Link
							href={LinkedInUrl}
							target="_blank"
							style={{ "--hover-color": Colors.LinkedInColorHex } as React.CSSProperties}
							className="bg-background hover:bg-[var(--hover-color)] hover:text-white p-3 rounded-full transition-colors"
						>
							<Linkedin className="w-6 h-6" />
						</Link>
						<Link
							href={GithubUrl}
							target="_blank"
							style={{ "--hover-color": Colors.GitHubColorHex } as React.CSSProperties}
							className="bg-background hover:bg-[var(--hover-color)] hover:text-white p-3 rounded-full transition-colors"
						>
							<Github className="w-6 h-6" />
						</Link>
						<Link
							href={`mailto:${EmailUrl}`}
							target="_blank"
							style={{ "--hover-color": Colors.EmailColorHex } as React.CSSProperties}
							className="bg-background hover:bg-[var(--hover-color)] hover:text-white p-3 rounded-full transition-colors"
						>
							<Mail className="w-6 h-6" />
						</Link>
					</div>
				</div>
				<div className="mt-8 pt-8 border-t text-center text-muted-foreground">
					<p>
						&copy; {new Date().getFullYear()} Deval Panchal. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
