"use client";
import { useRouter } from "next/navigation";

//my components
import Section from "./_components/section";
import About from "./_components/about";
import Form from "./_components/form";
import Navbar from "./_components/navbar/navbar";

export default function Home() {
    const router = useRouter();

    const handleLoginClick = () => {
        router.push("/dashboard");
    };
    return (
        <div>
            <Navbar
                routeLogin={handleLoginClick}
                Route="About"
                Submit="Submit"
                Login="Login"
            />
            <div className="min-h-screen max-w-screen-xl mx-auto">
                <div className="px-24">
                    <Section />
                    <About />
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
                                adipiscing elit. Vestibulum ornare sapien enim,
                                vel finibus risus posuere eu. Maecenas placerat
                                diam a sem congue, et vestibulum metus varius.
                                Praesent in dui ligula. Donec pulvinar neque
                                vitae vulputate semper.
                            </div>
                        </div>
                        <div className="max-w-screen-sm">
                            <Form />
                        </div>
                    </div>
                    <div className="pt-20 pb-52"></div>
                </div>
            </div>
        </div>
    );
}
