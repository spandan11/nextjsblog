"use client"
import React from 'react'
import Styles from './page.module.css'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import useSWR from "swr";
import Image from 'next/image'

const Dashboard = () => {
    const session = useSession();
    const router = useRouter();

    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, mutate, error, isLoading } = useSWR(
        `/api/posts?username=${session?.data?.user.name}`,
        fetcher
    );

    console.log(data);

    if (session.status === "loading") {
        return <p>Loading...</p>
    }

    if (session.status === "unauthenticated") {
        router?.push("/dashboard/login");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const desc = e.target[1].value;
        const img = e.target[2].value;
        const content = e.target[3].value;

        try {
            await fetch("/api/posts", {
                method: "POST",
                body: JSON.stringify({
                    title, desc, img, content, username: session.data.user.name,
                }),
            })
            mutate();
            e.target.reset()
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async (id) => {
        try {
            await fetch(`/api/posts/${id}`, {
                method: "DELETE",
            });
            mutate();
        } catch (error) {
            console.log(error);
        }
    }

    if (session.status === "authenticated") {
        return <div className={Styles.container}>
            <div className={Styles.posts}>
                {isLoading ? "Loading" : data?.map((post) => (
                    <div className={Styles.post} key={post._id}>
                        <div className={Styles.imgContainer}>
                            <Image src={post.img} alt='' width={200} height={100} />
                        </div>
                        <h2 className={Styles.postTitle}>
                            {post.title}
                        </h2>
                        <span className={Styles.delete} onClick={() => handleDelete(post._id)}>
                            X
                        </span>
                    </div>
                ))}
            </div>

            <form className={Styles.new} onSubmit={handleSubmit}>
                <h1>Add New Post</h1>
                <input type="text" placeholder="Title" className={Styles.input} />
                <input type="text" placeholder="Desc" className={Styles.input} />
                <input type="text" placeholder="Image" className={Styles.input} />
                <textarea
                    placeholder="Content"
                    className={Styles.textArea}
                    cols="30"
                    rows="10"
                ></textarea>
                <button className={Styles.button}>Send</button>
            </form>
        </div>
    }
}

export default Dashboard;