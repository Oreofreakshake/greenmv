"use client"

import React, { useState, FormEvent } from 'react';
import Navbar from './navbar/navbar';
import { useRouter } from "next/navigation";
import axios from 'axios';

export default function SignUpPage() {
    const router = useRouter();
    const [user, SetUser] = useState({
        username: "",
        number: "",
        password: "",
    });

    const InputChange = (event: { target: { name: any; value: any } }) => {
        const { name, value } = event.target;
        SetUser((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = () => {
        axios
            .post("http://localhost:3010/api/user", {
                username: user.username,
                number: user.number,
                password: user.password,
            })
            .then((res) => {
   
                SetUser({
                    username: "",
                    number: "",
                    password: "",
                });
                router.push("/")
            })
            .catch((error) => {
                console.log("error")
            });
    };

    const RouteToSignIn =()=>{
        router.push("/")
    }

    return (
        <div>
            <Navbar routeHome={RouteToSignIn}  Route='Home'/>
            <div className="flex min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 justify-center items-center">
            <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 w-full max-w-md">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Sign Up</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            name='username'
                            onChange={InputChange}
                            value={user.username}
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name='number'
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={InputChange}
                            value={user.number}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name='password'
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={InputChange}
                            value={user.password}
                        />
                    </div>
                    <div>
                        <button
                        onClick={handleSubmit}
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>

        </div>
        
    );
}
