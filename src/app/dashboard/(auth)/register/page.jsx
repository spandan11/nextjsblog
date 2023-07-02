"use client"
import React, { useState } from 'react'
import Styles from "./page.module.css"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Register = () => {
    const [err, setErr] = useState(false);
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            res.status === 201 && router.push("/dashboard/login?success=Account has been created");
        } catch (error) {
            setErr(true);
        }
    }
    return (
        <div className={Styles.container}>
            <form className={Styles.form} onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder='username' className={Styles.input} required />
                <input type="email" name="email" placeholder='email' className={Styles.input} required />
                <input type="password" name="password" placeholder='password' className={Styles.input} required />
                <button className={Styles.button}>Register</button>
            </form>
            {err && "Something went wrong"}
            <Link href="/dashboard/login">Login with an existing account</Link>
        </div>
    )
}

export default Register;