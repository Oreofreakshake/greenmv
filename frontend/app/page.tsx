"use client";
import { useRouter } from "next/navigation";

//my components
import Section from "./_components/section";
import Form from "./_components/form";
import Navbar from "./_components/navbar/navbar";
import { useState } from "react";
import SignIn from "./_components/signin";
import Cookies from "js-cookie";

export default function Home() {
    const router = useRouter();
    const [auth, setAuth] = useState(Cookies.get("userAuth"));

    const login = () => {
        Cookies.set("userAuth", true);
    };

    const handleLoginClick = () => {
        router.push("/dashboard");
    };

    const handleLogoutClick = () => {
        Cookies.remove("userAuth");
        window.location.reload();
    };

    return (
        <div>
            <Navbar
                routeLogin={handleLogoutClick}
                routeHome={handleLoginClick}
                Route="Dashboard"
                Login="Logout"
                Submit=""
            />
            <div>
                {auth ? (
                    <div className="min-h-screen max-w-screen-xl mx-auto">
                        <div className="px-24">
                            <Section />
                            <div className="font-poppins">
                                <div>
                                    <div>
                                        <div className="font-semibold text-gray-600 pb-1">
                                            SUBMIT
                                        </div>
                                        <div className="text-3xl mb-16 font-semibold">
                                            Show us
                                        </div>
                                    </div>
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Vestibulum ornare
                                        sapien enim, vel finibus risus posuere
                                        eu. Maecenas placerat diam a sem congue,
                                        et vestibulum metus varius. Praesent in
                                        dui ligula. Donec pulvinar neque vitae
                                        vulputate semper.
                                    </div>
                                </div>
                                <div className="max-w-screen-sm">
                                    <Form />
                                </div>
                            </div>
                            <div className="pt-20 pb-52"></div>
                        </div>
                    </div>
                ) : (
                    <SignIn signin={login} />
                )}
            </div>
        </div>
    );
}
