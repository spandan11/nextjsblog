"use client"
import React from 'react'
import Styles from "./page.module.css"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Login = () => {
    const session = useSession();
    const router = useRouter();
    if (session.status === "loading") {
        return <p>Loading...</p>
    }

    if (session.status === "authenticated") {
        router?.push("/dashboard");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        signIn("credentials", { email, password })
    }

    return (
        <div className={Styles.container}>
            <form className={Styles.form} onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='email' className={Styles.input} required />
                <input type="password" name="password" placeholder='password' className={Styles.input} required />
                <button className={Styles.button}>Login</button>
            </form>
            <button onClick={() => signIn("google")}>Login with Google</button>
        </div>
    )
}

export default Login;