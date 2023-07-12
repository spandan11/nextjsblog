import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Styles from './page.module.css'

async function getData() {
    const res = await fetch(`${process.env.SITE_URL}/api/posts`, { next: { revalidate: 10 } });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return await res.json();
}

export const metadata = {
    title: 'Blog Page',
    description: 'This is a next js blog page.',
}

const Blog = async () => {
    const data = await getData();
    return (
        <div className={Styles.maincontainer} >
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
        </div >
    )
}

export default Blog;