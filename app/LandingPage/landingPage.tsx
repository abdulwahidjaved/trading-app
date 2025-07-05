"use client";
import { NavbarDemo } from "./landingPageComponenets/resizible-navbar-widget";
import "./landingPage.css";
import { TextGenerateEffectDemo } from "./landingPageComponenets/text-generate-effect";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const LandingPage = () => {
    return (
        <>
            <div>
                <header className="header">
                    <NavbarDemo />
                </header>
                <main className="flex grow flex-col items-center justify-center ">
                    <TextGenerateEffectDemo />
                    <DotLottieReact
                        src="https://lottie.host/0d99f449-521f-4958-a091-c64dd533ddae/lKojgyZjIc.json"
                        loop
                        autoplay
                        className="w-[150px] h-[150px] sm:w-[20px] sm:h-[20px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
                    />
                </main>
                <footer>
                    This is footer
                </footer>
            </div>
        </>
    );
}

export default LandingPage;