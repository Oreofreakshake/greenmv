"use client";
import Image from "next/image";
import Navbar from "../_components/navbar/navbar";
import loginimage from "../assets/loginimage.jpg";
import { useRouter } from "next/navigation";
import axios from "axios";
import cookie from "js-cookie";
import { useState } from "react";

export default function LoginPage() {
    const router = useRouter();
    const [incorrectMessage, setIncorrectMessage] = useState("");
    const [incorrect, setIncorrect] = useState(false);
    const [user, SetUser] = useState({
        username: "",
        password: "",
    });

    const handleLoginClick = () => {
        router.push("/");
    };

    const loginToDash = () => {
        axios
            .post("http://localhost:3010/api/login", {
                username: user.username,
                password: user.password,
            })
            .then((res) => {
                cookie.set("auth", `$`);
                cookie.set("accessToken", res.data["accessToken"]);
                cookie.set("refreshToken", res.data["refreshToken"]);
                cookie.set("user", res.data["user"]["username"]);
                SetUser({
                    username: "",
                    password: "",
                });
                window.location.reload();
            })
            .catch((error) => {
                setIncorrect(true);
                setIncorrectMessage(error.response.data);
            });
    };

    const InputChange = (event: { target: { name: any; value: any } }) => {
        const { name, value } = event.target;
        SetUser((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <div>
            <Navbar
                routeHome={handleLoginClick}
                routeLogin={() => "pass"}
                Route="User Login"
                Submit=""
                Login=""
            />

            <section className="bg-white font-poppins">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                        <Image
                            alt="Pattern"
                            src={loginimage}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </aside>

                    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                        <div className="max-w-xl lg:max-w-3xl">
                            {incorrect && (
                                <div className="text-red-500 font-fira transition ease-in duration-150">
                                    {incorrectMessage}
                                </div>
                            )}
                            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                Login to Dashboard
                            </h1>

                            <p className="mt-4 leading-relaxed text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Eligendi nam dolorum aliquam,
                                quibusdam aperiam voluptatum.
                            </p>

                            <form action="#">
                                <div className="flex gap-6 pb-5 pt-5">
                                    <label
                                        htmlFor="UserEmail"
                                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                                    >
                                        <input
                                            type="text"
                                            placeholder=" username"
                                            name="username"
                                            onChange={InputChange}
                                            value={user.username}
                                            required
                                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                        />

                                        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                                            Username
                                        </span>
                                    </label>
                                    <label
                                        htmlFor="UserEmail"
                                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                                    >
                                        <input
                                            type="password"
                                            placeholder="password"
                                            name="password"
                                            onChange={InputChange}
                                            value={user.password}
                                            required
                                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                        />

                                        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                                            Password
                                        </span>
                                    </label>
                                </div>

                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button
                                        onClick={loginToDash}
                                        className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </section>
        </div>
    );
}
