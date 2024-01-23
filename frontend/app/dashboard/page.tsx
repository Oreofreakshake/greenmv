"use client";

import { useState } from "react";
import LoginPage from "./login";

import cookies from "js-cookie";
import DashboardPage from "./dashboard";

export default function Login() {
    const [auth, setAuth] = useState(cookies.get("auth"));
    return <div>{auth ? <DashboardPage /> : <LoginPage />}</div>;
}
