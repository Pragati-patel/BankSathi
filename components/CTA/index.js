import Image from 'next/image'
import styles from './style.module.scss'
import { Images } from '@/public/assests/images/images'


export default function CTA() {
    return (
        <div className='bg-white md:pt-24 md:mt-16 w-full overflow-x-clip'>

            <div className={styles.cta_wrapper}>
                <div className={styles.cta_containor}>
                    <div className={styles.gplay}>
                        <Image src={Images.gplay} className={styles.img} alt="image"/>
                    </div>
                    <div className={styles.mobile_pic}>
                        <Image src={Images.bePhone} className={styles.img} alt='mobilepic' />

                    </div>
                </div>
            </div>
        </div>
    )
}