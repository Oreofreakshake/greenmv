"use client";
//my components
import axios from "axios";
import React, { useEffect, useState } from "react";
import cookies from "js-cookie";
import RefreshIcon from "../_components/refreshIcon";
import ViewDetail from "../_components/viewdetail";

interface DataItem {
    id: number;
    name: string;
    contact: string;
    location: string;
    issue: string;
    assignedTo: string;
    category: string;
    status: string;
}

export default function Table() {
    const [data, setData] = useState<DataItem[]>([]);
    const [adminData, setAdminData] = useState<DataItem[]>([]);

    const accessToken = cookies.get("accessToken");
    const user = cookies.get("user");
    const role = cookies.get("role");
    console.log(user)

    const header = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    const refresh = () => {

        axios
            .get(`http://localhost:3010/api/data/${user}`, header)
            .then((response) => {
                setData(response.data);

            })
            .catch((error) => {
                console.log("error");
            });
            axios
            .get(`http://localhost:3010/api/data`, header)
            .then((response) => {
                setAdminData(response.data);

            })
            .catch((error) => {
                console.log("error");
            });
    };
    

    const count = data.length;
    let raisedIssues = 0;
    for (let i = 0; i < count; i++) {
        raisedIssues++;
    }

    let inprogress = 0;
    for (let i = 0; i < count; i++) {
        if (data[i].status === "in progress") inprogress++;
    }

    let done = 0;
    for (let i = 0; i < count; i++) {
        if (data[i].status === "done") done++;
    }

    return (
        <div>
            <div className=" mb-12">
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-red-700">
                    Raised Issues: {raisedIssues}
                </span>
                <span className="whitespace-nowrap rounded-full ml-4 bg-purple-100 px-2.5 py-0.5 text-sm text-blue-700">
                    Issues in progress: {inprogress}
                </span>
                <span className="whitespace-nowrap rounded-full ml-4 bg-purple-100 px-2.5 py-0.5 text-sm text-green-700">
                    Completed Issues: {done}
                </span>
            </div>

            <div className="flex gap-4 mb-3">
            <button
                        onClick={refresh}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                    >
                    View All Issues
                    </button>
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
                    {
    (role === 'admin' ? adminData : data)
        .slice()
        .reverse()
        .map((item) => (
            <tr key={item.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {item.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {item.contact}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {item.location}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <ViewDetail
                        issue={item.issue}
                        assignedTo={item.assignedTo}
                        category={item.category}
                        status={item.status}
                        id={item.id}
                    />
                </td>
            </tr>
        ))
}

                    </tbody>
                </table>
            </div>
        </div>
    );
}
