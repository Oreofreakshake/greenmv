import Section from "./_components/section";
import About from "./_components/about";
import Form from "./_components/form";

export default function Home() {
    return (
        <div className="min-h-screen max-w-screen-xl mx-auto">
            <div className="px-24">
                <Section />
                <About />
                <div className="font-poppins">
                    <div>
                        <div>
                            <div className="font-semibold text-gray-600 pb-1">
                                WORK
                            </div>
                            <div className="text-3xl mb-16 font-semibold">
                                Our projects
                            </div>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum ornare sapien enim, vel finibus
                            risus posuere eu. Maecenas placerat diam a sem
                            congue, et vestibulum metus varius. Praesent in dui
                            ligula. Donec pulvinar neque vitae vulputate semper.
                        </div>
                    </div>

                    <Form />
                </div>
                <div className="pt-20 pb-52"></div>
            </div>
        </div>
    );
}
