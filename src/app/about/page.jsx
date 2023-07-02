import React from 'react'
import Image from 'next/image'
import Styles from './page.module.css'
import Button from '@/components/button/Button'

const About = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.imgContainer}>
                <Image
                    src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    fill={true}
                    alt='Banner About Image'
                    className={Styles.img}
                />
                <div className={Styles.imgText}>
                    <h1 className={Styles.imgTitle}>Digital Storytellers</h1>
                    <h2 className={Styles.imgDesc}>Handcrafting award winning digital experiences</h2>
                </div>
            </div>

            <div className={Styles.textContainer}>
                <div className={Styles.item}>
                    <h1>Who Are We?</h1>
                    <p className={Styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
                        beatae, a suscipit eos. Animi quibusdam cum omnis officiis
                        <br />
                        <br />
                        voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
                        esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
                        officiis voluptatum quo ea eveniet?
                    </p>
                </div>
                <div className={Styles.item}>
                    <h1 className={Styles.title}>What We Do?</h1>
                    <p className={Styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
                        Creative Illustrations
                        <br />
                        <br /> - Dynamic Websites
                        <br />
                        <br /> - Fast and Handy
                        <br />
                        <br /> - Mobile Apps
                    </p>
                    <Button url="/contact" text="Contact" />
                </div>
            </div>
        </div>
    )
}

export default About