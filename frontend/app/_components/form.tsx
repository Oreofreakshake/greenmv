"use client";

import { useState } from "react";
import axios from "axios";
//my components
import Alert from "./alert";

export default function Form() {
    const [submitData, setSubmitData] = useState(false);

    const [data, SetData] = useState({
        name: "",
        contact: "",
        issue: "",
        location: "",
    });

    const buttonClick = () => {
        axios
            .post("http://localhost:3010/api/data", data)
            .then(() => {
                setSubmitData(true);
                SetData({
                    name: "",
                    contact: "",
                    issue: "",
                    location: "",
                });
            })
            .catch((error: any) => {
                console.log(error);
            });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    const handleClose = () => {
        setSubmitData(false);
    };

    const InputChange = (event: { target: { name: any; value: any } }) => {
        const { name, value } = event.target;
        SetData((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <section className="bg-white pt-12">
            <Alert show={submitData} handleClose={handleClose} />

            {/* name and contact */}
            <form onSubmit={handleSubmit}>
                <div className="flex gap-4 p-4">
                    <label
                        htmlFor="UserEmail"
                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                    >
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Name"
                            onChange={InputChange}
                            value={data.name}
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />

                        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                            Name
                        </span>
                    </label>
                    <label
                        htmlFor="UserEmail"
                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                    >
                        <input
                            type="text"
                            name="contact"
                            required
                            placeholder="Contact"
                            onChange={InputChange}
                            value={data.contact}
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />

                        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                            Contact
                        </span>
                    </label>
                    <label
                        htmlFor="UserEmail"
                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                    >
                        <input
                            type="text"
                            name="location"
                            required
                            placeholder="location"
                            onChange={InputChange}
                            value={data.location}
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />

                        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                            Location
                        </span>
                    </label>
                </div>

                {/* text area */}
                <div>
                    <div className="overflow-hidden p-4 rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <textarea
                            className="w-full resize-none border-none align-top focus:outline-none sm:text-sm"
                            name="issue"
                            rows={4}
                            onChange={InputChange}
                            value={data.issue}
                            placeholder="What's the issue?"
                        ></textarea>

                        <div className="flex items-center justify-end gap-2 bg-white p-3">
                            <button
                                onClick={buttonClick}
                                type="button"
                                className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>

            {/* map */}
        </section>
    );
}
