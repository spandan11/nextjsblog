"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Styles from './page.module.css'
import useSWR from 'swr';

export const metadata = {
    title: 'Blog Page',
    description: 'This is a next js blog page.',
}

const Blog = () => {

    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, mutate, error, isLoading } = useSWR("/api/posts", fetcher);
    return (
        <div className={Styles.maincontainer}>
            {data?.map((item) => (
                <Link href={`/blog/${item._id}`} className={Styles.container} key={item._id}>
                    <div className={Styles.imgContainer}>
                        <Image
                            src={item.img}
                            alt='image'
                            width={400}
                            height={250}
                            className={Styles.image}
                        />
                    </div>
                    <div className={Styles.content}>
                        <h1 className={Styles.title}>{item.title}</h1>
                        <p className={Styles.desc}>{item.desc}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Blog;