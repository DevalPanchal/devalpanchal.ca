"use client";

import ContactHeader from "./components/ContactHeader";
import MainSection from "./components/MainSection";
import ResumeFooter from "./components/ResumeFooter";


export default function Contact() {
    return (
        <main className="min-h-screen bg-[#0d0d0d] py-16">
            <ContactHeader />

            <MainSection />

            <ResumeFooter />
        </main>
    );
}
