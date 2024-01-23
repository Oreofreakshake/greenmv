"use client";
import { useState, useEffect } from "react";
//my components

interface NavbarProps {
    routeLogin: () => void;
    routeHome: () => void;
    Route: string;
    Submit: string;
    Login: string;
}

export default function Navbar({
    routeLogin,
    routeHome,
    Route,
    Submit,
    Login,
}: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 10;
            setIsScrolled(scrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`p-4 font-poppins fixed top-0 w-full z-10 transition-all ease-in duration-150 ${
                isScrolled
                    ? "shadow-md backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200"
                    : "bg-white "
            }`}
        >
            <div
                className={`mx-auto transition-all ease-in duration-150 ${
                    isScrolled ? "pt-0 pb-0" : "pt-4 pb-4"
                } max-w-screen-xl px-32`}
            >
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600" href="/">
                            Logo
                        </a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <div className="flex items-center gap-7">
                                <button onClick={routeHome}>{Route}</button>
                                <button>{Submit}</button>
                                <button onClick={routeLogin}>{Login}</button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
