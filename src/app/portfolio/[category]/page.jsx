import React from 'react'
import Image from 'next/image';
import { notFound } from "next/navigation"
import Styles from './page.module.css'
import Button from '@/components/button/Button';
import { items } from "./data"

const getData = (category) => {
    const data = items[category];

    if (data) {
        return data;
    }

    return notFound()
}

const Category = ({ params }) => {
    const data = getData(params.category);
    return (
        <div className={Styles.container}>
            <h1 className={Styles.catTitle}>{params.category}</h1>
            {data.map((item) => (
                <div className={Styles.item} key={item.id}>
                    <div className={Styles.content}>
                        <h1 className={Styles.title}>{item.title}</h1>
                        <p className={Styles.desc}>{item.desc}</p>
                        <Button url="#" text="See More" />
                    </div>
                    <div className={Styles.imgContainer}>
                        <Image
                            fill={true}
                            src={item.image}
                            alt='image'
                            className={Styles.img}
                        />
                    </div>
                </div>
            ))};
        </div>
    )
}

export default Category;