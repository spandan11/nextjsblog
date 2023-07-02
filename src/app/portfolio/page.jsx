import React from 'react'
import Styles from './page.module.css'
import Link from 'next/link';

const Portfolio = () => {
    return (
        <div className={Styles.container}>
            <h1 className={Styles.selectTitle}>Choose a gallery</h1>
            <div className={Styles.items}>
                <Link href="/portfolio/illustrations" className={Styles.item}>
                    <span className={Styles.title} >Illustrations</span>
                </Link>
                <Link href="/portfolio/websites" className={Styles.item}>
                    <span className={Styles.title} >Websites</span>
                </Link>
                <Link href="/portfolio/applications" className={Styles.item}>
                    <span className={Styles.title} >Applications</span>
                </Link>
            </div>
        </div>
    )
}

export default Portfolio;