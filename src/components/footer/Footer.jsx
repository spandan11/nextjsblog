import React from 'react'
import Image from 'next/image'
import Styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={Styles.container}>
            <div>@2023 Spandan. All rights reserved.</div>
            <div className={Styles.social}>
                <Image src="/1.png" className={Styles.icon} width={15} height={15} alt='facebook' />
                <Image src="/2.png" className={Styles.icon} width={15} height={15} alt='instagram' />
                <Image src="/3.png" className={Styles.icon} width={15} height={15} alt='twitter' />
                <Image src="/4.png" className={Styles.icon} width={15} height={15} alt='youtube' />
            </div>
        </div>
    )
}

export default Footer;