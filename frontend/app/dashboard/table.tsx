"use client";
//my components
import axios from "axios";
import React, { useEffect, useState } from "react";
import cookies from "js-cookie";
import RefreshIcon from "../_components/refreshIcon";

interface DataItem {
    id: number;
    name: string;
    contact: string;
    location: string;
}

export default function Table() {
    const [data, setData] = useState<DataItem[]>([]);

    const accessToken = cookies.get("accessToken");

    const header = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    const refresh = () => {
        axios
            .get("http://localhost:3010/api/data", header)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log("error");
            });
    };

    return (
        <div>
            <div className="flex gap-4 mb-3">
                <button onClick={refresh}>
                    <RefreshIcon />
                </button>
                Refresh the database
            </div>

            <div className="overflow-x-auto rounded-lg mb-24 border border-gray-200">
                <table className="min-w-full divide-y-2 text-left divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Name
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Contact
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Location
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Details
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {data
                            .slice()
                            .reverse()
                            .map((data) => (
                                <tr key={data.id}>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {data.name}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {data.contact}
                                    </td>

                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {data.location}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        <button className="inline-block rounded bg-indigo-600 px-4 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
                                            view
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
