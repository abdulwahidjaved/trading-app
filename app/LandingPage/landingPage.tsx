"use client";

import React from "react";
import { NavbarDemo } from "./landingPageComponenets/resizible-navbar-widget";
import { TextGenerateEffectDemo } from "./landingPageComponenets/text-generate-effect";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
    LinkAsButton,
    LinkAsButton1,
} from "./landingPageComponenets/button-widget";
import { BentoGridSecondDemo } from "./landingPageComponenets/bento-grid-widget";
import "./landingPage.css";
import {
    Github,
    Twitter,
    Linkedin,
} from "lucide-react";

const LandingPage = () => {
    return (
        <div className="flex min-h-screen flex-col">
            {/* ── NAVBAR ───────────────────────────────────────────────────────────── */}
            <header className="header">
                <NavbarDemo />
            </header>

            {/* ── MAIN CONTENT ────────────────────────────────────────────────────── */}
            <main className="flex flex-1 flex-col items-center px-4">
                {/* Responsive row/column layout */}
                <div className="flex w-full max-w-6xl flex-col-reverse items-center justify-between gap-10 py-10 lg:flex-row">
                    {/* TEXT + BUTTONS */}
                    <div className="flex max-w-xl flex-col items-center gap-6 text-center lg:items-start lg:text-left">
                        <TextGenerateEffectDemo />

                        <p className="text-balance leading-relaxed">
                            Our virtual trading web app offers a realistic and risk‑free
                            environment for anyone looking to explore the world of financial
                            markets. Designed for both beginners and experienced traders, the
                            platform lets you trade stocks, cryptocurrencies, and other assets
                            with virtual money while streaming real‑time market data. Build
                            and track your portfolio, test strategies, and learn through
                            built‑in tutorials. Leaderboards and regular challenges keep the
                            experience competitive and fun—the perfect sandbox to sharpen your
                            financial skills without putting any capital on the line.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                            <LinkAsButton />
                            <LinkAsButton1 />
                        </div>
                    </div>

                    {/* LOTTIE ANIMATION */}
                    <DotLottieReact
                        src="https://lottie.host/0d99f449-521f-4958-a091-c64dd533ddae/lKojgyZjIc.json"
                        autoplay 
                        className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-80 lg:w-80"
                    />
                </div>

                {/* BENTO GRID BELOW */}
                <div className="mt-10 w-full max-w-6xl">
                    <BentoGridSecondDemo />
                </div>
            </main>

            {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
            <footer className="w-full border-t bg-background text-muted-foreground mt-[30px]">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row">
                    <div className="text-[30px] font-semibold tracking-wide text-green-400">
                        TradeX
                    </div>

                    <nav className="flex flex-wrap justify-center gap-6 text-sm">
                        <a href="#" className="hover:text-green-400 transition-colors">
                            Home
                        </a>
                        <a href="#features" className="hover:text-green-400 transition-colors">
                            Features
                        </a>
                        <a href="#about" className="hover:text-green-400 transition-colors">
                            About
                        </a>
                        <a href="#contact" className="hover:text-green-400 transition-colors">
                            Contact
                        </a>
                    </nav>

                    <div className="flex gap-4">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500"
                        >
                            <Twitter className="h-5 w-5" />
                        </a>
                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <div className="border-t px-4 py-4 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} YourBrand. All rights reserved.
                </div>
            </footer>


        </div>
    );
};

export default LandingPage;
