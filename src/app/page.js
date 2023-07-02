import Image from 'next/image'
import Styles from './page.module.css'
import Button from '@/components/button/Button'
import Hero from 'public/hero.png'

export default function Home() {
  return (
    <div className={Styles.container}>
      <div className={Styles.item}>
        <h1 className={Styles.title}>Better design for your digital products.</h1>
        <p className={Styles.desc}>Turning your idea into Reality. We bring together the teams from the global tech industry.</p>
        <Button url="/portfolio" text="See Our Works" />
      </div>

      <div className={Styles.item}>
        <Image src={Hero} alt='Hero Image' className={Styles.img} />
      </div>
    </div>
  )
}
