"use client";
import Image from "next/image";
import Navbar from "../_components/navbar/navbar";
import loginimage from "../assets/loginimage.jpg";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    const handleLoginClick = () => {
        router.push("/");
    };
    return (
        <div>
            <Navbar routeHome={handleLoginClick} Route="Home" Submit="Submit" />
            <section className="bg-white">
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
                                            id="UserEmail"
                                            placeholder="Email"
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
                                            id="UserEmail"
                                            placeholder="Email"
                                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                        />

                                        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                                            Password
                                        </span>
                                    </label>
                                </div>

                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
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
