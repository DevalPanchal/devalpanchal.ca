import React from "react";

export default function ResumeHeader() {
	return (
		<div className="w-full bg-gray-200/30 border-b">
			<header className="flex items-center justify-center max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
				<h1 className="font-medium text-4xl w-2/3">Resume</h1>
				<a 
					href="/resume/Deval_Panchal_Resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="border-2 border-gray-400 font-bold hover:bg-gray-400 hover:text-white text-gray-700 px-6 py-2 rounded-full flex items-center gap-2 mx-auto transition-colors"
				>
					Download as PDF
				</a>
			</header>
		</div>
	);
}
