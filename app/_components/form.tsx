"use client";

import { useState } from "react";

export default function Form() {
    
    return (
        <section className="bg-white pt-12">
            {/* name and contact */}
            <div className="flex gap-4 p-4">
                <label
                    htmlFor="UserEmail"
                    className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                    <input
                        type="email"
                        id="UserEmail"
                        placeholder="Email"
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
                        type="email"
                        id="UserEmail"
                        placeholder="Email"
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Contact (Email/Number)
                    </span>
                </label>
            </div>

            {/* text area */}
            <div>
                <div className="overflow-hidden p-4 rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                    <textarea
                        id="OrderNotes"
                        className="w-full resize-none border-none align-top focus:outline-none sm:text-sm"
                        rows={4}
                        placeholder="What's the issue?"
                    ></textarea>

                    <div className="flex items-center justify-end gap-2 bg-white p-3">
                        <button
                            type="button"
                            className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
                        >
                            Clear
                        </button>

                        <button
                            type="button"
                            className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>

            {/* map */}
            
        </section>
    );
}
