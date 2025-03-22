import { LinkedInUrl } from "@/app/constants/links";
import Link from "next/link";
import React from "react";

export default function ContactHeader() {
    return (
        <div className="w-full bg-[#1d1d1f]">
            <header className="flex items-center justify-center max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <h1 className="font-medium text-4xl w-2/3 text-white">Contact</h1>
                <Link href={LinkedInUrl} target="_blank" className="border-2 border-gray-400 font-bold hover:bg-[#0a66c2] hover:border-[#0a66c2] hover:text-white text-white px-6 py-2 rounded-full flex items-center gap-2 mx-auto transition-colors">
                    Connect on LinkedIn
                </Link>
            </header>
        </div>
    );
}
