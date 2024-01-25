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

    const routeToIssues = () => {
        router.push("/issues"); // Adjust the path as needed
    };

    return (
        <div className="font-poppins">
            <Navbar
                routeLogin={logout}
                routeHome={routeToHome}
                Route="Home"
                Submit=""
                Login="Logout"
            />
            <header aria-label="Page Header" className="bg-gradient-to-r from-blue-500 to-indigo-700 text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="text-center mb-24">
                        <h1 className="text-4xl font-bold sm:text-5xl">
                            Dashboard
                        </h1>
                        <p className="mt-4 text-xl">
                            Welcome to your dashboard! 🚀
                        </p>
                    </div>
                </div>
            </header>

            <main>
                <div className="my-12 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <section aria-label="Overview" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                        {/* Insert overview widgets or stats here */}
                    </section>

                    <section aria-label="Issues">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Issues</h2>
                        <Table />
                    </section>
                </div>

                <div className="flex justify-center my-8">
                    <button
                        onClick={routeToIssues}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                    >
                        View All Issues
                    </button>
                </div>
            </main>
        </div>
    );
}
