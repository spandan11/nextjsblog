import React from 'react'
import Styles from './page.module.css'
import Image from 'next/image';
import Button from '@/components/button/Button';

const Contact = () => {
    return (
        <div className={Styles.container}>
            <h1 className={Styles.title}>Let's Keep in Touch</h1>
            <div className={Styles.content}>
                <div className={Styles.imgContainer}>
                    <Image
                        src="/contact.png"
                        alt='Contact Image'
                        fill={true}
                        className={Styles.image}
                    />
                </div>
                <form className={Styles.form}>
                    <input type="text" name="name" placeholder='name' className={Styles.input} />
                    <input type="text" name="email" placeholder='email' className={Styles.input} />
                    <textarea name="message" placeholder='message' cols="30" rows="10" className={Styles.textArea}></textarea>
                    <Button url="#" text="Send" />
                </form>
            </div>
        </div>
    )
}

export default Contact;