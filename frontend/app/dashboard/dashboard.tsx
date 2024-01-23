"use client";

import { useRouter } from "next/navigation";
import cookies from "js-cookie";
import axios from "axios";
import { useEffect } from "react";
import Navbar from "../_components/navbar/navbar";
import Table from "./table";

export default function DashboardPage() {
    const router = useRouter();

    const logout = () => {
        cookies.remove("auth");
        cookies.remove("accessToken");
        cookies.remove("refreshToken");
        window.location.reload();
    };

    useEffect(() => {
        axios
            .post("http://localhost:3010/api/refresh", {
                token: cookies.get("refreshToken"),
            })
            .then((res) => {
                cookies.set("accessToken", res.data["accessToken"]);
                cookies.set("refreshToken", res.data["refreshToken"]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const routeToHome = () => {
        router.push("/");
    };

    return (
        <div>
            <Navbar
                routeLogin={logout}
                routeHome={routeToHome}
                Route="Home"
                Submit=""
                Login="Logout"
            />
            <header aria-label="Page Header">
                <div className="mx-auto font-poppins max-w-screen-xl mt-32 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="sm:flex sm:justify-between mb-24">
                        <div className="sm:text-left">
                            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                                Dashboard
                            </h1>

                            <p className="mt-1.5 text-sm font-fira text-gray-500">
                                Let&apos;s review submissions! 🎉
                            </p>
                        </div>
                    </div>
                    <Table />
                </div>
            </header>
        </div>
    );
}
