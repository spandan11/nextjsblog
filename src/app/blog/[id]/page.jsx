import React from 'react'
import Styles from './page.module.css'
import Image from 'next/image'

async function getData(id) {
    const res = await fetch(`${process.env.SITE_URL}/api/posts/${id}`, { next: { revalidate: 10 } });

    if (!res.ok) {
        return notFound()
    }

    return await res.json();
}

export async function generateMetadata({ params }) {
    const post = await getData(params.id);
    return {
        title: post.title,
        description: post.desc,
    };
}

const BlogPost = async ({ params }) => {
    const data = await getData(params.id);
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