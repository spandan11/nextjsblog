"use client"

import React from 'react'
import Styles from './page.module.css'
import Image from 'next/image'
import useSWR from 'swr';


const BlogPost = ({ params }) => {

    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, mutate, error, isLoading } = useSWR(`/api/posts/${params.id}`, fetcher);

    const metadata = {
        title: data?.title,
        description: data?.desc,
    };

    return (
        <div className={Styles.container}>
            <div className={Styles.top}>
                <div className={Styles.info}>
                    <h1 className={Styles.title}>
                        {data?.title}
                    </h1>
                    <p className={Styles.desc}>
                        {data?.desc}
                    </p>
                    <div className={Styles.author}>
                        <Image
                            src={data?.img}
                            alt=''
                            width={40}
                            height={40}
                            className={Styles.avatar}
                        />
                        <span className={Styles.username}>{data?.username}</span>
                    </div>
                </div>
                <div className={Styles.imageContainer}>
                    <Image
                        src={data?.img}
                        alt=''
                        fill={true}
                        className={Styles.image}
                    />
                </div>
            </div>
            <div className={Styles.content}>
                <p className={Styles.text}>
                    {data?.content}
                </p>
            </div>
        </div>
    )
}

export default BlogPost